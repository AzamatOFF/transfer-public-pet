const React = require('react');

function Layout(props) {
  const { children, user } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link
          href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=22374f3c-7ab2-42ff-9f37-2234576d1cd6&lang=ru_RU"
          type="text/javascript"
        />
        <link rel="stylesheet" href="/css/mystyle.css" />
        <title>Трансферы</title>
      </head>

      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Главная
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {user ? (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/self"
                      >
                        Личный кабинет {user.name}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/logout">
                        Выйти
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/signup"
                      >
                        Регистрация
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Войти
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <body>
        {children}
        <div className="d-flex" id="mapCont">
          <div className="container align-self-center" id="map" />
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
