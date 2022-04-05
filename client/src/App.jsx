import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import Header from './components/Header'
import CreateMessage from './views/CreateMessage';
import ReadMessage from './views/ReadMessage';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/create-message" element={<CreateMessage />} />
            <Route path="/read-message" element={<ReadMessage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
