import Card from './Card';
import Charts from './Charts';

const Main = () => (
  <main className="main-container">
    <div className="main-title">
    </div>

    <div className="main-cards">
      <Card title="Штрафы за последний месяц" count="" icon="warning" />
      <Card title="Штрафы за последний год" count="" icon="calendar_today" />
      <Card title="Количество штрафов" count="  " icon="report" />
      <Card title="Процент штрафов" count="" icon="percent" />
    </div>
    

    <Charts />
  </main>
);

export default Main;
