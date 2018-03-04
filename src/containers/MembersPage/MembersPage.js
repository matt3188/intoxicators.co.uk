import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import Card from 'components/Card/Card';

import './MembersPage.css';

const MembersPage = props => (
  <Container>
    <Row className="show-grid">
      {console.log(props.members)}
      {/*props.members.map(owner => (
        <Col md={4} key={owner.id}>
          <Card title={owner.name} subTitle={owner.vehicle} image={owner.image} linkTo={`/members/${owner.id}`} />
        </Col>
      ))*/}
    </Row>
  </Container>
);

export default MembersPage;
