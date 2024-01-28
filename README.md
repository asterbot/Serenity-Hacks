# Serenity-Hacks 
Inspiration:
Journaling is one of the best low-cost ways to improve your mental health, but it can also be inconvenient for so many reasons. Traditional pen-and-ink journaling takes a long time to write out, and if you want to journal on the go, you need to always remember to bring a notebook. Existing apps can often overcomplicate what should be simple, asking elaborate prompts, or to try and categorise your emotions. Typing also can pose a problem: we all know typing on a phone kind of sucks, and laptops aren't the peak of portability. 

All of these reasons are why we wanted to make mEmotion, the app that lets you journal anywhere and anytime. mEmotion improves on all of the above problem: by recording voice memos (instead of writing or typing) you can journal much faster and more conveniently than any other way. mEmotion puts no pressure on the user, and is designed to let them say whatever is on their mind. mEmotion is the better way to journal.

What it does
mEmotion can record voice memos, save and organise old memos, and provide emotional insight to the user. Old memos undergo automatic transcription and summarisation, increasing searchability, and all memos have sentiment and emotional analysis, allowing users to look back at their emotional states. 

How we built it
mEmotion is AI/ML and Open Source powered. Various libraries provide transcription, summarisation, and analytical capabilities: sentiment analysis is provided by VADER Sentiment, and emotional analysis by Vokaturi, both open-source ML algorithms. Transcription uses the open-source Python Speech Recognition library, and summarisation uses the Facebook BART Large CNN Model, another open-source ML algorithm

Challenges we ran into
One of the biggest challenges we ran into was connecting back- and front-end. Because mEmotion has so many different functions, each of which have different inputs, there were many steps between recording an audio file and returning our analysis. Primarily, these included converting the audio file to a .wav file and sending it for emotional tone analysis and transcription, then sending that transcription for sentiment and summarisation, and then returning all of the analyses to the frontend and handling the different data. 

Accomplishments that we're proud of
- Learning how to use AI/ML models, especially for tone analysis, as they can be difficult to understand and often lack documentation.
- Succesfully connecting back- and front-end

What we learned
Python and React: each of us had some amount of either Python or React, but by working together, we all increased our capabilties with both Python and React. 

What's next for mEmotion 
If extending to a published app, we would want to increase our analytical capabilities: currently the emotional analysis is limited by the trained model. The accuracy is okay, and it has the basic emotions, but finding a higher-quality (possibly commercialised) model would increase the usefulness of the app. 

pip3 install SpeechRecognition pydub

pip install Moviepy