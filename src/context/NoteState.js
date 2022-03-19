import NoteContext from "../context/NoteContext";
import { useState } from "react";
import axios from "axios";

const NoteState = (props) => {
    const hostURL = "http://localhost:8080";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial)

    const getNotes = async () => {
        let getAllNotes = await axios.get(`${hostURL}/notes`, {
            headers: {
                'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA1Nzg5OWUyMDZiZmE4Yjk4NDVkZiIsImlhdCI6MTY0NzMzNTMwNX0.oXS04-QnGyYMhThOPFWa_sis1ukfmLlqhMk56YaepVQ`
            }
        })
        console.log("======> :: getAllNotes", getAllNotes.data.NotesData);
        setNotes(getAllNotes.data.NotesData)
    }

    const addNote = async (title, description, tag) => {
        let addNewNote = await axios.post(`${hostURL}/notes`,
            {

                "title": title,
                "description": description,
                "tag": tag,
            },
            {
                headers:
                {
                    'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA1Nzg5OWUyMDZiZmE4Yjk4NDVkZiIsImlhdCI6MTY0NzMzNTMwNX0.oXS04-QnGyYMhThOPFWa_sis1ukfmLlqhMk56YaepVQ`
                }
            })
        alert("ddddddddddddd")
        console.log("======> :??????????: addNewNote", addNewNote);
        // console.log("======> :: addNote", addNewNote.data.NotesData);
        // setNotes(addNewNote.data.NotesData)
    }

    // const editNote = async () => {

    // }

    // const deleteNote = async () => {

    // }

    return (
        // Now we can use this state variables and function inside any components.
        // example is in contactUs
        <NoteContext.Provider value={{
            notes, getNotes,
            addNote,
            //  editNote, deleteNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
