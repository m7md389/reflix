import React, { Component } from "react";
import "../styles/landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        {this.props.users.map((user) => (
          <div key={user.id} style={{ backgroundColor: user.color }}>
            {user.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Landing;
