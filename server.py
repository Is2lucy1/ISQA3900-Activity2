from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def about():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/experience')
def resume():
    return render_template('experience.html')


if __name__ == '__main__':
    app.run(debug=True)
