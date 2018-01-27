import React, { Component } from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import {observable,action}  from 'mobx';
import  {observer} from 'mobx-react';
observable( [
    'Sign contract for "What are conference organizers afraid of?"',
    'Lines From Great Russian Literature? Or E-mails From My Boss?',
    'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi',
    'Create 4 Invisible User Experiences you Never Knew About',
    'Read "Following makes Medium better"',
    'Unfollow 5 enemies from twitter2'
]);
export  const tasks_title = observable([]);

@observer
export class Tasks extends Component{
    handleCheckbox = event => {
        const target = event.target;

        this.setState({
            [target.name]: target.checked
        });
    };

    componentWillMount() {
        this.setState({taskstitle: tasks_title});
        tasks_title.clear();
        fetch("http://127.0.0.1/se").then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                   for(let i=0;i<data.length;i++){
                       //添加下标便于删除

                       tasks_title.unshift(data[i]);

                       console.log(tasks_title);
                   }
                })
            }

        });


    }
    @action
    remove(id){
        let index=-1;
        // 循环变量数组找到下标和id
       tasks_title.forEach((obj,dex)=>{
            if(obj.id==id){
                index=dex;
                return;
            }

        });

        if(index!=-1){
            let formData = new FormData();
            formData.append("id",id);

            tasks_title.splice(index, 1);
            fetch("http://127.0.0.1/delete", {
                method : 'POST',
                mode : 'cors',
                body : formData
            }).then(function(res){
                if(res.ok){
                    // insert 返回的是id
                    res.json().then((id)=> {
                        console.log(id);
                    })
                }else{
                    console.log('请求失败');
                }
            }, function(e){
                console.log('请求失败');
                console.error(e);
            })
        }




    }



    render(){


        const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
        const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);

        var tasks = [];
        var number;
        for (var i = 0; i < tasks_title.length; i++) {

            number = "checkbox"+i;
            tasks.push(
                <tr key={i}>
                    <td>
                        <Checkbox
                            number={number}
                            isChecked={ tasks_title[i].complete=="1"? true:false}
                        />
                    </td>
                    <td>{tasks_title[i].text}</td>
                    <td className="td-actions text-right">
                        <OverlayTrigger placement="top" overlay={edit}>
                            <Button
                                bsStyle="info"
                                simple
                                type="button"
                                bsSize="xs"
                            >
                                <i className="fa fa-edit"></i>
                            </Button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={remove}>
                            <Button
                                bsStyle="danger"
                                simple
                                type="button"
                                bsSize="xs"
                                onClick={this.remove.bind(this,tasks_title[i].id)}
                            >
                                <i className="fa fa-times"></i>
                            </Button>
                        </OverlayTrigger>

                    </td>
                </tr>
            );
        }
        return (
            <tbody>
                {tasks}
            </tbody>
        );
    }
}

export default Tasks;
