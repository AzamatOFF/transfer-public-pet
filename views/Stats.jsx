const React = require('react');
const Layout = require('./Layout');

module.exports = function Stat(props) {
  const { user, passlist } = props;
  const sum = passlist.reduce((acc, el) => acc + el.cost, 0);
  return (
    <Layout {...props}>
      <div className="d-flex container flex-column">
        <section className="container" id="self">
          <div className="cont">
            <h3>
              Статистика для
              {' '}
              {user.name}
              {' '}
              - завершено заказов
              {' '}
              {passlist.length}
            </h3>
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th scope="col">№</th>
                  <th scope="col">Клиент</th>
                  <th scope="col">Пункт назначения</th>
                  <th scope="col">Дата поездки</th>
                  <th scope="col">Стоимость</th>
                </tr>
              </thead>
              {passlist.map((el, i) => (
                <tbody key={el.id} className="table-group-divider">
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{el.name}</td>
                    <td>{el.destination}</td>
                    <td>{el.arrivalDate.toString().slice(4, 16)}</td>
                    <td>
                      {el.cost}
                      {' '}
                      руб.
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <h3>
              ИТОГО
              {' '}
              {sum}
              {' '}
              руб.
            </h3>
          </div>
        </section>
      </div>
    </Layout>
  );
};
