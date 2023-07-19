const React = require('react');
const Layout = require('./Layout');

module.exports = function Register(props) {
  return (
    <Layout {...props}>
      <div className="d-flex container flex-column">
        <div className="align-self-center">
          <h1>Регистрация</h1>
        </div>

        <form className="align-self-center" method="post" name="regDriver">
          <div className="mb-3">
            <label className="form-label" />
            <input
              placeholder="Имя"
              name="name"
              type="name"
              className="form-control"
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
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" />
            <input
              placeholder="Номер телефона - 8(888)888-88-88"
              name="phone"
              type="phone"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" />
            <input
              placeholder="Марка, модель автомобиля"
              name="car"
              type="name"
              className="form-control"
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary ">
              Регистрация
            </button>
          </div>
        </form>
      </div>
      <script src="/js/authReg.js" />
    </Layout>
  );
};
