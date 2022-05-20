import React, { useContext } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import styled from 'styled-components';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Sidebar />
          <Main>
            <div className="container">
              <Routes>
                <Route path="/" exact element={<Home />} />
              </Routes>
            </div>
          </Main>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const Layout = styled.div` 
  display:flex;
  @media (max-width:992px){
    flex-direction:column;
  }
`
const Main = styled.main`
  padding:3rem;
  max-width:750px;
  margin-left:auto;
  margin-right:auto;
  @media (max-width:992px){
    padding:2rem;
  }
`