// CallDropPage.jsx
import './AdminWeapons.css';

const CallDropPage = () => {
  const weapons = [
 {
  src: `${process.env.PUBLIC_URL}/images/admban1.jpg`,
  alt: "Призвать Десант(Дроп)",
  description: " Чтобы призвать сигнальную ракетницу(Дроп), перейдите в раздел «Владелец сервера» ."
}


,
{
  src: `${process.env.PUBLIC_URL}/images/drop1.jpg`,
  alt: "Призвать Десант(Дроп1)",
  description: "После того как вы выбрали раздел **Основные команды**, перейдите в подраздел **Призвать десант**. Этот инструмент позволяет вызвать дроп на выбранную вами локацию. 📦 Десант будет сброшен точно в ту точку, откуда вы инициировали вызов. Это удобно для тактической поддержки, снабжения или создания сюжетных событий на сервере."
}


,
{
  src: `${process.env.PUBLIC_URL}/images/dropdrop.jpg`,
  alt: "Призвать Десант(Дроп2)",
  description: "Вы можете добавить десант, который будет сброшен **рандомно** в одну из  РТ. Для этого перейдите в раздел **Владелец сервера**, затем выберите **Основные команды** и откройте подраздел **Добавить Десант**. 📦 Такой способ отлично подходит для создания неожиданных игровых ситуаций и динамичных ивентов на сервере."
}




  ];

  return (
    <div className="page">
      <main className="content">
        
<div className="header-banner">
  <h1>🌌 Добро пожаловать! как призвать Десант(Дроп)</h1>
  <p>
    Здесь вы узнаете, как правильно призвать Десант(Дроп) в ваш сервер.
   
  </p>
</div>


        <h2>⚔️ Призвать Десант(Дроп)</h2>
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

export default CallDropPage;