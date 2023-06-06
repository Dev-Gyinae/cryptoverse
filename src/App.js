import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {Navbar, Home, News, CryptoDetails, Cryptocurrencies} from './components'

import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
    <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
           
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          <Link to="/">dev.Gyinae</Link> <br />
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
