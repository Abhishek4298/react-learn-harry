import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const NavbarLink = (props) => {
    return (<>
        <Navbar bg={props.mode} variant={props.mode}>
            <Navbar.Brand href="#home">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

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
    title: "Demo",
    home: "Home",
    contact: "Contact",
    about: "About",
}

export default NavbarLink;