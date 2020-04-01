import React, { Component } from 'react';
import './Collect.css';
import Table from './Table';
import Form from './Form';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



class Collect extends Component {

  state = {
    id: '',
    username: '',
    phone: '',
    addrs: '',
    ph_date: '',
    startDate: '',
    endDate: '',
    action: '',
    items: [],
    peaple: []
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username);

    let items = [...this.state.items];

    axios.post(`http://localhost:5000/addmember2`, {
      username: this.state.username, phone: this.state.phone,addrs:this.state.addrs ,ph_date:this.state.ph_date ,startDate: this.state.startDate, endDate: this.state.endDate,
    })
      .then(res => {
        this.api();
      })

  };

  handleEdit = (e, id, itemType) =>{
    // console.log(id);
    // console.log(e.currentTarget.textContent);
    // console.log(e.target.value);



     axios.put('http://localhost:5000/update/' + id, {
      type: itemType,
      text: e.currentTarget.textContent
   })
   .then(response => {
     console.log(response);
   //  this.api();
   })
   .catch(error => {
     console.log(error);
   });
  }

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })

  };
  handelDelte = (e) => {

    console.log(e.id);
    axios.delete('http://localhost:5000/delete/' + e.id).then(res => {

      this.api();
    });

  }
  // disableButton = (test) => {
  //   if (test.target.value.length > 0) {
  //     this.setState({ disable: false });
  //   }
  //   else {
  //     this.setState({ disable: true });
  //   }
  //   console.log(test.length)

  // }
  componentWillMount() {
    console.log("Hello");
  }

  api() {
    fetch(`http://localhost:5000/select`,
      { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((response) => response.json())
      .then((messages) => {
        console.log(this.setState({ peaple: messages["res"] })
        );
      });
  }



  componentDidMount() {
    /*
    const url = ("http://localhost:5000/select")
    const response = await fetch(url);
    const data = await response.json();
    this.setState({peaple: data.results});
    console.log(data.results);
    */
    console.log("inside handleGetJson");
    this.api();
    //   fetch(`http://localhost:5000/select`, 
    //   { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } }) 
    //   .then((response) => response.json())
    //    .then((messages) => {console.log( this.setState({peaple:messages["res"] })
    //  );});


  }
  a = function createBlogPost(data) {
    return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
      method: 'POST',
      mode: 'CORS',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
    }).catch(err => err);
  }


  render() {

    return (
      <div className="Collect">
        <div>



          {/*<div>
            {this.state.peaple.map(person =>(
              <div>
              <div>{person.name.title}</div>
              <div>{person.name.frist}</div>
              <div>{person.name.last}</div>
              <img src={person.picture.large}/>
              </div>
            ))}
          </div> */}
          <div>

          </div>






          <Form
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newPhone={this.state.phone}
            newStartDate={this.state.startDate}
            newEndDate={this.state.endDate}
            newaddrs={this.state.addrs}
            newph_date={this.state.ph_date}
          />

          <Table


            items={this.state.peaple}
            handelDelete={this.handelDelte}
            handleEdit= {this.handleEdit} />
        </div>
      </div>
    );
  }
}

export default withRouter(Collect);
