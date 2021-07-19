FROM python:3
ADD requirements.txt requirements.txt
RUN pip install -r requirements.txt
ADD . .
EXPOSE 8000
RUN python3 manage.py migrate
CMD ["python3","manage.py","runserver","0.0.0.0:8000"]