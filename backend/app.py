from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

#from your_code import really_complex_function

app = Flask(__name__)
CORS(app)

YELP_AUTH_TOKEN = 'eVl4dFAcOhGq8OHpLvCxaICuK_ZwY4ghRCNx7TpGRD4yfRczNZqrRoYAAlK3E5cFQvYALEvFMPF4hqjgT3j5QBCtxGNIHUe6z0DQK71k58W8_gfc2Ni0T1Av-LveY3Yx'
WEATHER_AUTH_TOKEN = 'f91b5392c208420096332540242801'


@app.route('/')
def index():
    return jsonify({'message': 'Hey, everything works!!'})

@app.route('/yelp-test')
def yelp_default_test():
    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location": "Irvine, CA", "categories": "bubbletea"}

    headers = {"Authorization": "Bearer " + YELP_AUTH_TOKEN}

    response = requests.request("GET", url, headers=headers, params=querystring)

    return jsonify(response.json())

@app.route('/weather-test')
def weather_test():


    url = f"http://api.weatherapi.com/v1/forecast.json?key={WEATHER_AUTH_TOKEN}&q=London"
    
    response =  requests.request("GET", url)

    return jsonify(response.json())

