# Uses the DistilBERT model to analyze the sentiment of a sentence

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


# returns:
#   {'example original text': {'neg': 0.0, 'neu': 0.843, 'pos': 0.157, 'compound': 0.0772}}
def word_sentiment_analyzer(text):
    analyzer = SentimentIntensityAnalyzer()
    vs = analyzer.polarity_scores(TRANSCRIPTION)
    return vs

# run to see an example:

TRANSCRIPTION = """Hello I am writing a test sentence HEHEHEHA"""

print(word_sentiment_analyzer(TRANSCRIPTION))