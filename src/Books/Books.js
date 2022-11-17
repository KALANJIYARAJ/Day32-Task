import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Books() {
  const {user,setUser} = useContext(UserContext);
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
     fetchData()
    }, []);
    let fetchData = async () =>{
      try{
        setLoading(true)
        const getUsers = await axios.get("https://6374714408104a9c5f8031bc.mockapi.io/Books")
        setUsers(getUsers.data)
        setLoading(false)
      }
      catch (error){
        alert("Error")
      }
    }
  
    let deleteUser = async (user1Id) =>{
      try{
        setLoading(true)
        const user = await axios.delete(`https://6374714408104a9c5f8031bc.mockapi.io/Books/${user1Id}`)
       alert("User Deleted Successfully")
       fetchData()
       setLoading(false)
      }
      catch (error){
        alert("User Can't Deleted")
      }
    }
    return (
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-2 text-gray-800">Books</h1>
          {user.enable ?
          <Link
            to={"/portal/book/create"}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Create Book
          </Link> : null}
        </div>
  
        { isLoading ? 
        <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
        </div> :
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Book Datas</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                 
                <thead>
                  <tr>
                  <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Availability</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Availability</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {
                  users.map((user1) => {
                    return <tr>
                      <td>{user1.id}</td>
                      <td>{user1.title}</td>
                      <td>{user1.author}</td>
                      <td>{user1.genre}</td>
                      <td>{`${user1.availability}`}</td>
                      {user.enable?
                      <td>
                        <Link to={`/portal/book/edit/${user1.id}`} className ="btn btn-warning m-1">
                          Edit
                        </Link>
                        <button onClick={() => deleteUser(user1.id)} className ="btn btn-danger m-1">
                          Delete
                        </button>
                         </td> :
                          <td>
                            <Link to={`/portal/getbook/${user1.id}`} className ="btn btn-success m-1 ">
                          Get Book
                        </Link>
                        </td> }
                         
                      </tr>
                  })
                  }
                </tbody>
              </table>
            </div>
          </div>
          </div>}
      </div>
    );
}

export default Books