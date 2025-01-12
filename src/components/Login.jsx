import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {SignUp} from './Signup';
import '@fortawesome/fontawesome-free/css/all.min.css';


 export const Login = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.formSection}>
          <h1 style={styles.h1}>Login</h1>
          <form id="signupForm">
            <div style={styles.inputGroup}>
              <label htmlFor="email"></label>
              <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i>
              <input type="email" id="email" placeholder="xyz@gmail.com" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password"></label>
              <i className="fa-solid fa-key" style={{ marginRight: '10px' }}></i>
              <input type="password" id="password" placeholder="Password" style={styles.input} />
            </div>

            <div style={styles.rememberMe}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" style={styles.label}>Remember me</label>
            </div>

            <div style={styles.login}>
              <p style={styles.loginText}>
                New User..? 
                {/* Corrected Link */}
                <Link to="/Signup">Register</Link>
              </p>
            </div>

            <div style={styles.socialLogin}>
              <div>
                <button type="submit" style={styles.button}>
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>

        <div style={styles.imageSection}>
          <img src="images/login.png" alt="style" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

// App Component where Router is implemented
const App1 = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '30px',
    boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.1)',
  },
  formSection: {
    width: '400px',
    padding: '40px',
  },
  h1: {
    textAlign: 'center',
    fontSize: '40px',
  },
  inputGroup: {
    marginBottom: '20px',
    marginLeft: '30px',
  },
  input: {
    width: '80%',
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid black',
    borderRadius: '',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '50px',
  },
  label: {
    fontSize: '15px',
    marginLeft: '10px',
  },
  login: {
    marginTop: '10px',
    marginLeft: '50px',
  },
  loginText: {
    fontSize: '15px',
  },
  socialLogin: {
    marginTop: '50px',
    textAlign: 'center',
  },
  button: {
    height: '40px',
    width: '100px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'rgb(89, 83, 154)',
    color: 'white',
    fontSize: '15px',
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'aliceblue',
  },
  buttonHover: {
    backgroundColor: 'rgb(44, 34, 179)',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '500px',
    height: '500px',
  },
};

export default App1;
