import React, { Component } from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import {observable}  from 'mobx';
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
        console.log(event.target);
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

                       tasks_title.unshift( data[i].text);
                   }
                })
            }

        });


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
                            isChecked={i === 1 || i === 2 ? true:false}
                        />
                    </td>
                    <td>{tasks_title[i]}</td>
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
