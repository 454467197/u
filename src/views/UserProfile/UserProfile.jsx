import React, { Component } from 'react';
import {
    Grid, Row, Col

} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import Tasks from 'components/Tasks/Tasks.jsx'



class UserProfile extends Component {

    cansubmit(){
       fetch("127.0.0.1/task").then((res)=>{
            if(res.ok){
                alert(res.body)
            }

       });
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col  md={4} >
                            <Card
                                title="add word"
                                content={

                                    <form onSubmit={this.cansubmit()}>
                                        <FormInputs
                                            ncols = {["col-md-12" ]}
                                            proprieties = {[

                                                {
                                                // label : "word",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "word",
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
                                          Commit
                                        </Button>

                                        <div className="clearfix"></div>
                                    </form>


                                }
                            />
                        </Col>




                    </Row>



                    <Row>
                        <Col  md={4} >
                            <Card
                                title="Task"
                                content={
                                    <Tasks/>

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
