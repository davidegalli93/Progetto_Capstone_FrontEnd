import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdAccountCircle } from "react-icons/md";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { EMPTY_CART, REMOVE_CART } from "../../redux/actions/CartAction";
import { FaTrash } from "react-icons/fa";
import { logOut, setToken, setUser } from "../../redux/actions/UserActions";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);

  //Offcanvas per carrello
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Search bar
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  //login
  //impostazioni per loggarsi
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/auth/login";

    var dataObj = {
      username: String,
      accessToken: String,
      tokenType: String,
    };

    const postDataLogin = {
      username: usernameLogin,
      password: passwordLogin,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDataLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        dataObj = data;
        console.log(data);
        dispatch(setToken(dataObj));
        dispatch(setUser(dataObj));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0" sticky="top">
      <Container fluid className="flex-column p-0">
        <Row className="bg-dark w-100 text-white">
          <Col>
            <p className="my-0 text-center">Spedizione Gratuita sopra i 50€</p>
          </Col>
        </Row>
        <Row className="w-100 align-items-center py-2 my-4">
          <Col xs={1}>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={show} />
          </Col>
          <Col xs={5} md={3}>
            <Link to={"/home"}>Logo</Link>
          </Col>
          <Col>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "300px" }}
                navbarScroll
              >
                <NavDropdown title="Cane" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/catalogo/cane");
                    }}
                  >
                    Tutti i prodotti per il tuo cane
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Gatto" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pesci" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>

          <Col xs={2}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Button
                onClick={() => {
                  navigate("/catalogo/cerca/" + query);
                }}
                variant="outline-transparent"
              >
                <AiOutlineSearch size="30px" />
              </Button>
            </Form>
          </Col>

          <Col xs={3} className="d-flex justify-content-end align-items-center">
            <Nav.Link>
              <Dropdown drop="start">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <MdAccountCircle size="30px" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {user.name == undefined ? (
                    <Container>
                      <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            value={usernameLogin}
                            onChange={(e) => setUsernameLogin(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                          value={passwordLogin}
                          onChange={(e) => setPasswordLogin(e.target.value)}
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Accedi
                        </Button>
                      </Form>
                      <Dropdown.Divider />
                      <Link to={"/register"}>Crea il tuo account</Link>
                    </Container>
                  ) : (
                    <>
                      <Dropdown.Item>
                        <Row>
                          <Col>
                            <h4>
                              {user.name} {user.lastname}
                            </h4>
                          </Col>
                        </Row>
                        <Button
                          onClick={() => {
                            navigate("/profile");
                          }}
                          className="w-100 my-2"
                        >
                          Visualizza profilo
                        </Button>
                        <Dropdown.Divider />
                        <Button
                          onClick={() => {
                            dispatch(logOut());
                            navigate("/home");
                          }}
                        >
                          Esci
                        </Button>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>

            <Nav.Link href="#action1">
              <Link to={"/preferiti"}>
                <AiOutlineHeart size="30px" className="mx-2" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <AiOutlineShoppingCart
                size="30px"
                onClick={handleShow}
                className="mx-2"
              />
              <Badge bg="secondary"></Badge>

              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Carrello</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cart.items == undefined || cart.items.length == 0 ? (
                    <Card.Body>
                      <Card.Title>
                        Non ci sono prodotti nel tuo carrello
                      </Card.Title>
                    </Card.Body>
                  ) : (
                    <>
                      {cart.items.map((cart, i) => (
                        <Card.Body key={i}>
                          <Row>
                            <Col xs={3}>
                              <img
                                src={cart.foto}
                                style={{ height: "100px" }}
                                alt=""
                              />
                            </Col>
                            <Col>
                              <div>{cart.nome}</div>
                              {cart.prezzo}€
                              <Button
                                variant="danger"
                                className="text-end"
                                onClick={() => {
                                  dispatch({
                                    type: REMOVE_CART,
                                    payload: i,
                                  });
                                }}
                              >
                                <FaTrash />
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      ))}
                      <Col
                        sm={12}
                        className="font-weight-bold mb-3 ml-4 text-end"
                      >
                        <p className="d-inline">TOTALE: </p>
                        {cart.items.reduce(
                          (acc, currentValue) =>
                            acc + parseFloat(currentValue.prezzo),
                          0
                        )}
                        €
                      </Col>
                      {user.name == undefined ? (
                        <Button>
                          <Link
                            to={"/register"}
                            onClick={() => {
                              setShow(false);
                            }}
                            className="text-white"
                          >
                            Accedi o registrati per procedere con l'ordine
                          </Link>
                        </Button>
                      ) : (
                        <Button>
                          <Link
                            to={"/carrello"}
                            onClick={() => {
                              setShow(false);
                            }}
                            className="text-white"
                          >
                            Procedi con l'acquisto
                          </Link>
                        </Button>
                      )}
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch({
                            type: EMPTY_CART,
                          });
                        }}
                      >
                        Svuota carrello
                      </Button>
                    </>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
