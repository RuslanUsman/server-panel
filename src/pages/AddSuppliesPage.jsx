

import './AdminWeapons.css';

const StealthPage = () => {
  const weapons = [
  {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Скрытность 1",
  description: "🔒 Чтобы добавить припасов, перейдите в раздел «Владелец сервера»."
}

,
{
  src: `${process.env.PUBLIC_URL}/images/supplies.jpg`,
  alt: "припасы",
  description: "📦 После выбора раздела «Владелец сервера» на левой панели, откройте подраздел «Поиск припасов». Введите название нужного предмета, например «ящик», и выберите его из появившегося списка. Нажмите «OK» — выбранный припас мгновенно появится в точке, где вы находитесь. Удобно, быстро и интуитивно!"
}



  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! Быстрая загрузка ресурсов на сервер</h1>
  <p>Здесь начинается ваш путь к мгновенному управлению игровым миром. Добавляйте припасы, настраивайте окружение и создавайте уникальные сценарии — всё в несколько кликов. ⚙️ Панель администратора Rust Creator — ваш инструмент для абсолютного контроля и креативности.</p>
</div>




        <h2>⚔️ Добавить припасов</h2>
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