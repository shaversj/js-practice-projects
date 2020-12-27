from flask import Flask, render_template, request
from lib import email

app = Flask(__name__)


@app.route('/contact')
def home():
    return render_template('contact.html')


@app.route('/api/sendEmail', methods=['POST'])
def send_email():
    return email.send_message(email.build_message(request.json)), 200


if __name__ == '__main__':
    app.run(debug=True)
