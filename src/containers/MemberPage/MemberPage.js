import React, { Component } from 'react';

const members = JSON.parse(localStorage.getItem('members'));
console.log(members);

class MemberPage extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
  }
  render() {
    return <div>{members.map(owner => <div key={owner.name}>{owner.vehicle}</div>)}</div>;
  }
}

export default MemberPage;
