import React from 'react'
import './NewArticles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row, Button } from "react-bootstrap";

function NewArticles() {
    return (
        <div className="NewArticles">
            <main className="article-main">
                <div className="container-fluid">
                    <form className="form-article">
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Article Title
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="Article Title" placeholder="Article Title" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                                <Form.Label column sm="2">Article Content
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                                <Form.Label column sm="2">
                                    Article Category
                                    </Form.Label>
                                <Col sm="10">
                                    <Form.Control as="select" custom>
                                        <option>Politics</option>
                                        <option>Education</option>
                                        <option>Finance</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleFormControlFile1">
                                <Form.Label column sm="2">
                                    Article Text Content
                                    </Form.Label>
                                <Col sm="10">
                                    <Form.File id="exampleFormControlFile1" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleFormControlFile1">
                                <Form.Label column sm="2">
                                    Article Media Content
                                    </Form.Label>
                                <Col sm="10">
                                    <Form.File id="exampleFormControlFile1" />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default NewArticles;
