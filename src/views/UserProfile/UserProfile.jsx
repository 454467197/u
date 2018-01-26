import React, { Component } from 'react';
import {
    Grid, Row, Col

} from 'react-bootstrap';
import { observable, computed ,action} from "mobx";
import {observer} from 'mobx-react';
import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import Tasks,{tasks_title} from 'components/Tasks/Tasks.jsx';
import Add from  './add';
import {postFetch} from "../../components/UT/UT";


const  value=observable(0);




@observer
class UserProfile extends Component {

    input=null;

    //@action
    add(){
        let value=this.input.value;
        this.input.value="";
        if(!value||value.trim().length==0) {
            console.log(value);
            console.log(value.trim().length==0);
            return;
        }




        console.log(value);
        let formData = new FormData();
        formData.append("text",value);
        formData.append("id",1);



        fetch("http://127.0.0.1/insert", {
            method : 'POST',
            mode : 'cors',
            body : formData
        }).then(function(res){
            if(res.ok){
                tasks_title.unshift(value);
            console.log(res);
            }else{
                console.log('请求失败');
            }
        }, function(e){
            console.log('请求失败');
            console.error(e);
        })

       }


    cansubmit(){
       fetch("127.0.0.1/insert").then((res)=>{
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

                                    <form >
                                        <FormInputs

                                            ncols = {["col-md-12" ]}

                                            proprieties = {[

                                                {

                                                // label : "word",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "word",
                                                    inputRef:ref => { this.input = ref; }
                                                 //defaultValue : "michael23"
                                                }
                                            ]}
                                        />


                                            <Button
                                                bsStyle="info"
                                                pullRight
                                                fill
                                                type="submit"
                                                onClick={this.add.bind(this)}
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


                    <Row>
                        <Col  md={4} >
                            <Add/>
                            <Add/>
                            <Add/>
                        </Col>




                    </Row>


                </Grid>

            </div>
        );
    }
}

export default UserProfile;
