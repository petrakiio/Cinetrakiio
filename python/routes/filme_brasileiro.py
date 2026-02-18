from flask import Blueprint, render_template

filme_brasileiro = Blueprint('filme_brasileiro', __name__)

FILMES_BRASILEIROS = {
    'bacurau': 'generos_filmes/Braseleiro/bacurau.html',
    'areia': 'generos_filmes/Braseleiro/areia.html',
    'carandiru': 'generos_filmes/Braseleiro/carandiru.html',
    'central': 'generos_filmes/Braseleiro/central.html',
    'cidade-de-deus': 'generos_filmes/Braseleiro/cidadeDeus.html',
    'estomago': 'generos_filmes/Braseleiro/estomago.html',
    'maniaco': 'generos_filmes/Braseleiro/maniacoP.html',
    'mae-peca': 'generos_filmes/Braseleiro/maepeça.html',
    'palhaco': 'generos_filmes/Braseleiro/palhaço.html',
    'reflexoes': 'generos_filmes/Braseleiro/reflexoesL.html',
    'se-fosse-voce': 'generos_filmes/Braseleiro/sefossevc.html',
    'sonhos-roubados': 'generos_filmes/Braseleiro/sonhoroubados.html',
}


@filme_brasileiro.route('/filmes/brasileiro/<slug>')
def filme(slug: str):
    template = FILMES_BRASILEIROS.get(slug)
    if not template:
        return render_template('home/aviso.html'), 404
    return render_template(template)
