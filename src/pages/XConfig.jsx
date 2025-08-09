import './AdminWeapons.css';

const XConfig = () => {
  const weapons = [
   {
  src: `${process.env.PUBLIC_URL}/images/xxxx.jpg`,
  alt: "Параметры X-фронта",
  description: "На панели настройки сервера переходим в раздел «Параметры фронта» — здесь ты сам решаешь, какой X выставлять для сервера. X — это коэффициент получаемых ресурсов: хочешь сделать выживание жёстче или, наоборот, прокачать фарм — всё в твоих руках. Увеличение значения X позволяет ускорить добычу, уменьшение — добавляет вызов и стратегию. Грамотно подобранный X создаёт баланс и делает игру интересной для всех участников сервера."
}




  ];

  return (
    <div className="page">
      <main className="content">
        <div className="header-banner">
  <h1>🌌 Добро пожаловать!</h1>
  <p>Здесь я вам покажу, как изменить X на сервере — от этого зависит получаемые ресурсы на вайпе .</p>
</div>

        <h2>⚔️ Настройка Х на сервере</h2>
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



export default XConfig;
