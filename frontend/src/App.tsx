import { AudioRecorder } from 'react-audio-voice-recorder';

export default function App() {
  const addAudioElement = async (blob: Blob) => {
    console.log(typeof(blob))
    console.log(Object.keys(blob))

    const url = URL.createObjectURL(blob);
    console.log("Type:", typeof(url))
    console.log(url)

    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    const response = await fetch('/api', {
      method: 'POST',
      body: url,
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
