import "./Body.css";
import Card from "./Cards";

function Body() {
  return (
    <>
      <h4 className="rec-head">Recommendations</h4>
      <div className="recommendations">
        <span>
          <Card />
        </span>
      </div>
    </>
  );
}

export default Body;
