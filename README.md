<div align="center">
  <br>

  # <i>mEmotion</i> for SerenityHacks

  <i>Talk therapy anytime</i>

</div>

<p align="center">
    <a href="#inspiration">Inspiration</a> •
    <a href="#what-it-does">What It Does</a> •
    <a href="#how-we-built-it">How We Built It</a> •
    <a href="#challenges-we-ran-into">Challenges</a> •
    <a href="#accomplishments-that-were-proud-of">Accomplishments</a> •
    <a href="#what-we-learned">What We Learned</a> •
    <a href="#whats-next-for-memotion">What's Next</a>
    <a href="#contributors">Contributors</a>
</p>

## Inspiration:
Journaling is one of the best low-cost ways to improve your mental health, but it can also be inconvenient for so many reasons. Traditional pen-and-ink journaling takes a long time to write out, and if you want to journal on the go, you need to always remember to bring a notebook. Existing apps can often overcomplicate what should be simple, asking elaborate prompts, or to try and categorise your emotions. Typing also can pose a problem: we all know typing on a phone kind of sucks, and laptops aren't the peak of portability. 

All of these reasons are why we wanted to make mEmotion, the AI-powered app that lets you journal anywhere and anytime. mEmotion improves on all of the above problem: by recording voice memos (instead of writing or typing) you can journal much faster and more conveniently than any other way. mEmotion puts no pressure on the user, and is designed to let them say whatever is on their mind. mEmotion is the better way to journal.

## What it does
mEmotion can record voice memos, save and organise old memos, and provide emotional insight to the user. Old memos undergo automatic transcription and summarisation, increasing searchability, and all memos have sentiment and emotional analysis, allowing users to look back at their emotional states. User-friendly AI-powered graphs of the emotional and sentiment analysis are included, allowing easy visualisation of the user's emotional state over time.

## How we built it
mEmotion is AI/ML and Open Source powered. Various libraries provide transcription, summarisation, and analytical capabilities: sentiment analysis is provided by the fully VADER tool, and emotional analysis by Vokaturi, both fully open-source ML algorithms. Transcription uses the open-source Python Speech Recognition library, and summarisation uses the Facebook BART Large CNN Model, another open-source ML algorithm. These algorithms make up our backend, which is run on a Flask server.

The frontend uses React. The user audio is sent to the backend as a .wav file through the AudioRecorder library. The graphs and tables were made using Material UI, which retrieves the data from the backend and displays it to the user with a clean, responsive, and accessible interface.

### Technologies

#### Languages
- Python, Typescript, C

#### Frontend Frameworks and Libraries
- React Vite (with Typescript)
- Material UI
- AudioRecorder
- 

#### Backend Frameworks and Libraries
- Flask
- Speech Recognition
- Vokaturi
- VADER
- BART
- ffmpeg

## Challenges we ran into

One of the biggest challenges we ran into was connecting back- and front-end. Because mEmotion has so many different functions, each of which have different inputs, there were many steps between recording an audio file and returning our analysis. Primarily, these included converting the audio file to a .wav file and sending it for emotional tone analysis and transcription, then sending that transcription for sentiment and summarisation, and then returning all of the analyses to the frontend and handling the different data. 

## Accomplishments that we're proud of
- Learning how to use AI/ML models, especially for tone analysis, as they can be difficult to understand and often lack documentation.
- Successfully connecting back- and front-end
- Exploring different UI options and finding the best one for our app

## What we learned
Python and React: each of us had some amount of either Python or React, but by working together, we all increased our capabilties with both Python and React. 

## What's next for mEmotion 

We believe that mEmotion has a lot of potential, and we would love to continue working on it. Eventually, we would like to publish mEmotion as an app, and we have a few ideas for how to improve it:

- **Better UI**: we would like to improve the UI, especially the graphs, to show the date of entries, and allow the user to select a date range to view. We would also like to add a calendar view, so that the user can see their emotional state over time at a glance.
- **Extended Analytical Capabilities**: Currently, mEmotion is limited by the trained model, with a reasonable accuracy and emotion detection range. We would like to customize our models to tailor the app to the user, and possibly find a higher-quality model to increase the usefulness of the app.


## Contributors
* Arjun Sodhi: Full Stack, UI Design, Server Handling
* Teresa Zhang: Emotion Analysis, Backend, UI Design
* Cindy Li: Sentiment Analysis, Summarization, Audio Transcription, Frontend

