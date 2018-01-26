import React, { Component } from 'react';
import { observable, computed ,action,autorun,useStrict} from "mobx";
import {observer} from 'mobx-react';




//useStrict(false);






//@observer
class Add extends Component {

    value=observable(0);

    inc() {
        this.value.set(this.value.get()+1);
    }

    dec() {
        this.value.set(this.value.get()-1);
    }
    render(){
       // console.log(1);
        return <div> <h1>{this.value.get()}</h1>

            <button onClick={this.dec.bind(this)}>-</button>
            <button onClick={this.inc.bind(this)}>+</button>
            </div>
    }
}

export default observer(Add);
