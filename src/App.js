import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import ProductAll from "./Page/ProductAll";
import Login from "./Page/Login";
import ProductDetail from "./Page/ProductDetail";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
