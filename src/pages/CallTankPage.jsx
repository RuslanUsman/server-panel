
import './AdminWeapons.css';

const CallCargoPage = () => {
  const weapons = [
 {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Вызвать танк",
  description: " Чтобы вызвать танк, перейдите в раздел «Владелец сервера» ."
}


,
{
  src: `${process.env.PUBLIC_URL}/images/tank1.jpg`,
  alt: "Вызвать Танк1",
  description: "Чтобы добавить Танк, сначала перейдите в раздел «Владелец сервера», затем выберите подраздел «Основные команды» и нажмите «Добавить Танк». 🛠️ Важно: после активации этой команды время спавна Танка будет изменено. Учитывайте это заранее, чтобы избежать неожиданных задержек в игровом процессе."
}



  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! как добавить Танк</h1>
  <p>
    Здесь вы узнаете, как правильно добавить Танк в ваш сервер.
    И важно знать, если вы добавите Танк через админ панель то у вас измениться вре спавна танка на сервере.
   
  </p>
</div>


        <h2>⚔️ Добавить Танк</h2>
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