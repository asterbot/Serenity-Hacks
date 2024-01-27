# Uses the DistilBERT model to analyze the sentiment of a sentence

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


TRANSCRIPTION = """Hello I am writing a test sentence HEHEHEHA"""

analyzer = SentimentIntensityAnalyzer()
vs = analyzer.polarity_scores(TRANSCRIPTION)
print("{:-<65} {}".format(TRANSCRIPTION, str(vs)))
