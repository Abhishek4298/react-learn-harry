import noImageFound from "../noImageFound.jpeg";
const AboutCard = (props) => {
    return (
        <div className="card mb-2" style={{ width: "18rem" }}>
            <div className="card-body" >
                <img className="card-img-top" src={props.image ? props.image : noImageFound} alt="Card cap" />
                <h5 className="card-title">{props.title ? props.title : ""}</h5>
                <p className="card-text">{props.description ? props.description : ""}</p>
                <a href={props.url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div >
    )
}

export default AboutCard