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

const NewContain = styled(Container)`
  border: solid 1px red;
`;

function PresetView() {
  return (
    <>
      <NewContain>
        <NewCard>
          <NewImg src={beehive} />
        </NewCard>
        <NewCard>
          <NewImg src={beehive} />
        </NewCard>
        <NewCard>
          <NewImg src={beehive} />
        </NewCard>
        <CardTitle>Beehive</CardTitle>
      </NewContain>
    </>
  );
}

export default PresetView;
