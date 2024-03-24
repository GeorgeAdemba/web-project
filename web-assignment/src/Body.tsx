import Button from "react-bootstrap/Button";
import "./Body.css";
import Card from "./Cards";

function Body() {
  return (
    <>
      <h4>Search by:...</h4>
      <div className="topbar">
        <Button>Author</Button>
        <Button>Genre</Button>
        <Button>Price</Button>
      </div>
      <h4>Recommendations</h4>
      <div className="recommendations">
        <span>
          <Card />
        </span>
        <span>
          <Card />
        </span>
        <span>
          <Card />
        </span>
        <span>
          <Card />
        </span>
      </div>
      <p>Hellooo</p>
    </>
  );
}

export default Body;
