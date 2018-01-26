import React, { Component } from 'react';
import {Button,
   Col,

} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';

//import Button from 'elements/CustomButton/CustomButton.jsx';

//import avatar from "assets/img/faces/face-3.jpg";

class Addword extends Component {
    render() {
        return (
            <div>


                        <Col  md={3} >
                            <Card
                                title="add word"
                                content={
                                    <form  >
                                        <FormInputs
                                            ncols = {["col-md-12" ]}
                                            proprieties = {[
                                              
                                                {
                                                // label : "word",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "word2",
                                                    name:"s"
                                                 //defaultValue : "michael23"
                                                }
                                            ]}
                                        />
                                     
                                      
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"

                                        >
                                          Commit3
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>

            </div>
        );
    }
}

export default Addword;
