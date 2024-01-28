from flask import Flask, render_template, request,json, jsonify
from flask_cors import CORS
import requests
# import summarize
import os

import emotion_analysis

main = Flask(__name__)
CORS(main)

TEXT_SUMMARY = ''

@main.route('/', methods=['POST','GET'])
def index():        
    if request.method=="POST":
        if 'audio' not in request.files:
            return jsonify({'error':'No audio file provided'})
        
        audio_file = request.files['audio']
        file_path = os.path.join(os.getcwd(), 'audio.wav')
        audio_file.save(file_path)
        
        # Using this audio file somehow (saved as audio.wav in current directory)
        # Do we need to save it? Not sure. I've done it anyway for now
        # ... (audio processing goes here)
        emotion_analysis.emotion_analyzer("""OpenVokaturi-4-0/examples/Voice_001.wav""")
        
        # For summarizing the text, commenting this for now
        # Ideally this should be working on the text received from the audio processing  
        # Idk let's see ¯\_(ツ)_/¯, i think body should be the result of audio processing
        
        # body = request.get_data(as_text=True)
        # print("Receiving frontend data: " + body)
        # summarized_text = summarize.summarize_text(body)
        # print("Summarized text: " + summarized_text)
        # json_summarized_text = json.dumps(body)

        return jsonify({'summary':'temp'}) # This should return json_summarized_text for summary field

if __name__=='__main__':
    main.run()