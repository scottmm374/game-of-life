import React from "react";
import { Container, Card, CardImg, CardTitle } from "reactstrap";
import beehive from "../../assets/beehive.png";
import styled from "styled-components";

const NewImg = styled(CardImg)`
  height: 120px;
  width: 120px;
`;

const NewCard = styled(Card)`
  height: 120px;
  width: 120px;
`;

function PresetView() {
  return (
    <>
      <Container>
        <NewCard>
          <NewImg src={beehive} />
        </NewCard>
        <CardTitle>Beehive</CardTitle>
      </Container>
    </>
  );
}

export default PresetView;
