from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Replace with your mail server
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'  # Your email
app.config['MAIL_PASSWORD'] = 'your-email-password'  # Your email password

mail = Mail(app)

@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # Create email content
    msg = Message(
        subject="New Contact Form Submission",
        sender=email,
        recipients=["owner@example.com"],  # Replace with the owner's email
        body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
    )

    # Send email
    try:
        mail.send(msg)
        return "Message sent successfully!"
    except Exception as e:
        return f"Failed to send message. Error: {str(e)}"

if __name__ == "__main__":
    app.run(debug=True)
