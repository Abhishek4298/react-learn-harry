import { useContext, useState } from "react";
import NoteItems from "./NoteItems";
import noteContext from "../context/NoteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("Default");
    const [notes, setNotes] = useState()

    const handleClick = (evt) => {
        evt.preventDefault();
        addNote(title, description, tag);
        setNotes({ title: "", description: "", tag: "" })
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form onSubmit={e => { e.preventDefault() }} >
                <label>Title:</label>
                <br />
                <input
                    value={title}
                    name='title'
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br />
                <label>Description:</label>
                <br />
                <input
                    className='description'
                    name='description'
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <label>Tag:</label>
                <br />
                <input
                    className='tag'
                    name='tag'
                    type='text'
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
                <br />
                <input
                    onClick={handleClick}
                    className='submitButton'
                    type='submit'
                    value='Add User'
                />
            </form>
            <h2>You Notes</h2>
            <NoteItems />
        </div>
    );
}

export default AddNote;