from flask import Blueprint, render_template

filme_romance = Blueprint('filme_romance', __name__)

FILMES_ROMANCE = {
    'antesdeamanhecer': 'generos_filmes/Romance/antesdeamanhecer.html',
    'azul': 'generos_filmes/Romance/Azuleacormaisquente.html',
    'comoperderumhomem': 'generos_filmes/Romance/comoperderumhomem.html',
    'diariopaixao': 'generos_filmes/Romance/diariopaixão.html',
    'docenovembro': 'generos_filmes/Romance/docenovembro.html',
    'iloveyou': 'generos_filmes/Romance/iloveyou.html',
    'lembrancas': 'generos_filmes/Romance/lembranças.html',
    'naturezaselvagem': 'generos_filmes/Romance/naturezaselvagem.html',
    'orgulhopreconceito': 'generos_filmes/Romance/orgulho&preconceito.html',
    'pacienteingles': 'generos_filmes/Romance/pacienteingles.html',
    'retrato': 'generos_filmes/Romance/retrato.html',
}


@filme_romance.route('/filmes/romance/<slug>')
def filme(slug: str):
    template = FILMES_ROMANCE.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
