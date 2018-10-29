import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Button, Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
class Payment extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    

    this.state = {
      Name: ''
    };
  }

  handleCompanyNameChange(e) {
    this.setState({ Name: e.target.value });
  }

  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
              
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} className="backgroundPaymentCenter" style={{ boxShadow: '0px 5px 38px -12px rgba(112,101,112,1)'}}>
                <Row style={{marginTop:'40px', marginBottom:'40px'}}>
                 <Col sm={1}>
                  
                  </Col>
                  <Col sm={6}>
                  <label bsStyle="default" style={{color: '#e0826b', textDecoration: 'none', fontWeight:'400', fontSize:'20px'}}>
                              Select a payment method
                    </label><br />
                    <label>
                       Your credit card or debit cards
                    </label><br />
                    <hr></hr><br />
                    <label>
                      Add a new Card
                      <h6>We accept all major credit and debit cards</h6>
                    </label><br />
                    <label style={{position: 'relative'}}>
                      <h6>
                        <span><i class="fa fa-credit-card"></i></span>&nbsp;
                      <span>Card Number</span>
                      <span style={{paddingLeft:'63px', position: 'absolute'}}>MM/YY:CVC</span>
                      </h6>                    
                    </label>
                    <hr></hr>
                    <label>
                      Billing Address For This Card:                     
                    </label><br />
                    <label style={{border: '1px solid #eae8e8'}}>
                      <h5>
                    <span>Tarun Bharatdwaj: United state</span>
                    <span class="fa fa-stack">
                      <i class="fa fa-caret-up" aria-hidden="true"></i>
                      <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                    </h5>
                    </label>
                    
                  </Col>
                  <Col sm={4}>
                      <div>
                        <div className="placeordermain">
                          <div className="carttitle">Cart Total</div>
                          <div className="amountcart">$45.95</div>
                          <br></br>
                          <Row style={{borderTop:'1px solid #eae8e8'}}>
                            <Col xs={6} sm={6}>
                            <h6>Subtotal</h6>
                            </Col>
                            <Col xs={6} sm={6}>
                             <h6>$45.95</h6> 
                            </Col>
                          </Row>
                          <Row style={{borderTop:'1px solid #eae8e8'}}>
                            <Col xs={6} sm={6}>
                            <h6>Shipping</h6>
                            </Col>
                            <Col xs={6} sm={6}>
                              <h6>$11.48</h6>
                            </Col>
                          </Row>
                          <Row style={{borderTop:'1px solid #eae8e8'}}>
                            <Col xs={6} sm={6}>
                              <h6>Tax</h6>
                            </Col>
                            <Col xs={6} sm={6}>
                              <h6>$0.00</h6>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <a class="button placeorder w-button" href="#">PLACE YOUR ORDER</a>
                  
                  </Col>
                  <Col sm={1}>
                   
                  </Col>
                </Row>
                </Col>
               
                <Col xs={2} sm={2} md={2} lg={2}>
               
                </Col>
            </Row>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
              
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} className="bgBottomPayment" style={{ boxShadow: '0px 5px 38px -12px rgba(112,101,112,1)'}}>
                <Row style={{marginTop:'30px', marginBottom:'30px'}}>
                 <Col sm={1}>
                  
                  </Col>
                  <Col sm={10}>
                  <label bsStyle="default" style={{color: '#e0826b', textDecoration: 'none', fontWeight:'400', fontSize:'20px'}}>
                              Use a Promo Code
                    </label><br /><hr></hr>
                    
                    <h5>Promo Code:</h5>
                    <Form horizontal>
                    <Row>
                      <Col sm={6}>
                      <FormGroup controlId="formInlineName">
                        
                        <FormControl type="text" placeholder="Enter Promo Code" value={this.state.Name} onChange={this.handleCompanyNameChange}/>
                      </FormGroup>{' '}
                      </Col>
                      <Col sm={6}>
                      <Button type="submit" block>Apply Promo Code</Button>
                      </Col>
                    </Row>
                    
                      
                     
                      
                    </Form>
                   </Col>
                   <Col sm={1}>
                  
                  </Col>
                  </Row>



                </Col>
               
                <Col xs={2} sm={2} md={2} lg={2}>
               
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Payment;
