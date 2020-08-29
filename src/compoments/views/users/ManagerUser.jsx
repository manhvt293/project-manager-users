import React, { Component } from 'react';
import Template from './Template';
import axios from 'axios';

class ManagerUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataUser:[],
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        axios({
            method: 'get',
            url: 'https://5f498da68e271c001650cb17.mockapi.io/api/v1/users',
            data:null
          })
            .then(function (response) {
                console.log(response.data);
                this.setState({
                    dataUser:response.data
                });
            })
            .catch(function (error) {
                console.log(error);
              });      
    }
    
    getData=()=>{ 
        if(this.state.dataUser){
            this.state.dataUser.map((value,key)=>{
                return(
                <Template 
                    key={key}
                    email={value.email}
                    username={value.username}
                />
                )
            })
        }      
    }
    
    render() {
      var {dataUser} = this.state;
      console.log(dataUser);
        return (
            <div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                      <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                      </form>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="page-header">
                    <h3>
                      Manager User
                    </h3>
                  </div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                       {this.getData()}
                    </tbody>
                  </table>
                </div>
                <div className="col-4">
                  <div className="page-header">
                    <h3>
                      Add New User
                    </h3>
                  </div>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ManagerUser;