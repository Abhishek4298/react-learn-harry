import { useState } from "react";

const Home = (props) => {
    const [textArea, setTextArea] = useState("")
    const captialText = () => {
        const newTextArea = textArea.toUpperCase();
        setTextArea(newTextArea)
        props.showAlert("Text capital", "success")
    }
    const trimText = () => {
        const newTextArea = textArea.trim();
        setTextArea(newTextArea)
        props.showAlert("Trim text", "success")
    }
    const copyText = () => {
        navigator.clipboard.writeText(textArea);
        props.showAlert("Text copied", "success")
    }


    return (<>
        <div className="p-5 m-5">
            <div style={{ color: props.theme === "dark" ? "white" : "black" }}>
                <div className="mb-3">
                    <label htmlFor="textArea" className="form-label">Write Notes</label>
                    <textarea className="form-control" id="textArea"
                        placeholder="Enter text here"
                        value={textArea}
                        onChange={(e) => { setTextArea(e.target.value) }}
                        rows="8"></textarea>
                </div>
            </div>
            <button type="button" onClick={captialText} className="m-2 btn btn-primary">Capital</button>
            <button type="button" onClick={trimText} className="m-2 btn btn-primary">Trim</button>
            <button type="button" onClick={copyText} className="m-2 btn btn-primary">Copy</button>
            <h5> Total words {textArea.split(" ").length}Total letters{textArea.length}</h5>
            {/*  <button type="button" className="m-2 btn btn-primary">Primary</button>
            <button type="button" className="m-2 btn btn-primary">Primary</button> */}
        </div>

    </>);
}

export default Home;