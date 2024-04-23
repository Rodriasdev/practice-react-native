from flask import Flask, request, jsonify
from db import connectdb
import MySQLdb
import sys

app = Flask(__name__)
app.debug = True

cursor,db = connectdb()

# try:
#     cursor.execute("DROP TABLE IF EXISTS USERS")
#     cursor.execute("CREATE TABLE USERS (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255))")
# except MySQLdb.error as e:
#     print(e)
#     sys.exit(1)

@app.route('/user-create', methods=['POST'])
def insert_user():
    if request.method == 'POST':
        try:
            data = request.get_json()
            print(data)
            cursor.execute('INSERT INTO users (username,email,password) VALUES (%s,%s,%s)', (data["username"], data["email"], data["password"]))

            db.commit()

            return data

        except MySQLdb.error as e:
            print(e)
            db.rollback()
            return jsonify({'error':'error al procesar la solicitud'}), 500

    else:
        return jsonify({'error': 'Método no permitido'}), 405


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
                return jsonify({'error': 'Usuario no encontrado'}), 404

        except MySQLdb.Error as e:
            print(e)
            return jsonify({'error': 'Error al procesar la solicitud'}), 500

    else:
        return jsonify({'error': 'Método no permitido'}), 405


if __name__ == '__main__':
    app.run()