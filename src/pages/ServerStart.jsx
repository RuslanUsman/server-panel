import './AdminWeapons.css';

const ServerStart = () => {
  const weapons = [
  {
  src: `${process.env.PUBLIC_URL}/images/save.jpg`,
  alt: "Сохранить настройки сервера",
  description: "На изображении показано, как сохранить настройки сервера после завершения конфигурации. Это ключевой шаг перед запуском: убедитесь, что все параметры — название, описание, режимы и особенности — указаны корректно. После этого нажмите кнопку сохранения, чтобы применить изменения. Только после сохранения можно безопасно запускать сервер, чтобы избежать потери данных или ошибок при старте."
}

,
{
  src: `${process.env.PUBLIC_URL}/images/startserver.jpg`,
  alt: "Старт сервера",
  description: "После успешного сохранения всех настроек вы можете запустить сервер. При старте появится окно выбора региона — это важно для оптимизации подключения игроков. После выбора сервер автоматически запустится в течение 2 минут. Всё, что остаётся — это зайти на него и начать игру!"
}


  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! Запуск сервера</h1>
  <p>
    Здесь вы узнаете, как правильно запустить ваш сервер.
    Не забывайте после всех настроек сохранить ваш сервер и только после этого запустить сервер
  </p>
</div>


        <h2>⚔️ сохранение и старт сервера</h2>
        <div className="weapon-gallery">
          {weapons.map((weapon, index) => (
            <div key={index} className="weapon-card">
              <img src={weapon.src} alt={weapon.alt} className="weapon-image" />
              <p className="weapon-description">{weapon.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServerStart;
