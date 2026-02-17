from flask import Blueprint, render_template

filme_comedia = Blueprint('filme_comedia', __name__)

FILMES_COMEDIA = {
    'as-branquelas': 'generosP/Comedia/branquelas.html',
    'click': 'generosP/Comedia/click.html',
    'deadpool': 'generosP/Comedia/deadpool.html',
    'esposa-de-mentirinha': 'generosP/Comedia/esposa.html',
    'ferias-frustradas': 'generosP/Comedia/feriasfrustadas.html',
    'superbad': 'generosP/Comedia/superbad.html',
    'gente-grande-2': 'generosP/Comedia/gentegrande2.html',
    'debiloide': 'generosP/Comedia/debiloide.html',
    'jojorabbit': 'generosP/Comedia/jojorabbit.html',
    'virgem-aos-40': 'generosP/Comedia/virgem40.html',
    '6-ridiculos': 'generosP/Comedia/6ridiculos.html',
    'seguranca': 'generosP/Comedia/segurança.html',
}


@filme_comedia.route('/filmes/comedia/<slug>')
def filme(slug: str):
    template = FILMES_COMEDIA.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
