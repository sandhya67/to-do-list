import Axios from 'axios';
import React, { Component } from 'react'
import { Navbar } from 'reactstrap';

export default class addListItems extends Component {

    constructor(props) {
        super(props)

        this.onChangeListItemsName = this.onChangeListItemsName.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tname: ''
        }
    }

    onChangeListItemsName(e) {
        this.setState({ tname: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault()

        const listitemsObject = {
            tname: this.state.tname
           
        };

        Axios.post('http://localhost:2000/listitems', listitemsObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ tname: '' })
    }

    render() {
    return (
        <div>
            <Navbar />
        <div>
            <div>
                     <div>
                   
                    <div>
                        <div>
                        <form onSubmit={this.onSubmit}>
                            
                        <div class="form-row">
                            <div class="col">
                            <input type="text" class="form-control"  name="tname" value={this.state.tname} onChange={this.onChangeListItemsName} placeholder="List Name"/>
                            </div>
                            
                        </div> 
                        <button type="submit">submit</button>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}
}
