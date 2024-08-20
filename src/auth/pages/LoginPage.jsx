import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './LoginPage.css';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = () => {
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    const lastPath = localStorage.getItem('lastPath') || '/';
    login(username);
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-box text-center p-5 shadow-lg">
        <h1 className="mb-4">Login</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary btn-lg w-100"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
