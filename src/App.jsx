import { HashRouter, Routes, Route } from "react-router-dom";
import Loggin from "./components/Loggin/Loggin.jsx";
import Reembolsos from "./components/Reembolsos/Reembolsos.jsx";
import Solicitacao from "./components/solicitacao/Solicitacao.jsx";
import "./global.scss";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Loggin />} />
        <Route path="/Reembolsos" element={<Reembolsos />} />
        <Route path="/Solicitacao" element={<Solicitacao />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
