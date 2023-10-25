// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          JerseyNumber: {jerseyNumber}<br />
          Age:{age}
</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;