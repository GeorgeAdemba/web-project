import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Card.css";
import Row from "react-bootstrap/Row";

function Cards() {
  return (
    <>
      <Row xs={2} md={3} className="g-4">
        <div className="card-display">
          <Card className="cards">
            <Card.Img className="card-img"
              variant="top"
              src="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
            />
            <Card.Body>
              <Card.Title>God Speaks My Language</Card.Title>
              <Card.Text>
                A History of Bible Translation in the land of East Africa.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Title: God Speaks My Language</ListGroup.Item>
              <ListGroup.Item>Author: Aloo Osoti Mojola</ListGroup.Item>
              <ListGroup.Item>Genre: History</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="card-display">
          <Card className="cards">
            <Card.Img className="card-img"
              variant="top"
              src="https://m.media-amazon.com/images/I/712ITBOaNbL._SL1360_.jpg"
            />
            <Card.Body>
              <Card.Title>
                East African Language and Culture: A Review Study
              </Card.Title>
              <Card.Text>
                A study of the various languages and culture of East Africa
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Title: East African Language and Culture: A Review Study
              </ListGroup.Item>
              <ListGroup.Item>Author: Snehangshu Shekhar Chanda</ListGroup.Item>
              <ListGroup.Item>Genre: Study</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="card-display">
          <Card className="cards">
            <Card.Img className="card-img"
              variant="top"
              src="https://m.media-amazon.com/images/I/61+JUDlVVLL._SL1000_.jpg"
            />
            <Card.Body>
              <Card.Title>
                Ethnicity, Identity, and Conceptualizing Community in Indian
                Ocean East Africa
              </Card.Title>
              <Card.Text>
                An Indian Ocean Studies Series of communities along the coast of
                East Africa
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Title: Ethnicity, Identity, and Conceptualizing Community in
                Indian Ocean East Africa
              </ListGroup.Item>
              <ListGroup.Item>Author: Daren E. Ray</ListGroup.Item>
              <ListGroup.Item>Genre: Study</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="card-display">
          <Card className="cards">
            <Card.Img className="card-img"
              variant="top"
              src="https://m.media-amazon.com/images/I/61+JUDlVVLL._SL1000_.jpg"
            />
            <Card.Body>
              <Card.Title>
                Ethnicity, Identity, and Conceptualizing Community in Indian
                Ocean East Africa
              </Card.Title>
              <Card.Text>
                An Indian Ocean Studies Series of communities along the coast of
                East Africa
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Title: Ethnicity, Identity, and Conceptualizing Community in
                Indian Ocean East Africa
              </ListGroup.Item>
              <ListGroup.Item>Author: Daren E. Ray</ListGroup.Item>
              <ListGroup.Item>Genre: Study</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="card-display">
          <Card className="cards">
            <Card.Img className="card-img"
              variant="top"
              src="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
            />
            <Card.Body>
              <Card.Title>God Speaks My Language</Card.Title>
              <Card.Text>
                A History of Bible Translation in the land of East Africa.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Title: God Speaks My Language</ListGroup.Item>
              <ListGroup.Item>Author: Aloo Osoti Mojola</ListGroup.Item>
              <ListGroup.Item>Genre: History</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="card-display">
          <Card className="cards">
            <Card.Img className="card-img"
              variant="top"
              src="https://m.media-amazon.com/images/I/712ITBOaNbL._SL1360_.jpg"
            />
            <Card.Body>
              <Card.Title>
                East African Language and Culture: A Review Study
              </Card.Title>
              <Card.Text>
                A study of the various languages and culture of East Africa
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Title: East African Language and Culture: A Review Study
              </ListGroup.Item>
              <ListGroup.Item>Author: Snehangshu Shekhar Chanda</ListGroup.Item>
              <ListGroup.Item>Genre: Study</ListGroup.Item>
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
