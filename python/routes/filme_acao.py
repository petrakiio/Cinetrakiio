from flask import Blueprint, render_template

filme_acao = Blueprint('filme_acao', __name__)

FILMES_ACAO = {
    'alerta-vermelho': 'generosP/Ação/alertavermelho.html',
    'ate-o-ultimo-homem': 'generosP/Ação/ultimohomen.html',
    'bad-boys': 'generosP/Ação/badboys.html',
    'clube-da-luta': 'generosP/Ação/clube_luta.html',
    'duro-de-matar': 'generosP/Ação/durodematar.html',
    'exterminador': 'generosP/Ação/exterminador.html',
    'gladiador': 'generosP/Ação/gladiador.html',
    'john-wick': 'generosP/Ação/johnwick.html',
    'madmax': 'generosP/Ação/madmax.html',
    'mercenarios': 'generosP/Ação/mercenarios.html',
    'missao-impossivel': 'generosP/Ação/missaoimpossivel.html',
    'protetor': 'generosP/Ação/protetor.html',
}


@filme_acao.route('/filmes/acao/<slug>')
def filme(slug: str):
    template = FILMES_ACAO.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
