import './App.css';
import { Routes, Route } from "react-router-dom"
import Characters from './pages/Characters';
import CharDetails from './pages/CharDetails';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* dynamic route, to acces the characterId we will need useParams()  */}
        <Route path="/character/:characterId" element={<CharDetails/>}/>
        <Route exact path="/" element={<Characters/>}/>
      </Routes>
    </div>
  );
}

export default App;
