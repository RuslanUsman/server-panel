import styles from './Creator.module.css';
import { useNavigate } from 'react-router-dom';


const Creator = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: '📦 Управление и режимы',
      items: [
        { path: '/creator/modes', label: '🎮 Режимы' },
        { path: '/creator/logistics', label: '📦 Логистика' },
        { path: '/creator/admin-items', label: '🧰 Предметы' },
      ],
    },
    {
      title: '➕ Добавление и настройка',
      items: [
        { path: '/creator/add-formulas', label: '➕ Формулы' },
        { path: '/creator/add-store', label: '🛒 Магазин' },
        { path: '/creator/add-safe', label: '🔐 Сейф' },
        { path: '/creator/add-botka', label: '🥤 Ботка' },
      ],
    },
    {
      title: '👑 Админ-права',
      items: [
        { path: '/creator/give-admin', label: '👑 Назначение админа' },
        { path: '/creator/save-settings', label: '💾 Сохранение' },
      ],
    },
  ];

  return (
    <>
      
      <div className={styles.wrapper}>
        <h2 className={styles.title}>🛠️ Меню Создателя</h2>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <div className={styles.sectionTitle}>{section.title}</div>
            <div className={styles.buttonGrid}>
              {section.items.map(({ path, label }) => (
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

export default Creator;
