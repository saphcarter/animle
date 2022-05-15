from app import app, db
from app.models import Animals #,Player

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'Animal': Animals, 'Animals': Animals}