import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";

function App() {
  

  return (
    <div className="container align-center">
      <h1 style={{color:'#fff', fontWeight:"300"}}>Notes App</h1>
      <Search />
      <br />
      <Form />
      <br />
      <NoteList />
    </div>
  );
}

export default App;
