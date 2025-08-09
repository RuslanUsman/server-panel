import React from 'react';
import './FormulaPage.css';

const X2TitanFormula = () => {
  return (
    <div className="page">
      <main className="content">
        <h2>🛡️ Формула Х2 Титан</h2>
        <p>Усиленная броня “Х2 Титан” создаётся по формуле:</p>
        <pre className="formula-block">
          Х2 Титан = (Титан × 2) + Упрочнитель + Пластик
        </pre>
        <p>Рекомендуется использовать при рейде или защите базы.</p>
      </main>
    </div>
  );
};

export default X2TitanFormula;
