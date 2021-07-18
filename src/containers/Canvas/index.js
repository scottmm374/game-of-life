import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CanvasView = ({ canvasRef, width, height, onClick, gen }) => {
  return (
    <Container className='canvasview'>
      {/* <Row>
        <Col xl={12}>
          <h4>"Generation: {gen}</h4>
        </Col>
      </Row> */}

      <Row>
        <Col className='d-flex justify-content-center'>
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            onClick={onClick}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default CanvasView;
