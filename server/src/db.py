import MySQLdb
import sys
import os

def connectdb():
    try:
        db = MySQLdb.connect(os.environ.get("DB_HOST"),os.environ.get("DB_USER"),os.environ.get("DB_PASSWORD"),os.environ.get("DB_NAME"))
        cursor = db.cursor()
        print("Conexión correcta.")
        return cursor,db
    except MySQLdb.Error as e:
        print("No se pudo conectar a la base de datos:",e)
        sys.exit(1)