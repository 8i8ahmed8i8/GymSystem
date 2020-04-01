import React, { Component } from 'react';
import './Table.css';
import { withRouter } from 'react-router-dom';
class Table extends React.Component {
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
                            <th>addrs</th>
                            <th>ph_date</th>

                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>Action</th>

                        </tr>
                        {items.map(item => {
                            return (
                                <tr key ={item.id}>
                                    <td  > {item.id}</td>
                                    <td contentEditable="true"
                                    onInput={e => this.props.handleEdit(e, item.id,"username")}
                                    suppressContentEditableWarning={true}
                                    >{item.username}</td>

                                    <td contentEditable="true"
                                    onInput={e => this.props.handleEdit(e, item.id, "phone")}
                                    suppressContentEditableWarning={true}
                                    >{item.phone}</td>

                                    <td contentEditable="true"
                                    onInput={e => this.props.handleEdit(e, item.id, "addrs")}
                                    suppressContentEditableWarning={true}
                                    >{item.addrs}</td>

                                    <td contentEditable="true"
                                    onInput={e => this.props.handleEdit(e, item.id, "ph_date")}
                                    suppressContentEditableWarning={true}
                                    >{item.ph_date}</td>  





                                    <td contentEditable="true"
                                    onInput={e => this.props.handleEdit(e, item.id, "startDate")}
                                    suppressContentEditableWarning={true}
                                    >{item.startDate}</td>
                                    <td contentEditable="true"
                                    onInput={e => this.props.handleEdit(e, item.id, "endDate")}
                                    suppressContentEditableWarning={true}
                                    >{item.endDate}</td>
                                    <td contentEditable="false"
                                    onInput={e => this.props.handleEdit(e, item.id)}
                                    suppressContentEditableWarning={true}
                                    >{item.action}
                                    <button onClick={this.props.handelDelete.bind(null,item)}>Delete</button>
                                   
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

export default withRouter(Table) ;