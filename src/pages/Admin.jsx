import styles from './AdminPanel.module.css'; // Используем стиль как в Creator


import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: '👥 Управление игроками',
      items: [
        { label: 'Выдать бан', path: '/admin/ban' },
        { label: 'Выдать мут', path: '/admin/mute' },
        { label: 'Кикнуть игрока', path: '/admin/kik' },
        { label: 'Онлайн лист', path: '/admin/online' },
      ],
    },
    {
      title: '🎥 Наблюдение и модерация',
      items: [
        { label: 'Следить от 3-го лица', path: '/admin/spectate' },
        { label: 'Скрытность', path: '/admin/stealth' },
        { label: 'Неуязвимость', path: '/admin/godmode' },
      ],
    },
    {
      title: '🎁 Контент и поддержка',
      items: [
        { label: 'Добавить питомцев,монстров и мстителей', path: '/admin/add-pets' },
        { label: 'Добавить предметов', path: '/admin/add-items' },
        { label: 'Добавить припасов', path: '/admin/add-supplies' },
      ],
    },
    {
      title: '🚁 Технический вызов',
      items: [
        { label: 'Вызвать карго', path: '/admin/spawn-cargo' },
        { label: 'Вертолёт', path: '/admin/spawn-heli' },
        { label: 'Танк', path: '/admin/spawn-tank' },
        { label: 'Дроп', path: '/admin/spawn-drop' },
      ],
    },
  ];

  return (
    <>
      
      <div className={styles.wrapper}>
        <h2 className={styles.title}>👑 Панель Администратора</h2>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.sectionTitle}>{section.title}</div>
            <div className={styles.buttonGrid}>
              {section.items.map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={styles.button}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    
    </>
  );
};

export default Admin;
