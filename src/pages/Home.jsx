import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Добро пожаловать!</h2>
      <p>Выберите режим входа:</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/creator')} style={btnStyle}>
          👤 Создатель
        </button>
        <button onClick={() => navigate('/admin')} style={btnStyle}>
          🔒 Админ
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  margin: '10px',
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Home;
