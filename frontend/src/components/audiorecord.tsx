import { AudioRecorder } from 'react-audio-voice-recorder';
import { useState } from "react"
import Table from './table';
import Graph from './graph'

export default function AudioRecord() {
  const [numAudioFiles, setNumAudioFiles] = useState(0);

  let headers = ['Clip', 'Summary', 'Mood Analysis'];

  let dataSummary;
  let dataMood;

  let putdata=[['','','']]

  const addAudioElement = async (blob: Blob) => {
    
    const url = URL.createObjectURL(blob);
    
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    const sendData = new FormData()

    const s: string = numAudioFiles.toString();
    sendData.append('audio', blob, 'audio'+s+'.webm');
    setNumAudioFiles(numAudioFiles+1); //Increment number of audio files

    const response = await fetch('/api', {
      method: 'POST',
      body: sendData
    })



    if (response.ok){
      response.json().then(data => {
        if (data.neutral.includes('e')){
          data.neutral="0.0000";
        }
        if (data.happy.includes('e')){
          data.happy="0.0000";
        }
        if (data.sad.includes('e')){
          data.sad="0.0000";
        }
        if (data.angry.includes('e')){
          data.angry="0.0000";
        }
        if (data.fear.includes('e')){
          data.fear="0.0000";
        }
        // Update the first element of the data array with the audio URL
        putdata[0][0] = audio.src;
        // Assuming 'summary' is an array, adjust accordingly if it's an object
        putdata[0][1] = data.summary;
        // Assuming 'dataMood' is an array, adjust accordingly if it's an object
        putdata[0][2] = [data.neutral, data.happy, data.sad, data.angry, data.fear].toString();
        document.querySelector('.audios').appendChild(audio);


        const summaryText = data.summary; // Assuming data.summary is a string
        // Find the element with the class "summaries"
        const summariesElement = document.querySelector('.summaries');
        // Create a text node with the summary text
        const textNode = document.createTextNode(summaryText.split("\\").join(""));
        // Append the text node to the "summaries" element
        summariesElement.appendChild(textNode);
        summariesElement.appendChild(document.createElement('br'));
        summariesElement.appendChild(document.createElement('br'));


        // Find the element with the class "moods"
        // Put the 5 moods (neutral, happy, sad, angry, fear) in an order and put a br between all of them
        const moodsElement = document.querySelector('.moods');
        // Create a text node with the mood text
        const neutral = document.createTextNode("Neutral: "+ data.neutral.slice(0,4));
        const happy = document.createTextNode("Happy: "+ data.happy.slice(0,4));
        const sad = document.createTextNode("Sad: "+ data.sad.slice(0,4));
        const angry = document.createTextNode("Angry: "+ data.angry.slice(0,4));
        const fear = document.createTextNode("Fear: "+ data.fear.slice(0,4));
  
        // Append the text node to the "moods" element
        moodsElement.appendChild(neutral);
        moodsElement.appendChild(document.createElement('br'));
        moodsElement.appendChild(happy);
        moodsElement.appendChild(document.createElement('br'));
        moodsElement.appendChild(sad);
        moodsElement.appendChild(document.createElement('br'));
        moodsElement.appendChild(angry);
        moodsElement.appendChild(document.createElement('br'));
        moodsElement.appendChild(fear);
        moodsElement.appendChild(document.createElement('br'));
        moodsElement.appendChild(document.createElement('br'));



        //document.querySelector('.moods').appendChild(putdata[0][2]);
        

      })    
    }

    
  };


  return (
    <div className="more">
      <div className="recorder">
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
            // autoGainControl,
            // channelCount,
            // deviceId,
            // groupId,
            // sampleRate,
            // sampleSize,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          // downloadOnSavePress={true}
          downloadFileExtension="webm"
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          showVisualizer={true}
          // showVisualizer={true}
        />
        <br />
      </div>
      <Table headers={headers} data={putdata} />
    </div>
  );
}
