import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useParams } from "react-router";
import banner from "../../images/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUniversity,
  faFlag,
  faFutbol,
  faVenusDouble,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import male from "../../images/male.png";
import female from "../../images/female.png";
import "./TeamDetails.css";
import "./TeamDetails.css";
const TeamDetails = () => {
  const { teamId } = useParams();
  const [details, setDetails] = useState([]);

  const {
    strTeam,
    strTeamBadge,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strStadiumDescription,
    strFacebook,
    strInstagram,
    strYoutube,
  } = details;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, [teamId]);

  const image = () => {
    if (strGender === "Male") {
      return male;
    } else {
      return female;
    }
  };
  return (
    <div className="container box-container">
      <header className="details-header">
        <Card className="bg-dark text-white">
          <Card.Img src={banner} alt="Card image" />
          <Card.ImgOverlay className="  justify-content-center text-center">
            <Card.Title>
              <Image
                style={{ width: "20%" }}
                src={strTeamBadge}
                alt="Card image"
              />
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      </header>
      <div className="container text-center mt-5 p-3 details-box">
        <div className="row ">
          <div className="col-md-6 col-lg-6 text-center">
            <h1>{strTeam}</h1>
            <p>
              <FontAwesomeIcon icon={faUniversity} /> Founded: {intFormedYear}
            </p>
            <p>
              <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
            </p>
            <p>
              <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
            </p>
            <p>
              <FontAwesomeIcon icon={faVenusDouble} /> Gender: {strGender}
            </p>
          </div>
          <div className="col-md-6">
            <img style={{ width: "80%" }} src={image()} alt="iamge" />
          </div>
        </div>
      </div>
      <div className="container">
        <p>{strStadiumDescription}</p>
        <p>{strStadiumDescription}</p>
      </div>
      <div className="text-center m-3">
        <p>
          <Button className="m-3 bg-danger">
            <a target="_blank" href={strInstagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Button>

          <Button className="m-3 bg-danger">
            <a target="_blank" href={strYoutube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Button>
          <Button className="m-3 bg-dark">
            <a target="_blank" href={strFacebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default TeamDetails;
