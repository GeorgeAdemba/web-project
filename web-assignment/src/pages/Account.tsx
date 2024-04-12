import { Button } from "react-bootstrap";
import Header from "./../components/Header";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Account.css";

function Account() {
  return (
    <>
      <Header />
      <div
        className="account-buttons"
        style={{ width: "100vw", height: "50vh", padding: "50px" }}
      >
        <div className="actualbutton">
          <Button
            href="/User"
            size="lg"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="button-content">
              <PersonOutlineIcon fontSize="large" />
              <div className="button-text">User Account</div>
            </div>
          </Button>
        </div>
        <div className="actualbutton">
          <Button
            href="/Staff"
            size="lg"
            style={{ width: "100%", height: "100%", backgroundColor: "gray" }}
          >
            <div className="button-content">
              <PersonOutlineIcon fontSize="large" />
              <div className="button-text">Staff Account</div>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Account;
