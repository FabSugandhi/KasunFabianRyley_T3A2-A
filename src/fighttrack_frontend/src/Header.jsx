import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, [location]);

  const handleAuthClick = () => {
    setIsLoading(true);
    if (isAuthenticated) {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate('/');
    } else {
      navigate('/login');
    }
    setIsLoading(false);
  };

  return (
    <header className="mb-6" style={{ position: 'relative', paddingTop: '10px' }}>
      <button
        className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
        }}
        onClick={handleAuthClick}
        disabled={isLoading}
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <h1 className="title is-size-3">South Side Boxing</h1>
        <p className="subtitle is-size-5">
          Powered by Fighttrack
        </p>
        <p>Health. Fitness. Strength. Balance.</p>
        <p className="mt-2">
          Call us today on
          <span className="has-text-weight-bold"> 1-800-000-0000 </span>
          to start getting fit!
        </p>
      </div>
    </header>
  );
};

export default Header;