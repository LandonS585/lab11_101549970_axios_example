import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then(res => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <Container className="my-4">
        <h2 className="mb-4 text-center">Person List</h2>
        <Row>
          {this.state.persons.map(person => (
            <Col md={6} lg={4} className="mb-4" key={person.login.uuid}>
              <Card>
                <Card.Img variant="top" src={person.picture.large} />
                <Card.Body>
                  <Card.Title>
                    {person.name.title} {person.name.first} {person.name.last}
                  </Card.Title>
                  <Card.Text>
                    {person.email}
                    <br />
                    {person.location.city}, {person.location.country}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}