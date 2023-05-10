import React, { Component } from 'react'


class User extends Component {
  state={
    user:{},
  }
  componentDidMount = ()=>{
    // console.log(this.props.match.params.id);
    // getUsers().then(response =>{
        
    // });
  }
  render() {
    return (
      <div className='container'>
         <div>
          <h1 className='mt-3'>User</h1>
          {/* <table className='table mt-2 table-bordered'>
            <tr className='p-2'>
              <th>Id</th><th>Name</th><th colSpan='2'>Action</th>
            </tr>
              {this.state.users.map(e=>
                <tr className='p-2'>
                  <td className='py-2'>{e.id}</td><td className='py-2'>{e.name}</td> */}
                
                  {/* <td><button onClick={()=>this.viewUser(e)} className="btn btn-outline-primary">View</button></td>
                  <td><button onClick={()=>this.deleteUser(e)} className="btn btn-outline-danger">Delete</button></td> */}
                {/* </tr>
              )}
          </table> */}
         </div>
      </div>
    )
  }
}

export default User