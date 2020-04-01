import React, { Component } from 'react';
import './Table.css';
import { withRouter } from 'react-router-dom';
class Notificationtable extends React.Component {
    render() {
        const items = this.props.items;
        return (
            <div >
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Phone</th>
                            <th>StartDate</th>
                            <th>EndDate</th>

                        </tr>
                        {items.map(item => {
                            return (
                                <tr key ={item.id}>
                                    <td  > {item.id}</td>
                                    <td contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    >{item.username}</td>

                                    <td contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    >{item.phone}</td>
                                    <td contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    >{item.startDate}</td>
                                    <td contentEditable="true"
                                    suppressContentEditableWarning={true}
                                    >{item.endDate}</td>
                                    <td contentEditable="false"
                                    suppressContentEditableWarning={true}
                                    >{item.action}
                                  {/** <button onClick={this.props.handelDelete.bind(null,item)}>Delete</button> */} 
                                   
                                    </td>
                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Notificationtable) ;