
import { Button, Nav } from "react-bootstrap";


const Navbar = () =>{
    return(
        <Nav activeKey="/home">
        <Nav.Item as="li">
          <Nav.Link href="/home">Study in the UK</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/about">Studying in Australia</Nav.Link>
        </Nav.Item>
      </Nav>
        )
}
export default Navbar;