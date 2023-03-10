import { Typography } from "@mui/material";
import { green, lightBlue, red } from "@mui/material/colors";
import { Container } from "@mui/system";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <div style={{ backgroundColor: "lightblue", padding: 50 }}>
      <div>
        <h3 style={{ textAlign: "center" }}>Login in to ShopCard</h3>
        <Typography style={{ textAlign: "center" }}>Enter your Login Details</Typography>
        <Container
          style={{
            maxWidth: 500,
            padding: 50,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group>
            <Form.Text className="text-muted">
             If you don't have an account , please 
             <Link to="Sign-up" style={{ color: "#737373", marginLeft: 5 ,color: "red"}}>
               Sign-up
            </Link>
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default BasicExample;
