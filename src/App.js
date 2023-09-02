import React, { useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div className="App">
      <Auth />
      {/* <Layout /> */}
    </div>
  );
}

export default App;
