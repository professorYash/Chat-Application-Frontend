import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { robotImage } from "../assets";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setUserName(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        ).username
      );
    };
    fetchData();
  }, []);
  return (
    <Container>
      <img src={robotImage} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
