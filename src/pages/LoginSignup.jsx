import  { useState } from 'react';

const LoginSignup = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="login-signup-container flex justify-center flex-col" >
      <h2 className="login-signup-title">{isLoginMode ? 'Login' : 'Sign Up'}</h2>
      <form className="login-signup-form">
        <input
          type="email"
          placeholder="Email"
          className="login-signup-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-signup-input"
          required
        />
        <button
          type="submit"
          className="login-signup-button"
        >
          {isLoginMode ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="login-signup-toggle">
        {isLoginMode ? 'Not a member? Sign Up' : 'Already a member? Login'}
        <button
          type="button"
          onClick={toggleMode}
          className="login-signup-toggle-button"
        >
          {isLoginMode ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginSignup;