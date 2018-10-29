import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mycart from './Mycart';
import Payment from './Payment';
import './CheckoutCss.css';
import { Container, Row, Col } from 'react-grid-system';
class Checkout extends Component {
  render() {
    return (
        <Router>
       
        <div>
        <Container>
            <Row bsStyle="default" style={{marginTop: '5%'}}>
                <Col xs={2} sm={2} md={2} lg={2}>
               
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} className="background" style={{ boxShadow: '2px -3px 48px -17px rgba(112,101,112,1)'}}>
                <Row bsStyle="default" style={{marginTop: '-5%', paddingBottom:'20px'}}>
                    <Col xs={2} sm={4} md={4} lg={4}></Col>
                    <Col xs={4} sm={2} md={2} lg={2}>
                    <div className="checkoutheder">
                        <Link to={'/'} className="checkouttopimages changeColor"><img sizes="24px" className="checkout-step-icon" src='https://www.lynchcreekwreaths.com/_themes/lcf/images/Icon-Cart-White.png'/></Link>
                        <div className="checkoutdottedcircle">
                        <Link to={'/'} className="checkouimagettitle changeColor">MY CART</Link>
                        </div>
                     </div>
                    </Col>
                    <Col xs={4} sm={2} md={2} lg={2}>
                    <div className="checkoutheder">
                        <Link to={'/Payment'} className="checkouttopimages"><img sizes="24px" className="checkout-step-icon" src='https://www.lynchcreekwreaths.com/_themes/lcf/images/Icon-Card-White.png'/></Link>
                        <div className="checkoutdottedcircle">
                            <Link to={'/Payment'} className="checkouimagettitle">PAYMENT</Link>           
                        </div>
                    </div>
                    </Col>
                    <Col xs={2} sm={4} md={4} lg={4}></Col>
                </Row>
               
                <br /><br />
            {/* <Link to={'/'} bsStyle="default" style={{textDecoration:'none'}}>Mycart</Link>&nbsp; */}
                    
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                
                </Col>
            </Row>
        </Container>
           {/* <h2>Welcome to React Router Tutorial</h2> */}
           
          
           
           <Switch>
              <Route exact path='/' component={Mycart} />
              <Route exact path='/Payment' component={Payment} />
             </Switch>
        </div>
     </Router>
    );
  }
}

export default Checkout;
