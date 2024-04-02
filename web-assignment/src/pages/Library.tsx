import Component from "../components/Library[FUNC]";

// import { Row } from "react-bootstrap";
import Header from "../components/Header";
import "./Library.css"

function Library() {
  return (
    <>
      <Header />
      <div className="rec-background">
        {/* <Row xs={2} md={3} className="g-4"> */}
          <div className="recommendations-group">
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
        {/* </Row> */}
      </div>
    </>
  );
}

export default Library;
