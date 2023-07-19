const React = require('react');
const Layout = require('./Layout');

function Home(props) {
  const { user, passlist } = props;
  return (
    <Layout {...props}>
      <div id="main" className="d-flex justify-content-around">
        <div className="row flex-wrap container ">
          {passlist.map((el) => (
            <div key={el.id} className="col-md-6 col-lg-4 text-center mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Пассажир {el.name}</h5>
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                      Номер рейса
                      <span className="badge bg-dark rounded-pill">
                        {el.flightNumber}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Время прибытия
                      <span className="badge bg-primary rounded-pill">
                        {el.arrivalDate.toString().slice(0, 21)}
                      </span>
                    </li>
                    <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                      Пункт назначения
                      <span className="badge bg-success rounded-pill">
                        {el.destination}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Номер телефона
                      <span className="badge bg-danger rounded-pill">
                        {el.phone}
                      </span>
                    </li>
                  </ul>
                  {el.driverId || !user ? (
                    <button
                      type="button"
                      className="btn btn-secondary mt-3"
                      disabled
                    >
                      Недоступен
                    </button>
                  ) : (
                    <>
                      <button
                        id={`${el.id}`}
                        className="btn btn-outline-primary mt-3"
                        name="submit"
                      >
                        Забрать заказ
                      </button>
                      <button
                        className="btn btn-outline-success mt-3 "
                        name="show"
                        data-adress={`${el.address}`}
                      >
                        Смотреть на карте
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script src="/js/showAll.js" />
    </Layout>
  );
}

module.exports = Home;
