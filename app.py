from flask import Flask

from python.routes import ALL_BLUEPRINTS


def create_app() -> Flask:
    app = Flask(__name__)

    for blueprint in ALL_BLUEPRINTS:
        app.register_blueprint(blueprint)

    return app


app = create_app()

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
