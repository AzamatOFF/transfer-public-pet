const React = require('react');
const Layout = require('./Layout');

module.exports = function Selflist(props) {
  const { user, passlist } = props;
  return (
    <Layout {...props}>
      <div id="main" className="d-flex justify-content-around">
        <section className="container" id="self">
          {passlist.length ? (
            <div className="cont">
              {passlist.map((el) => (
                <div key={el.id} className="crd">
                  <div className="face face1">
                    <div className="content">
                      <img src="./favicon.ico" />

                      {el.completed ? (
                        <button className="btn btn-secondary mt-3 " disabled>
                          Выполнен
                        </button>
                      ) : (
                        <button
                          id={`${el.id}`}
                          className="btn btn-outline-info mt-3 "
                          name="completed"
                        >
                          Завершить
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="face face2">
                    <div className="content">
                      <h6>Поездка с{el.name} по маршруту: </h6>
                      <p> Аэропорт -{el.destination}</p>
                      <p>
                        Стоимость поездки
                        {el.cost} руб.
                      </p>
                      <p>
                        Дата:
                        {el.arrivalDate.toString().slice(4, 21)}
                      </p>
                      {el.completed ? (
                        <button
                          id={`${el.id}`}
                          name="self"
                          className="btn btn-danger"
                        >
                          Удалить
                        </button>
                      ) : (
                        <button
                          name="self"
                          className="btn btn-secondary"
                          disabled
                        >
                          Удалить
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>У Вас пока заказов нет</h1>
          )}
        </section>
      </div>
      <script src="/js/showAll.js" />
      <script src="/js/stats.js" />
    </Layout>
  );
};
