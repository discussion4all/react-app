
import { Button, Nav } from "react-bootstrap";


const Navbar = () =>{
    return(
        <Nav activeKey="/home">
        <Nav.Item as="li">
          <Nav.Link href="/home">英國升學</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/about">澳洲升學</Nav.Link>
        </Nav.Item>
      </Nav>
        )
}
export default Navbar;