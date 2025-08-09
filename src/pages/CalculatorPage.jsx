import React, { useState, useEffect } from 'react';
import styles from './CalculatorPage.module.css';

const CalculatorPage = () => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const parsedDays = parseInt(days || 0, 10);
    const parsedHours = parseInt(hours || 0, 10);

    const validDays = Math.min(Math.max(parsedDays, 0), 31);
    const validHours = Math.min(Math.max(parsedHours, 0), 24);

    const seconds = (validDays * 24 + validHours) * 3600;
    setTotalSeconds(seconds);
  }, [days, hours]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>🧮 Калькулятор времени → секунд</h2>

      <div className={styles.container}>
        <input
          type="number"
          min="0"
          max="31"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Введите дни"
          className={styles.input}
        />

        <input
          type="number"
          min="0"
          max="24"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Введите часы"
          className={styles.input}
        />

        <p className={styles.result}>
          ⏱️ Всего: <strong>{totalSeconds.toLocaleString()}</strong> секунд
        </p>
      </div>
    </div>
  );
};

export default CalculatorPage;


