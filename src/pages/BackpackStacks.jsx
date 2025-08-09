import './AdminWeapons.css';

const BackpackStacks = () => {
  const weapons = [
   {
  src: `${process.env.PUBLIC_URL}/images/stak.jpg`,
  alt: "количество численности в каждой ячейке",
  description: "Это изображение иллюстрирует количество предметов, которое может храниться в одном слоте рюкзака. В нашем случае — 10,000 единиц. Такая настройка позволяет эффективно управлять инвентарём и уменьшить количество занимаемых ячеек."
}
,
 {
  src: `${process.env.PUBLIC_URL}/images/rykzak.jpg`,
  alt: "количество слотов",
  description: "Это изображение демонстрирует общее количество ячеек в рюкзаке. Чем больше слотов — тем больше предметов можно переносить одновременно. Увеличение вместимости рюкзака особенно важно для рейдов, сбора ресурсов и выживания в условиях Rust."
}




  ];

  return (
    <div className="page">
      <main className="content">
        
  <div className="header-banner">
  <h1>🌌 Добро пожаловать!</h1>
  <p>
    В этом разделе вы узнаете, как увеличить количество слотов в рюкзаке, 
    а также как работает суммирование предметов в каждом слоте. 
    Это поможет вам оптимизировать хранение ресурсов и повысить эффективность лута.
  </p>
</div>



        <h2>⚔️ Количество</h2>
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

export default BackpackStacks;
