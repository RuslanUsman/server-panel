import './AdminWeapons.css';

const WipeTime = () => {
  const weapons = [
   {
  src: `${process.env.PUBLIC_URL}/images/vaip.jpg`,
  alt: "Время вайпа",
  description: "Это изображение показывает, где и как установить время вайпа на сервере. Важно: время указывается в секундах. Это позволяет точно задать момент сброса прогресса, что критично для планирования игровых событий и обновлений. Используйте встроенный калькулятор, чтобы быстро перевести дату и время в нужный формат."
}





  ];

  return (
    <div className="page">
      <main className="content">
        
 <div className="header-banner">
  <h1>🌌 Добро пожаловать! Время вайпа</h1>
  <p>
    В этом разделе вы узнаете, как установить точное время вайпа на вашем сервере. 
    Важно помнить, что время указывается в <strong>секундах</strong>. 
    Чтобы сэкономить ваше время и избежать ошибок, мы создали специальный калькулятор, 
    который автоматически преобразует дату и время в нужный формат.
  </p>
</div>




        <h2>⚔️ Время указывается в секундах</h2>
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


export default WipeTime;
