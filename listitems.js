import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Navbar from './navbar';


export default class ListItems extends React.Component {

    render(){
        return(
          <div>
            <Navbar />
              <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white">
                  <Link class="navbar-brand" to="#"><b>To-do</b></Link>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item active">
                        <Link class="nav-link" to="#">ListItems</Link>
                      </li>
                      
                      <li class="nav-item active">
                        <Link class="nav-link" to="/addListItems">addListItems</Link>
                      </li>

                      <li class="nav-item active">
                        <Link class="nav-link" to="/showList">ShowList</Link>
                      </li>
                      
                    </ul>
                  </div>
                </nav>  
                </div>
           
 <table class="table table-hover text-center bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>ListItems</td>
      <td><Link to="/addListItems">addListItems</Link></td>
      
     
    </tr>  
   </tbody>
</table>  
        </div> 

        )
    }
}