import React from "react";
import { Header } from "./Componentes/Header";
import 'boxicons';
import { BrowserRouter as Routes } from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";
import { DataProvider } from "./Context/Dataprovider";
import { Carrito } from "./Componentes/Carrito/Carrito";



function App() {
  return (
    <DataProvider>
    <div className="App">
      <Routes>
      <Header />
      <Carrito />
      <Paginas />
      </Routes>
    </div>
    </DataProvider>
  );
}

export default App;
