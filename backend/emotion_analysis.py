# OpenVokaWavMean.py
# public-domain sample code by Vokaturi, 2022-08-25
# (note that the Vokaturi library that is loaded is not public-domain)
#
# A sample script that uses the VokaturiPlus library to extract
# the emotions from a wav file on disk.
# The file can contain a mono or stereo recording.
#
# Call syntax:
#   python3 examples/OpenVokaWavMean.py path_to_sound_file.wav
#
# For the sound file hello.wav that comes with OpenVokaturi,
# the result should be:
#    Neutral: 0.760
#    Happy: 0.000
#    Sad: 0.238
#    Angry: 0.001
#    Fear: 0.000
import sys
import scipy.io.wavfile
import os

sys.path.append("OpenVokaturi-4-0/api")
import Vokaturi
import platform
import struct

sys.path.pop()

def emotion_analyzer(file_path):
    print("Loading library...")
    if platform.system() == "Darwin":
        assert struct.calcsize ("P") == 8
        Vokaturi.load("OpenVokaturi-4-0/lib/open/macos/OpenVokaturi-4-0-mac.dylib")
    elif platform.system() == "Windows":
        if struct.calcsize ("P") == 4:
            Vokaturi.load("OpenVokaturi-4-0/lib/open/win/OpenVokaturi-4-0-win32.dll")
        else:
            assert struct.calcsize ("P") == 8
            Vokaturi.load("OpenVokaturi-4-0/lib/open/win/OpenVokaturi-4-0-win64.dll")
    elif platform.system() == "Linux":
        assert struct.calcsize ("P") == 8
        Vokaturi.load("OpenVokaturi-4-0/lib/open/linux/OpenVokaturi-4-0-linux.so")
        print ("Analyzed by: %s" % Vokaturi.versionAndLicense())

    print("Reading sound file...")
    print(sys.argv)
    # file_name = ("""OpenVokaturi-4-0/examples/Voice_001.wav""") # sys.argv[1]
    (sample_rate, samples) = scipy.io.wavfile.read(file_path)
    print("   sample rate %.3f Hz" % sample_rate)

    print("Allocating Vokaturi sample array...")
    buffer_length = len(samples)
    print("   %d samples, %d channels" % (buffer_length, samples.ndim))
    c_buffer = Vokaturi.float64array(buffer_length)
    if samples.ndim == 1:
        c_buffer[:] = samples[:] / 32768.0  # mono
    else:
        c_buffer[:] = 0.5*(samples[:,0]+0.0+samples[:,1]) / 32768.0  # stereo

    print("Creating VokaturiVoice...")
    voice = Vokaturi.Voice(sample_rate, buffer_length, 0)

    print("Filling VokaturiVoice with samples...")
    voice.fill_float64array(buffer_length, c_buffer)

    print("Extracting emotions from VokaturiVoice...")
    quality = Vokaturi.Quality()
    emotionProbabilities = Vokaturi.EmotionProbabilities()
    voice.extract(quality, emotionProbabilities)

    if quality.valid:
        print("Neutral: %.3f" % emotionProbabilities.neutrality)
        print("Happy: %.3f" % emotionProbabilities.happiness)
        print("Sad: %.3f" % emotionProbabilities.sadness)
        print("Angry: %.3f" % emotionProbabilities.anger)
        print("Fear: %.3f" % emotionProbabilities.fear)
    else:
        print ("Not enough sonorancy to determine emotions")

    neutral = emotionProbabilities.neutrality
    happy = emotionProbabilities.happiness
    sad = emotionProbabilities.sadness
    angry = emotionProbabilities.anger
    fear = emotionProbabilities.fear

    voice.destroy()

    return (neutral, happy, sad, angry, fear)


# print(emotion_analyzer("""OpenVokaturi-4-0/examples/Voice_001.wav"""))