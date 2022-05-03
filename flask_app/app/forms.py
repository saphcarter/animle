from flask_wtf import FlaskForm
'''The four classes that represent the field types used for this form are
 imported directly from the WTForms package, since the Flask-WTF extension does not 
 provide customized versions. For each field, an object is created as a class variable 
 in the LoginForm class. Each field is given a description or label as a first argument.
'''
from wtforms import StringField, PasswordField, BooleanField, SubmitField
# The optional validators argument attaches validation behaviors to fields. 
# The DataRequired validator checks that the field is not submitted empty.
from wtforms.validators import DataRequired

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField('Sign In')