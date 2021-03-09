import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Team = (props) => {
  const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
  return (
    <div className="mt-5 main-card ">
      <Col xs className="col-md-6 col-lg-3 col-sm-12  p-3 ">
        <Card className="p-3 cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={strTeamBadge} />
          <Card.Body className="text-center">
            <Card.Title>{strTeam}</Card.Title>
            <p>Sports Type: {strSport}</p>
            <Link to={`/team/${idTeam}`}>
              <Button variant="primary">
                Details <FontAwesomeIcon icon={faInfoCircle} />
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Team;
