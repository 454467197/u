import React, { Component } from 'react';
import {
    Grid, Row, Col

} from 'react-bootstrap';
import { observable, computed ,action,autorun} from "mobx";
import {observer} from 'mobx-react';
import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import Tasks from 'components/Tasks/Tasks.jsx'


const  value=observable(0);

autorun(()=>{
    console.log("value"+value.get());
});



@observer
class UserProfile extends Component {
    constructor(prop){
        super(prop);

    }
    @observable price = 0;
    @observable amount = 1;

    @action
    add(){
        value.set(this.amount++);
       console.log( this.amount," this.amount");
    }

    cansubmit(){
       fetch("127.0.0.1/task").then((res)=>{
            if(res.ok){
                alert(res.body)
            }

       });
    }

    render() {

        this.add();
       // _this.amount++;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col  md={4} >
                            <Card
                                title="add word"
                                content={

                                    <form >
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
