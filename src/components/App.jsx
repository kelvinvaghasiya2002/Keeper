import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
// import notes from '../notes';
import CreateArea from './CreateArea';


// function createNote(note){
//     return (
//         <Note
//             key={note.key}
//             title={note.title}
//             content={note.content}
//         />
//     )
// }

function App() {
    const [items , setItem] = useState([]);

    function addItem(note){
        setItem((prevValue)=>{
            return [...prevValue,note]
        })
    }

    function deleteItem(id) {
        setItem((prevValue)=>{
            return prevValue.filter((item,index)=>{
                return id!==index
            })
        })
    }

    return (
        <div>
            <Header />

            {/* {notes.map((note)=>{
                return (
                    <Note
                        key={note.key}
                        title={note.title}
                        content={note.content}
                    />
                )
            })} */}

            <CreateArea onAdd={addItem} />
            {items.map((note,index)=>{
                return (
                    <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteItem} />
                )
            })}

            <Footer />
        </div>
    )
}

export default App;