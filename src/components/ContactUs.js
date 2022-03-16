const ContactUs = ({ theme }) => {
    document.title = "portfolio - Contact"
    return (<>
        <h2 style={{ color: theme === "dark" ? "white" : "black" }}>ContactUs</h2>
    </>);
}

export default ContactUs;