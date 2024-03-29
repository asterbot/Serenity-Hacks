from flask import Flask, render_template, request,json, jsonify
from flask_cors import CORS
import requests
import summarize
import os
import audio_to_text
import shutil
import moviepy.editor as moviepy
from pydub import AudioSegment

import emotion_analysis

main = Flask(__name__)
CORS(main)

if (os.path.exists('audios')):
    # Delete audios directory if it exists
    shutil.rmtree('audios')
os.mkdir('audios')
os.chdir('audios')   

TEXT_SUMMARY = ''

@main.route('/', methods=['POST','GET'])
def index():       
    if request.method=="POST":
        if 'audio' not in request.files:
            return jsonify({'error':'No audio file provided'})
        
        audio_file = request.files['audio']
        
        file_path = os.path.join(os.getcwd(), audio_file.filename)
        audio_file.save(file_path)
        
        # Convert WebM to WAV using pydub
        audio = AudioSegment.from_file(audio_file.filename, format="webm")
        newfilename = audio_file.filename[-6::-1][::-1]+'.wav'
        audio.export(newfilename, format="wav", parameters=["-ar", "44100", "-ac", "2"])

        file_path = os.path.join(os.getcwd(), newfilename)
        
        # TODO
        # Using this audio file somehow (saved as audio.wav in current directory)
        # Do we need to save it? Not sure. I've done it anyway for now
        # ... (audio processing goes here)
        os.chdir("..")
        voice_emotions = emotion_analysis.emotion_analyzer(file_path)
        os.chdir("audios")
        
        # For summarizing the text, commenting this for now
        # Ideally this should be working on the text received from the audio processing  
        # Idk let's see ¯\_(ツ)_/¯, i think body should be the result of audio processing
        
        
        text = audio_to_text.audio_to_text(file_path)
        body = summarize.summarize_text(text)
        
        json_summarized_text = json.dumps(body)

        return jsonify({'summary':json_summarized_text, 'neutral': json.dumps(voice_emotions[0]), 
                        'happy': json.dumps(voice_emotions[1]), 'sad': json.dumps(voice_emotions[2]), 'angry': json.dumps(voice_emotions[3]),
                        'fear': json.dumps(voice_emotions[4])}) 
        
if __name__=='__main__':
    
    main.run()