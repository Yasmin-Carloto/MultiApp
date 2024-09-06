import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "./templates/Layout";
import Login from "./pages/Login";
import CarouselOfActivities from "./pages/CarouselOfActivities";
import QRCodeGenerator from "./pages/QRCodeGenerator";
import IPAddressFinder from "./pages/IPAdressFinder";
import MovieSearchEngine from "./pages/MovieSearchEngine";
import TodoApp from "./pages/TodoApp";
import QuizApp from "./pages/QuizApp";
import LanguageTranslator from "./pages/LanguageTranslator";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") || false);
  const navigate = useNavigate(); 

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/carousel");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token")
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token")
    
    if(token){
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />

      <Route
        element={
          isAuthenticated ? (
            <Layout handleAccess={handleLogin} handleLogout={handleLogout} />
          ) : (
            <Navigate to="/" />
          )
        }
      >
        <Route path="/carousel" element={<CarouselOfActivities />} />
        <Route path="/qrcode-generator" element={<QRCodeGenerator />} />
        <Route path="/ip-address-finder" element={<IPAddressFinder />} />
        <Route path="/movie-search-engine" element={<MovieSearchEngine />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/quiz-app" element={<QuizApp />} />
        <Route path="/language-translator" element={<LanguageTranslator />} />
      </Route>

      {isAuthenticated ? (
         <Route path="*" element={<Navigate to="/carousel" replace={true}/>} />
      ) : (
        <Route path="*" element={<Navigate to="/" replace={true}/>} />
      ) }
    </Routes>
  );
};

export default App;