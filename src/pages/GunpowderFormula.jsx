import React from 'react';
import './FormulaPage.css';

const GunpowderFormula = () => {
  return (
    <div className="page">
      <main className="content">
        <h2>🧨 Формула Пороха</h2>
        <p>Для производства пороха требуется:</p>
        <pre className="formula-block">
          Порох = (Уголь × 3) + Сера
        </pre>
        <p>Пример: если у вас 100 угля и 50 серы → получится 350 единиц пороха.</p>
      </main>
    </div>
  );
};

export default GunpowderFormula;
