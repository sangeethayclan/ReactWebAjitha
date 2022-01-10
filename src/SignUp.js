import { Col, Container, Form, Row } from "react-bootstrap";
import house from './images/house.png'
import './SignUp.css'

function App() {
    return (
      <>
      <div>
        <Row xs={12}>
            <Col xs={12} sm={6} md={6}>
            <div className="bgc">
                <div className="Easiest-way-to-searc">
                    Easiest way 
                    to search a villa 
                    for rent.
                </div>
                <img src={house} className="house" />
            </div>
            </Col>
            <Col xs={12} sm={6} md={6}>
                <div className="center">
                    <div className="marbot">
                    <span class="Hey-there-Welcome-b">
                        <span class="text-style-1">Create your<br /></span>Rento Account.
                    </span>
                    </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="password" className="borders" placeholder="Anand" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" className="borders" placeholder="anand@gmail.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" className="borders" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" className="borders" placeholder="Password" />
                    </Form.Group>
                </Form>
                <div className="Rectangle">Sign Up</div>
                </div>
                
                <div>
                <div className="cente">
                <span class="Dont-have-an-account">
                Already have an account?<span class="text-style-1"> Login</span>
                </span>
                </div>

                </div>
            </Col>
        </Row>
      </div>
      </>
    );
  }
  
  export default App;
  