from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes# Load spaCy model
nlp = spacy.load("en_core_web_sm")


@app.route("/process_text", methods=["POST"])
def process_text():
    data = request.json
    text = data.get("text", "")
    doc = nlp(text)

    entities = [{"text": ent.text, "label": ent.label_} for ent in doc.ents]
    return jsonify({"entities": entities})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
