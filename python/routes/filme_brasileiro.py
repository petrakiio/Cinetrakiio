from flask import Blueprint, render_template

filme_brasileiro = Blueprint('filme_brasileiro', __name__)

FILMES_BRASILEIROS = {
    'bacurau': 'generosP/Braseleiro/bacurau.html',
    'areia': 'generosP/Braseleiro/areia.html',
    'carandiru': 'generosP/Braseleiro/carandiru.html',
    'central': 'generosP/Braseleiro/central.html',
    'cidade-de-deus': 'generosP/Braseleiro/cidadeDeus.html',
    'estomago': 'generosP/Braseleiro/estomago.html',
    'maniaco': 'generosP/Braseleiro/maniacoP.html',
    'mae-peca': 'generosP/Braseleiro/maepeça.html',
    'palhaco': 'generosP/Braseleiro/palhaço.html',
    'reflexoes': 'generosP/Braseleiro/reflexoesL.html',
    'se-fosse-voce': 'generosP/Braseleiro/sefossevc.html',
    'sonhos-roubados': 'generosP/Braseleiro/sonhoroubados.html',
}


@filme_brasileiro.route('/filmes/brasileiro/<slug>')
def filme(slug: str):
    template = FILMES_BRASILEIROS.get(slug)
    if not template:
        return render_template('aviso.html'), 404
    return render_template(template)
