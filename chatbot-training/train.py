import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import pickle

# Load dataset
df = pd.read_csv('dataset.csv')

# Preprocess text
stop_words = set(stopwords.words('english'))
def preprocess(text):
    tokens = word_tokenize(str(text).lower())
    tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
    return ' '.join(tokens)

# Apply preprocessing
questions = df['question'].apply(preprocess)
answers = df['answer'].tolist()

# Vectorize questions using TF-IDF with memory optimization
vectorizer = TfidfVectorizer(max_features=5000)  # Limit features to reduce memory usage
tfidf_matrix = vectorizer.fit_transform(questions)

# Save the model
with open('model.pkl', 'wb') as f:
    pickle.dump({
        'vectorizer': vectorizer,
        'tfidf_matrix': tfidf_matrix,
        'answers': answers,
        'questions': questions.tolist()
    }, f)

print("Model trained and saved as 'model.pkl'!")