import { useNavigate } from 'react-router-dom';
import './Logistics.css';

export default function Logistics() {
  const navigate = useNavigate();

  const buttons = [
     { title: 'Время спавна Танка, Вертолёта, Дропа и Корабля', path: '/vehicle-drop-timer' }, // ✅ Новая кнопка
     { title: 'Время спавна Комнат Карточек', path: '/card-rooms-timer' },
    { title: 'Настройка X сервера', path: '/x-config' },
    { title: 'Стаки рюкзак', path: '/backpack-stacks' },
    { title: 'Время вайпа', path: '/wipe-time' },
    { title: 'Время медали', path: '/medal-time' },
    { title: 'Скрыть таланты мехов', path: '/mech-talents-hide' },
    { title: 'Названия и описания сервера', path: '/server-info' },
    { title: 'Запуск сервера', path: '/server-start' },
    { title: 'Демо режим', path: '/demo-mode' },
  ];

  return (
    <section className="logistics-page">
      <h2 className="logistics-title">⚙️ Логистические настройки сервера</h2>
      <div className="logistics-button-grid">
        {buttons.map(({ title, path }) => (
          <button
            key={path}
            className="logistics-button"
            onClick={() => navigate(path)}
          >
            {title}
          </button>
        ))}
      </div>
    </section>
  );
}

