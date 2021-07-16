import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CanvasView = ({ canvasRef, width, height, onClick }) => {
  return (
    <Container className='d-flex justify-content-center canvasview'>
      <Row>
        <Col>
          <Col>
            <h4>"Generation: "Gebrations here"</h4>
          </Col>
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
