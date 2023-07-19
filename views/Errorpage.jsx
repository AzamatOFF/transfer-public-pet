const React = require('react');
const Layout = require('./Layout');

module.exports = function Selflist(props) {
  const { user, passlist } = props;
  return (
    <Layout {...props}>
      <div id="main" className="d-flex justify-content-around">
        <section className="container" id="self">
          <h2>В базе данных клиентов пока нет</h2>
        </section>
      </div>
    </Layout>
  );
};
