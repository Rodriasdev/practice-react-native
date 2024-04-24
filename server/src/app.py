from flask import Flask, request, jsonify
from db import connectdb
import MySQLdb
import sys

app = Flask(__name__)
app.debug = True

cursor,db = connectdb()

@app.route('/user-create', methods=['POST'])
def insert_user():
    if request.method == 'POST':
        try:
            data = request.get_json()

            cursor.execute('INSERT INTO users (username,email,password) VALUES (%s,%s,%s)', (data["username"], data["email"], data["password"]))

            db.commit()

            return data

        except MySQLdb.error as e:
            print(e)
            db.rollback()
            return jsonify({'error: error a process the request'}), 500

    else:
        return jsonify({'error: method not permitted'}), 405


@app.route('/auth-user', methods=['PUT'])
def auth_user():
    if request.method == 'PUT':
        try:
            data = request.get_json()

            cursor.execute('SELECT id, username, email, password FROM users WHERE username=(%s)', (data["username"],))

            user = cursor.fetchone()

            if user:
                return jsonify({
                    'id': user[0],
                    'username': user[1],
                    'email': user[2],
                    'password': user[3]
                }), 200
            else:
                return jsonify({'error: user not found'}), 404

        except MySQLdb.Error as e:
            print(e)
            return jsonify({'error: error a process the request'}), 500

    else:
        return jsonify({'error: method not permitted'}), 405


if __name__ == '__main__':
    app.run()