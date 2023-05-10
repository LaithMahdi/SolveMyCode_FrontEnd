import React, { Component } from 'react'
import { getUsers } from '../Api/Users';
import {Link} from 'react-router-dom';
class UsersPages extends Component {
  state={
    users:[],
  }
  componentDidMount = ()=>{
    getUsers().then(response =>{
      this.setState({
        users: response.data
      })
    });
  }
  render() {
    return (
      <div className='container'>
         <div>
          <h1 className='mt-3'>Table of users</h1>
          <table className='table mt-2 table-bordered'>
            <tr className='p-2'>
              <th>Id</th><th>Name</th><th colSpan='2'>Action</th>
            </tr>
              {this.state.users.map(e=>
                <tr className='p-2'>
                  <td className='py-2'>{e.id}</td><td className='py-2'>{e.name}</td>
                  <Link to={'/users/'+e.id} className="btn btn-primary  ">View</Link>
                  {/* <td><button onClick={()=>this.viewUser(e)} className="btn btn-outline-primary">View</button></td>
                  <td><button onClick={()=>this.deleteUser(e)} className="btn btn-outline-danger">Delete</button></td> */}
                </tr>
              )}
          </table>
         </div>
      </div>
    )
  }
}

export default UsersPages