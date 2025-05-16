from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS

# Load the trained model
with open('model.pkl', 'rb') as f:
    model_data = pickle.load(f)
vectorizer = model_data['vectorizer']
tfidf_matrix = model_data['tfidf_matrix']
answers = model_data['answers']

stop_words = set(stopwords.words('english'))
def preprocess(text):
    tokens = word_tokenize(str(text).lower())
    tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
    return ' '.join(tokens)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    user_input = data.get('message', '')
    processed_input = preprocess(user_input)
    input_vector = vectorizer.transform([processed_input])
    similarities = cosine_similarity(input_vector, tfidf_matrix)
    best_match_idx = similarities.argmax()
    similarity_score = similarities[0][best_match_idx]

    if any(word in user_input.lower() for word in ['hi', 'hey', 'hello']):
        response = "I can help you with chemistry-related questions. Please ask about atomic structure, chemical equations, or other chemistry topics."
    elif 'thank' in user_input.lower():
        response = "You're welcome! How else can I assist you with chemistry?"
    elif 'bye' in user_input.lower():  # New custom response
        response = "Goodbye! Feel free to come back if you have more chemistry questions."
    elif similarity_score > 0.25:
        response = answers[best_match_idx]
    else:
        response = "I can't understand the question. I can only help with chemistry-related questions."
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True, port=5000)