from python.routes.cadastro_routes import cadastro
from python.routes.filme_acao import filme_acao
from python.routes.filme_animacao import filme_animacao
from python.routes.filme_brasileiro import filme_brasileiro
from python.routes.filme_comedia import filme_comedia
from python.routes.filme_ficcao import filme_ficcao
from python.routes.filme_romance import filme_romance
from python.routes.filme_terror import filme_terror
from python.routes.generos_routes import generos
from python.routes.home_routes import home
from python.routes.legacy_routes import legacy
from python.routes.login_routes import login

ALL_BLUEPRINTS = [
    home,
    login,
    cadastro,
    generos,
    legacy,
    filme_acao,
    filme_comedia,
    filme_animacao,
    filme_brasileiro,
    filme_ficcao,
    filme_romance,
    filme_terror,
]
