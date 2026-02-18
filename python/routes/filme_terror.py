from flask import Blueprint, render_template

filme_terror = Blueprint('filme_terror', __name__)

FILMES_TERROR = {
    'abruxa': 'generos_filmes/terror/abruxa.html',
    'entidade': 'generos_filmes/terror/entidade.html',
    'paranormal': 'generos_filmes/terror/paranormal.html',
    'corra': 'generos_filmes/terror/corra.html',
    'hereditario': 'generos_filmes/terror/hereditario.html',
    'invocacao': 'generos_filmes/terror/invocaçaõ.html',
    'it': 'generos_filmes/terror/it.html',
    'mama': 'generos_filmes/terror/mama.html',
    'massacre': 'generos_filmes/terror/massacre.html',
    'chuck': 'generos_filmes/terror/chuck.html',
    'exorcita': 'generos_filmes/terror/exorcita.html',
    'iluminado': 'generos_filmes/terror/iluminado.html',
}


@filme_terror.route('/filmes/terror/<slug>')
def filme(slug: str):
    template = FILMES_TERROR.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
