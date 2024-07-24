import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutUs() {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <Container>
                <Row className="my-5">
                    <Col>
                        <h1 className="text-center">O Nas</h1>
                        <p className="text-center">
                            Jesteśmy zespołem specjalistów w dziedzinie ortopedii i rehabilitacji, zajmującym się projektowaniem, produkcją i dystrybucją ortez.
                            Naszym celem jest edukowanie użytkowników o korzyściach płynących z odpowiedniego doboru ortez oraz dostarczanie wysokiej jakości produktów wspomagających zdrowie i komfort.
                        </p>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={6}>
                        <h2>Nasza Misja</h2>
                        <p>
                            Pomagamy ludziom poprawić jakość życia poprzez dostarczanie specjalistycznych ortez, które wspierają rehabilitację i zapobiegają urazom. Nasze produkty są wynikiem wieloletnich badań i współpracy z najlepszymi specjalistami.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/300x200" alt="Nasza misja" />
                            <Card.Body>
                                <Card.Title>Eksperci w dziedzinie ortez</Card.Title>
                                <Card.Text>
                                    Oferujemy szeroką gamę ortez dostosowanych do różnych potrzeb, od sportowców po osoby po operacjach.
                                </Card.Text>
                                <Button variant="dark" href="/kontakt">Skontaktuj się z nami</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Nasze Wartości</Card.Title>
                                <Card.Text>
                                    Innowacja, Zaufanie, Zaangażowanie
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Nasza Historia</Card.Title>
                                <Card.Text>
                                    Od ponad dekady dostarczamy najwyższej jakości ortezy, współpracując z ortopedami i fizjoterapeutami.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Nasza Wizja</Card.Title>
                                <Card.Text>
                                    Pragniemy stać się liderem w dziedzinie ortez, oferując innowacyjne rozwiązania poprawiające zdrowie i komfort naszych klientów.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col>
                        <h2 className="text-center">Poznaj Naszych Ekspertów</h2>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Person1" />
                            <Card.Body>
                                <Card.Title>Person 1</Card.Title>
                                <Card.Text>Ex_title_1</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Person2" />
                            <Card.Body>
                                <Card.Title>Person 2</Card.Title>
                                <Card.Text>Ex_title_2</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Person3" />
                            <Card.Body>
                                <Card.Title>Person 3</Card.Title>
                                <Card.Text>Ex_title_3</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    );
}

export default AboutUs;
