import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

const NavbarLink = (props) => {
    // const location = useLocation();
    // useEffect(() => {
    //     console.log("======> :: location", location);
    //     // eslint-disable-next-line
    // }, [location])

    return (<>
        <Navbar className="fixed-top" bg={props.mode} variant={props.mode}>
            <Navbar.Brand href="/">AB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey="/newsHeadlines"
                    className="mr-auto">
                    <Nav.Link href="/">{props.home}</Nav.Link>
                    <Nav.Link href="/contactUs">{props.contact}</Nav.Link>
                    <Nav.Link href="/newsHeadlines">{props.news}</Nav.Link>
                    <Nav.Link href="/form">{props.form}</Nav.Link>
                </Nav>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                }}>
                    <Form>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <div style={{ marginRight: "223px" }} className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable dark props.mode</label>
                    </div>
                </div>


            </Navbar.Collapse>
        </Navbar>
    </>);
}

NavbarLink.defaultProps = {
    title: "AB",
    home: "Home",
    contact: "Contact",
    news: "News",
    form: "Form"
}

export default NavbarLink;