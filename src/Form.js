import React, { Component } from 'react';
import './Form.css'
import {withRouter} from 'react-router-dom';
class Form extends React.Component {

    
    render() {
        return (
            <div id="Form">

                <form onSubmit={this.props.handleFormSubmit}

                >
                         
                    <label htmlFor=" username">
                        
          <input id="username" value={this.props.newUsername}
                            type="text" name="username"
                            placeholder="username"
                            onChange={this.props.handleInputChange}
                        />
                    </label>
                    

                    <label htmlFor="phone">
                        
          <input id="phone" value= {this.props.newPhone}
                            type="text" name="phone"
                            placeholder=" phone"
                            onChange={this.props.handleInputChange} />
                    </label>

                    <label htmlFor="addrs">
                        
          <input id="phone" value= {this.props.newaddrs}
                            type="text" name="addrs"
                            placeholder=" addrs"
                            onChange={this.props.handleInputChange} />
                    </label>

                    <label htmlFor="ph_date">
                        
          <input id="phone" value= {this.props.newph_date}
                            type="text" name="ph_date"
                            placeholder=" ph_date"
                            onChange={this.props.handleInputChange} />
                    </label>
                    

                    <label htmlFor="startDate">
                       {  }
          <input id="startDate" value={this.props.newStartDate}
                            type="date"  name="startDate"
                            
                            onChange={this.props.handleInputChange} />
                    </label>
                            
                    <label htmlFor="endDate">
                    {  }
          <input id="endDate" value={this.props.newEndDate}
                            type="date"  name="endDate"
                           
                            onChange={this.props.handleInputChange} />
                    </label>
                    
                    <button className=' button button1' type="submit" value="Submit"
                  //  onClick={this.props.incrementid}

                    >Add Item</button>
             

                </form>

            </div>
        );
    }
}

export default withRouter (Form);