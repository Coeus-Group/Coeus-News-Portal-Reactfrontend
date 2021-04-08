import './SignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from "react-bootstrap";


function SignUp() {
    return (
        <div className="App">
            <main className="form-signin">
                <form>
                    <h2 className="h3 mb-3 fw-normal" >Please Sign Up</h2>
                    <div className="form-floating">
                        <Form>
                            <Col>
                                <Form.Control placeholder="First Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last Name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Email" />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Col>
                            <Col>
                                <Form.Control type="password" placeholder=" Confirm Password" />
                            </Col>
                        </Form>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <p className="forgot-password text-center">
                            Already registered <a href="/">log in?</a>
                        </p>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default SignUp;
