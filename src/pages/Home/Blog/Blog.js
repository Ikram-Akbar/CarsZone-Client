import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import blogPic1 from "../../../images/blog/(1).png";
import blogPic2 from "../../../images/blog/(2).png";
import blogPic3 from "../../../images/blog/(3).png";
const Blog = () => {
  return (
    <Container className=" my-5">
      <div className="mb-5">
        <h4>Our News</h4>
        <hr />
        <h2>Latest Blog & Events</h2>
      </div>
    
      <Row>
        <Col>
          <Card border="dark" className="shadow" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blogPic1} />
            <Card.Body>
              <Card.Title>Ferrari A Vive !!</Card.Title>
              <small>Author : Ikram Akbar</small>
              <Card.Text>
              Ferrari cars are built at the 165,000 square-meter (16.5-hectare) Maranello factory.[13] In 2014 Ferrari was rated the world's most powerful brand by Brand Finance.
              </Card.Text>
              <Button variant="outline-dark">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="dark" className="shadow" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blogPic2} />
            <Card.Body>
              <Card.Title>Why should u buy Suzuki!</Card.Title>
              <small>Author : Ikram Akbar</small>
              <Card.Text>
               Having produced the highest number of drivers' championship wins (15).[11] Ferrari road cars are generally seen as a symbol of speed, luxury and wealth.
              </Card.Text>
              <Button variant="outline-dark">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="dark" className="shadow" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={blogPic3} />
            <Card.Body>
              <Card.Title>Have u Buy New Car?</Card.Title>
              <small>Author : Ikram Akbar</small>
              <Card.Text>
              Throughout its history, the company has been noted for its continued participation in racing, especially in Formula One, where it is the oldest and most 
              </Card.Text>
              <Button variant="outline-dark">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
