import Form from "react-bootstrap/Form";
import "./User.css";
import Header from "../components/Header";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="formdiv">
        <Form
          style={{
            width: "300px",
            backgroundColor: "green",
            padding: "20px",
            borderRadius: "5px",
            color: "white",
            marginLeft: "400px",
            marginRight: "100px",
          }}
        >
          <div className="mb-3">
            <h3>Sign Up</h3>

            <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ color: "black" }}
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Me
            </label>
            <div>
              <a href="/User" className="a" style={{color:"white"}}>Already have an account? Login</a>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
