import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import styled from 'styled-components';
import InvoiceDetail from "./pages/InvoiceDetail";

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
                <Route path="/invoice/:invoice_id" element={<InvoiceDetail />} />
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
  min-height:100vh;
  @media (max-width:992px){
    flex-direction:column;
  }
`
const Main = styled.main`
  padding:3rem;
  max-width:850px;
  margin-left:auto;
  margin-right:auto;
  width:100%;
  @media (max-width:992px){
    padding:2rem;
  }
  @media (max-width:992px){
    padding:1.5rem 1rem;
  }
`
