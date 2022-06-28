import React from 'react';
import '../src/App.css';
import Footer from './components/layout/Footer';
import NavRoutes from './routes/NavRoutes';

function App() {
  return (
    <div>
      <NavRoutes />

      <Footer />
    </div>
  );
}
export default App;
