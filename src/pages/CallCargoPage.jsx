
import './AdminWeapons.css';

const CallCargoPage = () => {
  const weapons = [
 {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Вызов корабля",
  description: "🛳️ Чтобы добавить грузовое судно (карго), перейдите в раздел «Владелец сервера» ."
}


,
{
  src: `${process.env.PUBLIC_URL}/images/ship.jpg`,
  alt: "Вызвать Корабль",
  description: "⚓ Чтобы добавить грузовое судно (карго), сначала перейдите в раздел «Владелец сервера», затем выберите подраздел «Основные команды» и нажмите «добавить грузовое судно». 🛠️ Важно: после активации этой команды время спавна карго будет изменено. Учитывайте это заранее, чтобы избежать неожиданных задержек в игровом процессе."
}



  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! как добавить грузовое судно(Карго)</h1>
  <p>
    Здесь вы узнаете, как правильно добавить грузовое судно(Карго) в ваш сервер.
    Запомните одно если вы добавите через админ панель грузовое судно то у вас измениться время спавна грузового сдно
  </p>
</div>


        <h2>⚔️ Вызвать каргоа</h2>
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

export default CallCargoPage;