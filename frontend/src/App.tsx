import { AudioRecorder } from 'react-audio-voice-recorder';
import { useState } from "react"

// State hook for managing the number of audio files sent (and that name will be used to store it)


export default function App() {
  const [numAudioFiles, setNumAudioFiles] = useState(0);
  const addAudioElement = async (blob: Blob) => {
    
    const url = URL.createObjectURL(blob);
    
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    const sendData = new FormData()

    const s: string = numAudioFiles.toString();
    sendData.append('audio', blob, 'audio'+s+'.wav');
    setNumAudioFiles(numAudioFiles+1); //Increment number of audio files

    const response = await fetch('/api', {
      method: 'POST',
      body: sendData,
    })

    if (response.ok){
      console.log(response.json()
                  .then(data => console.log(data.summary)))
    }

    
  };

  return (
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
        downloadFileExtension="wav"
        mediaRecorderOptions={{
          audioBitsPerSecond: 128000,
        }}
        showVisualizer={true}
        // showVisualizer={true}
      />
      <br />
    </div>
  );
}
