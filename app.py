from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'cocclasher619619@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'Freetimeventures619'  # Replace with your email password

mail = Mail(app)

# Route for the homepage
@app.route('/')
def home():
    return render_template('index.html')  # Ensure 'index.html' is in the 'templates' folder

# Route for handling the contact form submission
@app.route('/submit', methods=['POST'])
def submit():
    try:
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Compose email
        msg = Message(
            subject=f"New Message from {name}",
            sender=email,
            recipients=['mdjafarrko@gmail.com']  # Replace with the owner's email
        )
        msg.body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        # Send email
        mail.send(msg)
        return "Message sent successfully!", 200
    except Exception as e:
        return f"An error occurred: {str(e)}", 500

if __name__ == '__main__':
    app.run(debug=True)
