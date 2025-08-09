import { Link } from 'react-router-dom';
import './Modes.css'; // Подключаем стили

const Modes = () => {
  return (
    <div className="page">
      <main className="content">
        <h2>Настройка режимов сервера</h2>
        <div className="modes-buttons">
          <Link to="/creator/pvp-bandit" className="mode-btn">🔫 PVP Бандитка</Link>
        </div>
      </main>
    </div>
  );
};

export default Modes;

