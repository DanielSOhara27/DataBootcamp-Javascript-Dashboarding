from lyrics_RickRoll import get_lyrics

from flask import Flask, jsonify, render_template
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index_RickRoll.html')


@app.route("/pie")
def rick():

    lyrics = get_lyrics()
    labels, values = zip(*lyrics.items())
    trace = {
        "values": values,
        "labels": labels,
        "type":  "pie"
    }

    data = [trace]
    print(data)

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
