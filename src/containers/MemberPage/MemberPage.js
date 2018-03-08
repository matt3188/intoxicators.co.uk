import React, { Component } from 'react';

const members = JSON.parse(localStorage.getItem('members'));

class MemberPage extends Component {
  render() {
    return <div>{members.map(owner => <div key={owner.name}>{owner.vehicle}</div>)}</div>;
  }
}

export default MemberPage;
