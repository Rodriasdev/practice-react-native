from flask import Flask
from config import config

app = Flask(__name__)

class DevelopmentConfig:
    DEBUG = True

app.config.from_object(config['development'])

@app.route('/')
def index():
    return 'a'

if __name__ == '__main__':
    app.run()