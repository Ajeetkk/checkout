import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap'
class Mycart extends Component {
  render() {
    
    return (
      <div>
        <Container>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
              
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} className="shippingdetails" style={{ boxShadow: '0px 5px 38px -12px rgba(112,101,112,1)'}}>
                <Row bsStyle="default" style={{color: '#a32526', fontSize:'25px', lineHeight: '25px'}}>
                   <Col sm={1}></Col>
                   <Col sm={10}>
                   <br /> 
                   <strong>Shipping to</strong> : Myself 
                    
                   <hr bsStyle="default" style={{border: '1px solid #f4f4f4', marginTop: '24px'}}></hr>
                   </Col>
                   <Col sm={1}></Col>
                </Row>
                      <Row bsStyle="default" style={{}}>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                        <br /> 
                        <Row bsStyle="default" style={{}}>
                          <Col sm={3}>    
                          <Link to={'/'}><img bsStyle="default" style={{marginTop: '45px'}} className="" src=' https://lcf.imgix.net/default/Three%20Cedars%20-%20Light%20Burgundy%20Linen%20-%20530x640.jpg?h=120'/></Link>
                        </Col>
                          <Col sm={4}>
                            <a href="#" bsStyle="default" style={{color: '#b12f36', textDecoration: 'none', fontSize: '17px'}}>
                              Three Cedars - Deep Red - 26"
                            </a><br />
                            <label bsStyle="default" style={{color: '#9e9e9e', fontSize: '12px'}}>Item Number: CW1243</label>
                          <br /> 
                          <label bsStle="default" style={{fontWeight: '700', marginTop:'10px'}}>Ship To:
                          <select  bsStle="default" style={{padding:'5px', color: '#8d8d8d', fontSize: '15px', fontWeight: '700'}}>
                            <option value="Myself">Myself</option>
                            <option value="+ Add Recipient">+ Add Recipient</option>
                           
                          </select>
                       </label>
                         <label className="giftmessage">
                         Gift Message
                         </label>
                        
                          <textarea placeholder="Write a message here" className="textareaShiping"></textarea>


                          </Col>
                          <Col sm={5}>
                          <form style={{marginTop: '80px'}}>
                            <span>
                              <input min="1" max="5" type="number" value="1" style={{padding: '10px'}}></input>&nbsp; &nbsp; &nbsp;
                              <label>$47.95</label>&nbsp; &nbsp; &nbsp;
                              <label>$47.95</label>
                              <button style={{border: '0px', background:'white', fontSize:'25px', fontWeight:'200', position:'absolute', marginTop:'-70px'}}>x</button>
                           </span>
                           
                          </form>
                          
                          </Col>
                      </Row>
                      <br />
                    </Col>
                   <Col sm={1}></Col>
                </Row>
                
                </Col>
               
                <Col xs={2} sm={2} md={2} lg={2}>
               
                </Col>
            </Row>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
              
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} className="backgroundmycartbottom" style={{ boxShadow: '0px 5px 38px -12px rgba(112,101,112,1)'}}>
                <Form>
               
                  <Row style={{marginTop:'40px', marginBottom:'40px'}}>
                    
                    <Col sm={1}> 
                    </Col>
                    <Col xs={6} sm={2}>
                    <input type="button" value="Empty Cart" className="ShippingBtn"></input>
                                       
                    </Col>
                    <Col xs={6} sm={2}>
                    <input type="button" value="Save Cart" className="ShippingBtn"></input>
                    
                    
                    </Col>                    
                    <Col sm={2}> </Col>               
                    <Col sm={4}>
                        <div>
                        <div className="cartbtn">
                          <div className="carttitle">Cart Total</div>
                          <div className="amountcart">$45.95</div>
                        </div>
                        </div>
                        <a class="button cartCheckOut w-button" href="/checkout/sign-in">Checkout</a>
                    </Col>
                    <Col sm={1}> 
                    </Col>
                  </Row>
                 
                  </Form>
                </Col>
               
                <Col xs={2} sm={2} md={2} lg={2}>
               
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Mycart;
