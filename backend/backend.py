from flask import Flask, render_template, request,json, jsonify
from flask_cors import CORS
import requests

main = Flask(__name__)
CORS(main)

@main.route('/', methods=['POST','GET'])
def index():
    if request.method=="POST":
        print("HI")
        thing = request.get_data(as_text=True)
        json_string = json.dumps(thing)
        return jsonify({"hi":json_string})

if __name__=='__main__':
    main.run()