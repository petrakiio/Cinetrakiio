from flask import Blueprint, render_template

filme_acao = Blueprint('filme_acao', __name__)

FILMES_ACAO = {
    'alerta-vermelho': 'generos_filmes/Ação/alertavermelho.html',
    'ate-o-ultimo-homem': 'generos_filmes/Ação/ultimohomen.html',
    'bad-boys': 'generos_filmes/Ação/badboys.html',
    'clube-da-luta': 'generos_filmes/Ação/clube_luta.html',
    'duro-de-matar': 'generos_filmes/Ação/durodematar.html',
    'exterminador': 'generos_filmes/Ação/exterminador.html',
    'gladiador': 'generos_filmes/Ação/gladiador.html',
    'john-wick': 'generos_filmes/Ação/johnwick.html',
    'madmax': 'generos_filmes/Ação/madmax.html',
    'mercenarios': 'generos_filmes/Ação/mercenarios.html',
    'missao-impossivel': 'generos_filmes/Ação/missaoimpossivel.html',
    'protetor': 'generos_filmes/Ação/protetor.html',
}


@filme_acao.route('/filmes/acao/<slug>')
def filme(slug: str):
    template = FILMES_ACAO.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
