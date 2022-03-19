import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Dhruval",
        "technology": "NodeJs",
        "language": "REACT"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Abhishek",
                "technology": "MERN",
                "language": "REACT"
            })
        }, 1000);
    }

    return (
        // Now we can use this state variables and function inside any components.
        // example is in contactUs
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
