import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import CharDetails from './pages/CharDetails';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* dynamic route, to acces the characterId we will need useParams()  */}
        <Route path="/character/:characterId" element={<CharDetails/>}/>
        <Route exact path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
