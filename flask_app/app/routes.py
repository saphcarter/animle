from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import LoginForm

@app.route('/')
@app.route('/gamepage')
def gamepage(): 
    return render_template('gamepage.html', title='Home')

@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('login requested for user {}, remember_me ={}'.format(
            form.username.data, form.remember_me.data))
        return redirect(url_for('gamepage'))
    return render_template('login.html', title='Sign In', form=form)

@app.route('/stats')
def stats(): 
    return render_template('stats.html', title='stats')