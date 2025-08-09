import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';

const items = [
  { path: '/', label: '🏠 Главная' },
  { path: '/creator', label: '🛠️ Создатель' },
  { path: '/admin', label: '👑 Админка' },
  { path: '/creator/modes', label: '🎮 Режимы' },
  { path: '/creator/logistics', label: '📦 Логистика' },
  { path: '/creator/admin-items', label: '🧰 Предметы' },
  { path: '/creator/add-formulas', label: '➕ Формулы' },
  { path: '/creator/add-store', label: '🛒 Магазин' },
  { path: '/creator/add-safe', label: '🔐 Сейф' },
  { path: '/creator/add-botka', label: '🥤 Ботка' },
  { path: '/creator/give-admin', label: '👑 Назначение админа' },
  { path: '/creator/save-settings', label: '💾 Сохранение' },
  { path: '/creator/calculator', label: '🧮 Калькулятор' },
  { path: '/admin/ban', label: '🚫 Бан' },
  { path: '/admin/mute', label: '🔇 Мут' },
  { path: '/admin/online', label: '📶 Онлайн' },
  { path: '/admin/spectate', label: '🎥 Наблюдение' },
  { path: '/admin/stealth', label: '🕵️ Скрытность' },
  { path: '/admin/godmode', label: '🛡️ Неуязвимость' },
  { path: '/admin/add-pets', label: '🐾 Питомцы' },
  { path: '/admin/add-items', label: '📦 Добавить предметы' },
  { path: '/admin/add-supplies', label: '🧃 Припасы' },
  { path: '/admin/spawn-cargo', label: '🚢 Вызов карго' },
  { path: '/admin/spawn-heli', label: '🚁 Вертолёт' },
  { path: '/admin/spawn-tank', label: '🛞 Танк' },
  { path: '/admin/spawn-drop', label: '📦 Дроп' },
  { path: '/x-config', label: '⚙️ XConfig' },
  { path: '/card-rooms-timer', label: '🃏 Таймер комнат' },
  { path: '/medal-time', label: '🏅 Время медалей' },
  { path: '/mech-talents-hide', label: '🤖 Скрытие талантов' },
  { path: '/server-info', label: 'ℹ️ Инфо сервера' },
  { path: '/server-start', label: '🚀 Старт сервера' },
  { path: '/demo-mode', label: '🎬 Демо режим' },
  { path: '/backpack-stacks', label: '🎒 Стэки рюкзака' },
  { path: '/wipe-time', label: '🧹 Время вайпа' },
  { path: '/formulas/exp', label: '📈 Формула опыта' },
  { path: '/formulas/gunpowder', label: '💥 Формула пороха' },
  { path: '/formulas/x2titan', label: '🧪 Формула X2 Титан' },
  { path: '/creator/admin-weapons', label: '🔫 Админ оружие' },
  { path: '/creator/admin-armor', label: '🛡️ Админ броня' },
  { path: '/creator/pvp-bandit', label: '⚔️ PvP Бандит' },
  { path: '/vehicle-drop-timer', label: '🚗 Таймер транспорта' }
];


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredItems = items.filter(({ label }) =>
    label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className={styles.header}>
      <h1>🚀 TheHanTos</h1>
      <nav className={styles.nav}>
        <Link to="/creator/calculator" className={styles.link}>🧮 Калькулятор</Link>
        <Link to="/creator" className={styles.link}>Создатель</Link>
        <Link to="/admin" className={styles.link}>Админка</Link>
      </nav>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.input}
        />
      </div>

      {searchQuery && (
        <ul className={styles.searchResults}>
          {filteredItems.map(({ path, label }) => (
            <li
              key={path}
              className={styles.resultItem}
              onClick={() => {
                setSearchQuery('');
                navigate(path);
              }}
            >
              {label}
            </li>
          ))}
          {filteredItems.length === 0 && (
            <li className={styles.resultItem}>Ничего не найдено</li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Header;


