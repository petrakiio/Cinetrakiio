from flask import Blueprint, render_template

filme_comedia = Blueprint('filme_comedia', __name__)

FILMES_COMEDIA = {
    'as-branquelas': 'generos_filmes/Comedia/branquelas.html',
    'click': 'generos_filmes/Comedia/click.html',
    'deadpool': 'generos_filmes/Comedia/deadpool.html',
    'esposa-de-mentirinha': 'generos_filmes/Comedia/esposa.html',
    'ferias-frustradas': 'generos_filmes/Comedia/feriasfrustadas.html',
    'superbad': 'generos_filmes/Comedia/superbad.html',
    'gente-grande-2': 'generos_filmes/Comedia/gentegrande2.html',
    'debiloide': 'generos_filmes/Comedia/debiloide.html',
    'jojorabbit': 'generos_filmes/Comedia/jojorabbit.html',
    'virgem-aos-40': 'generos_filmes/Comedia/virgem40.html',
    '6-ridiculos': 'generos_filmes/Comedia/6ridiculos.html',
    'seguranca': 'generos_filmes/Comedia/segurança.html',
}


@filme_comedia.route('/filmes/comedia/<slug>')
def filme(slug: str):
    template = FILMES_COMEDIA.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
