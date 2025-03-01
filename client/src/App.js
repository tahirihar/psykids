import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import Layout from './components/Layout';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="not-found" element={<NotFound />} />
          <Route
            path="*"
            element={<Navigate to="not-found" replace />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
