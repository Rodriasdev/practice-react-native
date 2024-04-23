import MySQLdb
import sys
from decouple import config

def connectdb():
    try:
        db = MySQLdb.connect(config('DB_HOST'),config('DB_USER'),config('DB_PASSWORD'),config('DB_NAME'))
        cursor = db.cursor()
        print("Conexión correcta.")
        return cursor,db
    except MySQLdb.Error as e:
        print("No se pudo conectar a la base de datos:",e)
        sys.exit(1)

connectdb()