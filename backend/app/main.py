# main.py

import pymysql.cursors
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/test-word")
async def root():

    connect = pymysql.connect(
        host="mariadb",
        user="docker_test_user",
        password="kimidori1231!",
        db="docker_test_db",
        charset="utf8mb4",
        cursorclass=pymysql.cursors.DictCursor,
    )

    return_word = ""

    with connect.cursor() as cursor:
        cursor.execute("SELECT * FROM docker_test_table")
        result = cursor.fetchall()
        for row in result:
            return_word = row["test_word"]

    return {"status": 200, "errorMsg": [], "data": return_word}
