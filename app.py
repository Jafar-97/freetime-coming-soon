from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'your_password'        # Replace with your email password
app.config['MAIL_DEFAULT_SENDER'] = 'your_email@gmail.com'  # Replace with your email
mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    name = request.form['name']
    email = request.form['email']
    message_content = request.form['message']
    
    # Compose the email
    msg = Message(subject="New Message from Contact Form",
                  sender=email,
                  recipients=['owner_email@gmail.com'])  # Replace with owner's email
    msg.body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message_content}"
    
    try:
        mail.send(msg)
        flash("Message sent successfully!", "success")
    except Exception as e:
        flash(f"Failed to send message: {e}", "danger")
    
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.secret_key = 'your_secret_key'  # Replace with a secure key
    app.run(debug=True)
