
import './AdminWeapons.css';

const GodModePage = () => {
  const weapons = [
  {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Скрытность 1",
  description: "🔒 Чтобы включить или отключить режим неуязвимости, перейдите в раздел «Владелец сервера»."
}

,
{
  src: `${process.env.PUBLIC_URL}/images/besmert.jpg`,
  alt: "скрытность 2",
  description: "После входа в раздел «Владелец сервера» перейдите в подраздел «Основные команды» и выберите режим неуязвимость. Чтобы отключить его, воспользуйтесь командой «Снять неуязвимость», расположенной прямо под основной."
}


  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! Режим защиты администратора</h1>
  <p>
    🕶️ Здесь вы узнаете, как включить режим <strong>неуязвимости</strong>, чтобы чувствовать себя в полной безопасности. 
    Мы называем это <em>режимом Бога</em> — абсолютная защита и контроль над сервером.
  </p>
 
  <p>
    🔐 Полный контроль. Максимальная безопасность. Только для настоящих администраторов.
  </p>
</div>




        <h2>⚔️ Неуязвимость</h2>
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

export default GodModePage;