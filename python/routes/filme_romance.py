from flask import Blueprint, render_template

filme_romance = Blueprint('filme_romance', __name__)

FILMES_ROMANCE = {
    'antesdeamanhecer': 'generosP/Romance/antesdeamanhecer.html',
    'azul': 'generosP/Romance/Azuleacormaisquente.html',
    'comoperderumhomem': 'generosP/Romance/comoperderumhomem.html',
    'diariopaixao': 'generosP/Romance/diariopaixão.html',
    'docenovembro': 'generosP/Romance/docenovembro.html',
    'iloveyou': 'generosP/Romance/iloveyou.html',
    'lembrancas': 'generosP/Romance/lembranças.html',
    'naturezaselvagem': 'generosP/Romance/naturezaselvagem.html',
    'orgulhopreconceito': 'generosP/Romance/orgulho&preconceito.html',
    'pacienteingles': 'generosP/Romance/pacienteingles.html',
    'retrato': 'generosP/Romance/retrato.html',
}


@filme_romance.route('/filmes/romance/<slug>')
def filme(slug: str):
    template = FILMES_ROMANCE.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
