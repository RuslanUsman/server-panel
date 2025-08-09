
import './AdminWeapons.css';

const AddPetsPage = () => {
  const weapons = [
  {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Скрытность 1",
  description: "🔒 Чтобы добавить питомцев или монстрев , перейдите в раздел «Владелец сервера»."
}

,
{
  src: `${process.env.PUBLIC_URL}/images/monster.jpg`,
  alt: "скрытность 2",
  description: "🧭 После того как вы перейдёте в раздел «Владелец сервера», в меню слева внизу появится подраздел «Поиск монстров». Откройте его и введите в поиске имя желаемого питомца, монстра или босса. Выберите нужного из списка и нажмите «ОК». Через мгновение выбранное существо появится рядом с вами — готовое к приключениям!"
}


  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать!</h1>
  <p>
     
    В этом разделе вы узнаете, как <span style={{ color: '#00c896', fontWeight: 'bold' }}>добавить питомцев</span>,  
    <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>монстров</span>,  
    <span style={{ color: '#ffa500', fontWeight: 'bold' }}>боссов</span> и  
    <span style={{ color: '#6a5acd', fontWeight: 'bold' }}>мстителей</span> в игру.  
  </p>
</div>





        <h2>⚔️ Эти команды доступны админам</h2>
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

export default AddPetsPage;