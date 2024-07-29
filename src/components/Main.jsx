import Card from './Card';
import Charts from './Charts';

const Main = () => (
  <main className="main-container">
    <div className="main-title">
    </div>

    <div className="main-cards">
      <Card title="Штрафы за последний месяц" count="26" icon="shopping_cart" />
      <Card title="Штрафы за последний год" count="178" icon="groups" />
      <Card title="Количество штрафов" count="?" icon="groups" />
      <Card title="Процент штрафов" count="20%" icon="groups" />
    </div>

    <Charts />
  </main>
);

export default Main;
