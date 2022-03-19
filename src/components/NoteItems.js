import { useContext, useEffect, useState } from "react";

import noteContext from "../context/NoteContext";
const NoteItems = () => {
    const [note, setNote] = useState()

    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(async () => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    return (<>
        <div className="row my-3">
            <div className="container mx-2">
                {
                    notes.length &&
                    notes.map((el, id) => {
                        return (
                            <div key={id}>
                                <h2>
                                    <div className="card mb-2" style={{ width: "18rem" }}>
                                        <div className="card-body" >
                                            <h5 className="card-title">{el.title ? el.title : ""}</h5><br />
                                            <p className="card-text">{el.description ? el.description : ""}</p>
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            <i class="fa fa-times" aria-hidden="true"></i>
                                        </div>
                                    </div >
                                </h2>
                            </div>)
                    })
                }
            </div>
        </div>


    </>);
}
export default NoteItems;