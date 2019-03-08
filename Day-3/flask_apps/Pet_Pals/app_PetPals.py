# import necessary libraries
from sqlalchemy import func

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/db.sqlite"

db = SQLAlchemy(app)

class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    type = db.Column(db.String(64))
    age = db.Column(db.Integer)

    def __repr__(self):
        return '<Pet %r>' % (self.name)


@app.before_first_request
def setup():
    # Recreate database each time for demo
    db.drop_all()
    db.create_all()



@app.route("/")
def home():
    return render_template("index_PetPals.html")


# If the request method is POST, save the form data to the database
# Otherwise, return "form.html"
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        name = request.form["petName"]
        type = request.form["petType"]
        age = request.form["petAge"]

        pet = Pet(name=name, type=type, age=age)
        db.session.add(pet)
        db.session.commit()

        return "Pet has been saved"
    return render_template("form_PetPals.html")


@app.route("/api/pals")
def pals():
    results = db.session.query(Pet.type, func.count(Pet.type)).group_by(Pet.type).all()
    pets = []

    for result in results:
        pets.append({
            "type": result[0],
            "number": result[1]
        })

    return jsonify(pets)


if __name__ == "__main__":
    app.run()
