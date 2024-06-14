import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

const ImageCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src="purple.jpg" alt="First slide" />
                            <Card.Body>
                                <Card.Title>First Slide Label</Card.Title>
                                <Card.Text>
                                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src="image2.jpg" alt="Second slide" />
                            <Card.Body>
                                <Card.Title>Second Slide Label</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src="image3.jpg" alt="Third slide" />
                            <Card.Body>
                                <Card.Title>Third Slide Label</Card.Title>
                                <Card.Text>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src="image4.jpg" alt="Fourth slide" />
                            <Card.Body>
                                <Card.Title>Fourth Slide Label</Card.Title>
                                <Card.Text>
                                    Donec ullamcorper nulla non metus auctor fringilla.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src="image5.jpg" alt="Fifth slide" />
                            <Card.Body>
                                <Card.Title>Fifth Slide Label</Card.Title>
                                <Card.Text>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="text-center">
                            <Card.Img variant="top" src="image6.jpg" alt="Sixth slide" />
                            <Card.Body>
                                <Card.Title>Sixth Slide Label</Card.Title>
                                <Card.Text>
                                    Vestibulum id ligula porta felis euismod semper.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Carousel.Item>
            {/* Add more Carousel.Items as needed */}
        </Carousel>
    );
};

export default ImageCarousel;
