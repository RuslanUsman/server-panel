
import { Link } from 'react-router-dom';
import './AddFormulas.css'; // подключим общий стиль

const AddFormulas = () => {
  return (
    <div className="page">
      <main className="content">
        <h2>Формулы для крафта и расчёта ресурсов</h2>
        <div className="button-group">
          <Link to="/formulas/exp" className="formula-btn">📘 Формула Экспы</Link>
          <Link to="/formulas/gunpowder" className="formula-btn">🧨 Формула Пороха</Link>
          <Link to="/formulas/x2titan" className="formula-btn">🛡️ Формула Х2 Титан</Link>
        </div>
      </main>
    </div>
  );
};

export default AddFormulas;

