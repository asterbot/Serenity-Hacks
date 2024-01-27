from flask import Flask, render_template, request,json, jsonify
from flask_cors import CORS
import requests
import summarize

main = Flask(__name__)
CORS(main)

TEXT_SUMMARY = ''

@main.route('/', methods=['POST','GET'])
def index():        
    if request.method=="POST":
        body = request.get_data(as_text=True)
        print("Receiving frontend data: " + body)
        summarized_text = summarize.summarize_text(body)
        print("Summarized text: " + summarized_text)
        json_summarized_text = json.dumps(body)

        return jsonify({'summary':json_summarized_text})

if __name__=='__main__':
    main.run()