import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [formState, setClicked] = useState(false);

    function updateNote(event) {
        const { name: inputName, value: inputValue } = event.target
        setNote((prevValue) => {
            return {
                ...prevValue,
                [inputName]: inputValue
            }
        })
    }

    function preventDef(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        setClicked(false)
        event.preventDefault();
    }

    function updateFormState() {
        setClicked(true)
    }

    return (
        <div>
            <form className="create-note">
                {formState && (
                    <input onChange={updateNote} name="title" placeholder="Title" value={note.title} />
                )
                }

                <textarea onClick={updateFormState} onChange={updateNote} name="content" placeholder="Take a note..." rows={formState ? "3" : "1"} value={note.content} />

                <Zoom in={formState?true:false}>
                    <Fab onClick={preventDef}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;