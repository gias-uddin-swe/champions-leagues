import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Team from "../Team/Team";
import "../Team/Team.css";
const Home = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams));
  }, []);
  return (
    <div className="home-main">
      <div className="home-main-header">
        <Header />
      </div>
      <Container>
        <Row>
          {team.map((tm) => (
            <Team team={tm} key={tm.idTeam}></Team>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
