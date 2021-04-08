import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from "react-bootstrap";

function Login() {
    return (
        <div className="App">
            <main className="form-signin">
                <form>
                    <h2 className="h3 mb-3 fw-normal" >Please Login</h2>
                    <Form>
                        <Col>
                            <Form.Control placeholder="Email" />
                        </Col>
                        <Col>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Col>
                    </Form>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Rememeber Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </form>
            </main>
        </div>
    );
}

export default Login;
