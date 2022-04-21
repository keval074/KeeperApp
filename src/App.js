// import logo from './logo.svg';
import React ,{useState} from 'react'
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
// import notes from "./components/notes";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
        setNotes(prevNotes => {
         return [...prevNotes , newNote];
        })
  }

  function deleteNote(id){
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem , index)=>{
          return index !== id;
        })
        
      })
  }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {addNote}
      />
      {notes.map(((noteItem,index) => {
         return <Note
         key = {index}
         id = {index}
         title = {noteItem.title}
         content = {noteItem.content}
         onDelete = {deleteNote}
           />
      }))}
      {/* <Note
       key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
