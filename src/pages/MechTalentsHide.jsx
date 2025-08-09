import './AdminWeapons.css';

const MechTalentsHide = () => {
  const weapons = [
  {
  src: `${process.env.PUBLIC_URL}/images/talmeh.jpg`,
  alt: "Скрытие мехов и питомцев",
  description: "На изображении показано, как скрыть мехов и питомцев на сервере. Это необходимо для балансировки игрового процесса или подготовки к особым режимам. Установка галочки отключает соответствующие элементы для игроков, обеспечивая контроль над механиками игры."
},
{
  src: `${process.env.PUBLIC_URL}/images/talant.jpg`,
  alt: "Скрытие талантов",
  description: "На изображении показано, как отключить отображение талантов на сервере. Это используется для балансировки игрового процесса или подготовки к особым режимам. Установка галочки скрывает таланты у игроков, предотвращая использование нежеланных механик."
}







  ];

  return (
    <div className="page">
      <main className="content">
        
 <div className="header-banner">
  <h1>🌌 Добро пожаловать! Скрытие талантов, мехов и питомцев</h1>
  <p>
    В этом разделе вы узнаете, как скрыть таланты, мехов и питомцев на сервере. 
    Это важно для балансировки игрового процесса или подготовки к особым режимам. 
    Если установлена <strong>галочка</strong> — значит, вы успешно скрыли соответствующий элемент. 
    Если галочка <strong>не установлена</strong> — сервер разрешает использовать их игрокам.
    Будьте внимательны при настройке, чтобы избежать нежеланных механик в игре.
  </p>
</div>





        <h2>⚔️ Скрыть талантов мехов и питомцев</h2>
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


export default MechTalentsHide;
