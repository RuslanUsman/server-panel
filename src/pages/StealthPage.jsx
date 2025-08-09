
import './AdminWeapons.css';

const StealthPage = () => {
  const weapons = [
  {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Скрытность 1",
  description: "🔒 Чтобы включить или отключить режим скрытности, перейдите в раздел «Владелец сервера»."
}

,
{
  src: `${process.env.PUBLIC_URL}/images/scr.jpg`,
  alt: "скрытность 2",
  description: "После входа в раздел «Владелец сервера» перейдите в подраздел «Основные команды» и выберите режим скрытности. Чтобы отключить его, воспользуйтесь командой «Снять невидимость», расположенной прямо под основной."
}


  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! Раздел «Скрытность»</h1>
  <p>В этом разделе я покажу вам, как включать режим скрытности, чтобы ваш админ был незаметен для других игроков. Это полезно для наблюдения, тестирования и контроля без вмешательства. Также вы узнаете, как отключить скрытность, чтобы снова появиться в мире сервера. Всё просто, удобно и под вашим полным контролем. 🕶️</p>
</div>



        <h2>⚔️ вкл/выкл режим скрытности</h2>
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

export default StealthPage;