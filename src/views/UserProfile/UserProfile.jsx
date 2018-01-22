import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card
                                title="add word"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-6" ,  "col-md-6"]}
                                            proprieties = {[
                                              
                                                {
                                                 label : "word",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "word",
                                                 //defaultValue : "michael23"
                                                },
                                                {
                                                 label : "Email address",
                                                 type : "email",
                                                 bsClass : "form-control",
                                                 placeholder : "Email"
                                                }
                                            ]}
                                        />
                                         
                                     
                                      
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                        >
                                          Commit
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                       
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
