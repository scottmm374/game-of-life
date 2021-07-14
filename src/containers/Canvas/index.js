import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CanvasView = ({ canvasRef, width, height, onClick }) => {
  return (
    <Container fluid className='d-flex justify-content-center canvasview'>
      <Row>
        <Col>
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
