
import { Link } from 'react-router-dom';
import './AdminItems.css'; // Подключаем стили

const AdminItems = () => {
  return (
    <div className="page">
      <main className="content">
        <h2>Настройка и выдача админ предметов</h2>
        <div className="admin-buttons">
          <Link to="/creator/admin-weapons" className="admin-btn">⚔️ Админ Оружие</Link>
          <Link to="/creator/admin-armor" className="admin-btn">🛡️ Админ Броня</Link>
        </div>
      </main>
    </div>
  );
};

export default AdminItems;

