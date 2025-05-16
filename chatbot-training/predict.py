import pickle
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.metrics.pairwise import cosine_similarity

# Load the trained model
with open('model.pkl', 'rb') as f:
    model_data = pickle.load(f)
vectorizer = model_data['vectorizer']
tfidf_matrix = model_data['tfidf_matrix']
answers = model_data['answers']

# Preprocess input
stop_words = set(stopwords.words('english'))
def preprocess(text):
    tokens = word_tokenize(str(text).lower())
    tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
    return ' '.join(tokens)

def get_response(user_input):
    # Preprocess user input
    processed_input = preprocess(user_input)
    # Vectorize input
    input_vector = vectorizer.transform([processed_input])
    # Calculate similarity
    similarities = cosine_similarity(input_vector, tfidf_matrix)
    best_match_idx = similarities.argmax()
    similarity_score = similarities[0][best_match_idx]

    # Custom greetings and thanks
    if any(word in user_input.lower() for word in ['hi', 'hey', 'hello']):
        return "I can help you with chemistry-related questions. Please ask about atomic structure, chemical equations, or other chemistry topics."
    elif 'thank' in user_input.lower():
        return "You're welcome! How else can I assist you with chemistry?"
    # Threshold for dataset match
    elif similarity_score > 0.25:  # Lowered threshold for larger dataset
        return answers[best_match_idx]
    else:
        return "I can help you with chemistry-related questions. Please ask about atomic structure, chemical equations, or other chemistry topics."

# Test the model
while True:
    user_input = input("You: ")
    if user_input.lower() == 'exit':
        break
    response = get_response(user_input)
    print("Bot:", response)