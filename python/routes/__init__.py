from python.routes.cadastro_routes import urlpatterns as cadastro_urlpatterns
from python.routes.filme_acao import urlpatterns as filme_acao_urlpatterns
from python.routes.filme_animacao import urlpatterns as filme_animacao_urlpatterns
from python.routes.filme_brasileiro import urlpatterns as filme_brasileiro_urlpatterns
from python.routes.filme_comedia import urlpatterns as filme_comedia_urlpatterns
from python.routes.filme_ficcao import urlpatterns as filme_ficcao_urlpatterns
from python.routes.filme_romance import urlpatterns as filme_romance_urlpatterns
from python.routes.filme_terror import urlpatterns as filme_terror_urlpatterns
from python.routes.generos_routes import urlpatterns as generos_urlpatterns
from python.routes.home_routes import urlpatterns as home_urlpatterns
from python.routes.legacy_routes import urlpatterns as legacy_urlpatterns
from python.routes.login_routes import urlpatterns as login_urlpatterns

urlpatterns = [
    *home_urlpatterns,
    *login_urlpatterns,
    *cadastro_urlpatterns,
    *generos_urlpatterns,
    *legacy_urlpatterns,
    *filme_acao_urlpatterns,
    *filme_comedia_urlpatterns,
    *filme_animacao_urlpatterns,
    *filme_brasileiro_urlpatterns,
    *filme_ficcao_urlpatterns,
    *filme_romance_urlpatterns,
    *filme_terror_urlpatterns,
]
