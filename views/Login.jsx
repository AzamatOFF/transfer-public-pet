const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className="d-flex container flex-column">
        <div className="align-self-center">
          <h1>Авторизация</h1>
        </div>

        <form className="align-self-center" method="post" name="logDriver">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" />
            <input
              placeholder="Имя"
              name="name"
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" />
            <input
              placeholder="Пароль"
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary ">
              Войти
            </button>
          </div>
        </form>
      </div>

      <script src="/js/authLog.js" />
    </Layout>
  );
};
