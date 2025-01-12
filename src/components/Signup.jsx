import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Login} from './Login';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const SignUp = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.formSection}>
          <h1 style={styles.h1}>Sign Up</h1>
          <p style={styles.paragraph}>Secure Your Communications with Us</p>
          <form id="signupForm">
            <div style={styles.inputGroup}>
              <label htmlFor="name"></label>
              <i className="fa-solid fa-user" style={styles.icon}></i>
              <input type="text" id="name" placeholder="username" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email"></label>
              <i className="fa-solid fa-envelope" style={styles.icon}></i>
              <input type="email" id="email" placeholder="xyz@gmail.com" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password"></label>
              <i className="fa-solid fa-key" style={styles.icon}></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                maxLength="8"
                required
                style={styles.input}
              />
              <ul style={styles.passwordRequirements}>
                <li>Least 8 characters</li>
                <li>Least one number (0-9) or a symbol</li>
                <li>Lowercase (a-z) and uppercase (A-Z)</li>
              </ul>
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword"></label>
              <i className="fa-solid fa-unlock-keyhole" style={styles.icon}></i>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-Type Password"
                maxLength="8"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.login}>
              <p>
                Already Registered?{' '}
                <span>
                  <Link to="/">Login</Link> {/* Corrected the text to "Login" */}
                </span>
              </p>
            </div>
            <div style={styles.socialLogin}>
              <div style={styles.button1}>
                <button type="submit" onClick={() => console.log('passwordCheck()')} style={styles.button}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div style={styles.imageSection}>
          <img src="images/style.png" alt="style" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

// App Component
const App1 = () => {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </Router>
   );
}

const styles = {
  body: {
    fontFamily: 'sans-serif',
    margin: '0',
    padding: '0',
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
    fontSize: '30px',
    fontFamily: 'arial',
    textAlign: 'center',
    marginBottom: '20px',
  },
  paragraph: {
    marginLeft: '50px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  icon: {
    marginRight: '10px',
  },
  input: {
    width: '80%',
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid black',
    borderRadius: '',
  },
  passwordRequirements: {
    listStyleType: 'none',
    fontSize: '12px',
    marginLeft: '14px',
    marginTop: '5px',
  },
  login: {
    fontSize: '13px',
  },
  socialLogin: {},
  button1: {},
  button: {
    height: '40px',
    width: '100px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'rgb(89, 83, 154)',
    marginLeft: '130px',
    marginTop: '50px',
    color: 'white',
    fontSize: '15px',
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
    width: '350px',
    height: '600px',
    borderRadius: '30px',
  },
};

// Correct exports
export default  App1;
