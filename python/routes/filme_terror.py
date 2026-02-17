from flask import Blueprint, render_template

filme_terror = Blueprint('filme_terror', __name__)

FILMES_TERROR = {
    'abruxa': 'generosP/terror/abruxa.html',
    'entidade': 'generosP/terror/entidade.html',
    'paranormal': 'generosP/terror/paranormal.html',
    'corra': 'generosP/terror/corra.html',
    'hereditario': 'generosP/terror/hereditario.html',
    'invocacao': 'generosP/terror/invocaçaõ.html',
    'it': 'generosP/terror/it.html',
    'mama': 'generosP/terror/mama.html',
    'massacre': 'generosP/terror/massacre.html',
    'chuck': 'generosP/terror/chuck.html',
    'exorcita': 'generosP/terror/exorcita.html',
    'iluminado': 'generosP/terror/iluminado.html',
}


@filme_terror.route('/filmes/terror/<slug>')
def filme(slug: str):
    template = FILMES_TERROR.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
