import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // utilisation du service worker
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.pushManager.getSubscription().then(function(subscription) {
          if (subscription === null) {
            // Demande de permission pour les notifications push
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: '"key vapid'
                }).then(function(subscription) {
                  console.log('Subscription:', subscription);
                });
              }
            });
          }
        });
      });
    }
  }, []);

  return (
    <Router>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
