FROM python:3.11.5-bullseye

WORKDIR /bgsAndSnailR

ADD . /bgsAndSnailR

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

ENV PYTHONUNBUFFERED=1

CMD ["pytest", "."]