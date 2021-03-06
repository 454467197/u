import React, { Component } from 'react';
import { observable, computed ,action,autorun,useStrict} from "mobx";
import {observer} from 'mobx-react';




//useStrict(false);

autorun(()=>{
    console.log("value"+value.get());
});
@observable
const  value=0;

 function inc() {
    value.set(value.get()+1);
}

 function dec() {
    value.set(value.get()-1);
}


@observer
class Add extends Component {

    render(){

        return <div> <h1>{value}</h1>

            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            </div>
    }
}

export default Add;
