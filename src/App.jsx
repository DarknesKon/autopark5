import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import TransportPage from './Pages/TransportPage';
import LocationPage from './Pages/LocationPage';
import DriversPage from './Pages/DriversPage';
import DirectionSheetPage from './Pages/DirectionSheetPage';
import FuelInfoPage from './Pages/FuelInfoPage'; // Импортируйте новый компонент
import './assets/style.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="grid-container">
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Header openSidebar={openSidebar} />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/direction-sheet" element={<DirectionSheetPage />} />
            <Route path="/fuel-info" element={<FuelInfoPage />} /> {/* Добавьте новый маршрут */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;