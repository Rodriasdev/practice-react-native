from flask import Flask, request
from db import connectdb
import MySQLdb
import sys

app = Flask(__name__)
app.debug = True

cursor,db = connectdb()

try:
    cursor.execute("DROP TABLE IF EXISTS USERS")
    cursor.execute("CREATE TABLE USERS (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255))")
except MySQLdb.error as e:
    print(e)
    sys.exit(1)

@app.route('/user-create', methods=['POST'])
def insert_user():
    try:
        data = request.get_json()

        print(data)
        cursor.execute('INSERT INTO users (username,email,password) VALUES (%s,%s,%s)', (data["username"], data["email"], data["password"]))


        db.commit()

        return data

    except MySQLdb.error as e:
        print(e)
        db.rollback()
        sys.exit(1)


if __name__ == '__main__':
    app.run()