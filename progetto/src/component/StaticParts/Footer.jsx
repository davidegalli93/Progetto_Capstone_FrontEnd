import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="bg-dark text-white">
      <Row className="flex-column py-3">
        <Col>
          <p>Logo</p>
        </Col>
        <Col>
          <p>Numero 1 per vendite a domicilio</p>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <ul className="list-unstyled">
            <h4>Negozi</h4>
            <li className="listaFooter">
              <a href="#">Ordine e ritira</a>
            </li>
            <li className="listaFooter">
              <a href="#">Servizi Esclusivi</a>
            </li>
            <li className="listaFooter">
              <a href="#">Trova negozio</a>
            </li>
            <li className="listaFooter">
              <a href="#">Eventi</a>
            </li>
            <li className="listaFooter">
              <a href="#">Magazine</a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="list-unstyled">
            <h4>Informazioni utili</h4>
            <li className="listaFooter">
              <a href="#">Assistenza clienti</a>
            </li>
            <li className="listaFooter">
              <a href="#">Privacy</a>
            </li>
            <li className="listaFooter">
              <a href="#">Condizioni di vendita</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h4>Seguici su:</h4>
          <FaInstagram size="30px" className="mx-2" />
          <FaLinkedin size="30px" className="mx-2" />
          <FaTwitter size="30px" className="mx-2" />
          <FaFacebookSquare size="30px" className="mx-2" />
        </Col>
      </Row>

      <Row fluid className="bg-secondary py-1">
        <Col>
          <p>
            AGRIFARMA S.P.A a socio unico Via Roncaglia, 12, 20146-Milano (MI)
            P.IVA 01067670990 C.F 01421010487 Capitale Sociale Euro 1.121.363,00
            I.V Iscritta al registro imprese di MILANO MONZA BRIANZA E LODI PEC:
            info@pec.arcaplanet.net
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
