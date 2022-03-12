import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const NavbarLink = (props) => {
    return (<>
        <Navbar bg={props.mode} variant={props.mode}>
            <Navbar.Brand href="#home">AB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">{props.home}</Nav.Link>
                    <Nav.Link href="/contactUs">{props.contact}</Nav.Link>
                    <Nav.Link href="/newsHeadlines">{props.news}</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable dark props.mode</label>
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
}

export default NavbarLink;