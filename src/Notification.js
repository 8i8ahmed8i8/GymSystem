import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Notification.css';
import Notificationtable from './Notificationtable';


class Notifcation extends Component {

  state = {
    id: '',
    username: '',
    phone: '',
    startDate: '',
    endDate: '',
    action: '',
    items: [],
    peaple: []
  }

  api() {
    fetch(`http://localhost:5000/selectenddate`,
      { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((response) => response.json())
      .then((messages) => {
        console.log(this.setState({ peaple: messages["res"] })
        );
      });
  }
  componentDidMount() {
    this.api();
  }
  render() {
    return (
      <div className='notification'>
                            
{/*
 <div>
 {this.state.peaple.map(peapless => (
   <div>
     <div>{peapless.username}</div>
     <div>{peapless.phone}</div>
     <div>{peapless.startDate}</div>
     <div>{peapless.endDate}</div>

   </div>
 ))}
</div> 
*/
}
<Notificationtable
items={this.state.peaple}

/>
          
          
          

     
   </div>


        )
      }
      
      }
export default withRouter(Notifcation) ;