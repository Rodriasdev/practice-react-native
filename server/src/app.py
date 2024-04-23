from flask import Flask
from db import connectdb
import MySQLdb

app = Flask(__name__)
app.debug = True

cursor,db = connectdb()


@app.route('/user-create')
def index():
    return 'a'

if __name__ == '__main__':
    app.run()