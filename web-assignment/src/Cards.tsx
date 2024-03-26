import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Card.css";
import Row from "react-bootstrap/Row";

function Cards() {
  return (
    <>
      <Row xs={2} md={3} className="g-4">
        <div className="card-display">
          <Card className="cards" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </>
  );
}

export default Cards;

// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// function GridExample() {
//   return (
//     <Row xs={2} md={3} className="g-4">
//       {Array.from({ length: 12 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img
//               variant="top"
//               src="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
//             />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default GridExample;
