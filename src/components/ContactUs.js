import { useContext, useEffect } from "react";
import noteContext from "../context/NoteContext";

const ContactUs = ({ theme }) => {
    document.title = "portfolio - Contact"
    //
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <h2 style={{ color: theme === "dark" ? "white" : "black" }}>ContactUs</h2>
            <h4>This is <b>{a.state.language}</b> app  which is build by <b>{a.state.name}</b> who is the  {a.state.technology} Developer</h4>
        </div>
    )

}

export default ContactUs;