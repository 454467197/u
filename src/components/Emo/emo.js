import React, { Component } from 'react';
import   {Popover,Tooltip,Modal,Button,OverlayTrigger,FormControl}     from 'react-bootstrap';
import  {observable}  from 'mobx';
import  {observer} from 'mobx-react';
import Addword from "../../views/UserProfile/addword";

@observer
class Emo extends  Component{


    constructor(prop){
        super(prop)
        console.log(prop);
    }

    showModal=observable(false);



    close() {
        this.showModal.set(false);
    }


    open() {
        this.showModal.set(true);
    }

    render() {
        console.log("----this.showMoadl");
        console.log(this.showModal.get());


        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <div>


                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open.bind(this)}
                >
                    修改
                </Button>

                <Modal show={this.showModal.get()} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>修改标题</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl/>
                        <Button>提交</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>取消</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


export default Emo;