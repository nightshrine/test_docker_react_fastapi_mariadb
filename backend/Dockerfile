FROM python:3.12.0-bullseye
ENV PATH /root/.local/bin:$PATH
ENV PYTHONPATH=/app

WORKDIR /app

COPY pyproject.toml poetry.lock ./
COPY ./app ./app

RUN apt-get update
RUN curl -sSL https://install.python-poetry.org | python3 -
RUN poetry config virtualenvs.create false
RUN poetry install --no-root

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]

