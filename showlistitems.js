import Axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';



export default class ShowListItems extends React.Component{

  constructor(){
    super()
    this.state={list:[]
  }}
  componentDidMount(){
    Axios.get("http://localhost:2000/listitems").then(res =>{console.log(res.data)
  this.setState({list:res.data.listitems})
  })
  }
  deleteListitems = (tid) => {
    Axios.delete('http://localhost:2000/listitems/'+ tid)
    .then((res) => {
        console.log('list successfully deleted!')
         alert('Deleted succesfully')
        this.setState({
          listitems: this.state.listitems.filter(user => user.tid !== tid)
        })

    }).catch((error) => {
        console.log(error)
    })
}
    render(){
        return(
            <div>
              <Navbar />
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
                    <Link class="navbar-brand" to="#"><b>List</b></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="#">ListItems</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="#"></Link>
                        </li>
                        </ul>
                        
                    </div>
                </nav>  
                </div>
<div className="container mt-5">
<h1><td><Link to="/addListitems"><button type="button" class="btn btn-success">Add</button></Link></td></h1>

<table class="table table-hover text-center bordered">
              <thead class="thead-inverse">
                <tr>
              
                  <th>todo Name</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.listitems.map(listitems =>{
                    return(

                      <tr>
                    <td scope="row">{listitems.tname}</td>
                    
                    
                    <td><Link onClick={() => this.deleteListitems(listitems.tid)}><button type="button" className="btn btn-dark">Delete</button></Link></td>

                  </tr>
                    )
                  })}
                </tbody>

            </table>
</div>
            
            </div>
        )
    }
}
