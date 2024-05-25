import React from "react";
import "./App.module.scss";
import Layout from "./Pages/Layout/Layout.tsx";
import AdminPage from "./Pages/Dashboard/AdminPage.tsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <AdminPage />
      </Layout>
    </div>
  );
}

export default App;
