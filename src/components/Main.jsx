import Card from './Card';
import Charts from './Charts';

const Main = () => (
  <main className="main-container">
    <div className="main-title">
    </div>

    <div className="main-cards">
      <Card title="Штрафы за последний месяц" count="26" icon="warning" />
      <Card title="Штрафы за последний год" count="178" icon="calendar_today" />
      <Card title="Количество штрафов" count=" ? " icon="report" />
      <Card title="Процент штрафов" count="20%" icon="percent" />
    </div>

    <Charts />
  </main>
);

export default Main;
