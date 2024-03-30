import Component from "./Library[FUNC]";
import "./App.css";
import { Row } from "react-bootstrap";

function Library() {
  return (
    <>
      <div>App</div>
      <Row xs={2} md={3} className="g-4">
        <div className="recommendations">
          <div className="recommendations">
            <Component
              bookImage="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
              title="Jurassic world"
              description="about dinosaurs"
              author="some guy"
              genre="sci-fi"
            />
          </div>
          <div className="recommendations">
            <Component
              bookImage="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
              title="Jurassic world"
              description="about dinosaurs"
              author="some guy"
              genre="sci-fi"
            />
          </div>
          <div className="recommendations">
            <Component
              bookImage="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
              title="Jurassic world"
              description="about dinosaurs"
              author="some guy"
              genre="sci-fi"
            />
          </div>
          <div>
            <Component
              bookImage="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
              title="Jurassic world"
              description="about dinosaurs"
              author="some guy"
              genre="sci-fi"
            />
          </div>
          <div className="recommendations">
            <Component
              bookImage="https://m.media-amazon.com/images/I/810t2nP7GDL._SL1500_.jpg"
              title="Jurassic world"
              description="about dinosaurs"
              author="some guy"
              genre="sci-fi"
            />
          </div>
        </div>
      </Row>
    </>
  );
}

export default Library;
