import Container from "react-bootstrap/esm/Container";
import "./Header.css";
import Box from "./Box";

function Header(){
    return(
        <Container fluid className="Header">
            <Box/>
        </Container>
    );
}
export default Header;