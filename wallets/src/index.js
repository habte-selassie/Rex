import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import AuthApp from './web3auth/auth';
import './index.css';

//import { AuthCompone}

 
  const Main = () => {
  return (
    
    
   <div>
   
   <App />

    <AuthApp />

  </div>

    
         

      
  
  );
};

// Render the Main component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
