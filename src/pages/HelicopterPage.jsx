
import './AdminWeapons.css';

const HelicopterPage = () => {
  const weapons = [
 {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Вызвать танк",
  description: " Чтобы добавить Боевой Вертолет, перейдите в раздел «Владелец сервера» ."
}


,
{
  src: `${process.env.PUBLIC_URL}/images/copter1.jpg`,
  alt: "Вызвать Танк1",
  description: "Чтобы добавить Боевой Вертолет, сначала перейдите в раздел «Владелец сервера», затем выберите подраздел «Основные команды» и нажмите «Добавить боевой вертолет». 🛠️ Важно: после активации этой команды время спавна боевого вертолета будет изменено. Учитывайте это заранее, чтобы избежать неожиданных задержек в игровом процессе."
}



  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! как добавить Боевой вертолет</h1>
  <p>
    Здесь вы узнаете, как правильно добавить боевой Вертолет в ваш сервер.
    И важно знать, если вы добавите Боевой Вертолет через админ панель то у вас измениться вре спавна Вертолета на сервере.
   
  </p>
</div>


        <h2>⚔️ Добавить боевой Вертолет</h2>
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

export default HelicopterPage;