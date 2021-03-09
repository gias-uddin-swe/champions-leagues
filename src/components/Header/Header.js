import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../images/banner.jpg";
import "../Team/Team.css";
const Header = () => {
  return (
    <div className="header container">
      <Card className="bg-dark text-white header-banner">
        <Card.Img src={banner} alt="Card image" />
        <Card.ImgOverlay className="   text-center">
          <Card.Title className='title'>CHAMPIONS LEAGUE</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Header;
