import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Members() {
  const {user,setUser} = useContext(UserContext);
  console.log(user.enable);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
   fetchData()
  }, []);
  let fetchData = async () =>{
    try{
      setLoading(true)
      const getUsers = await axios.get("https://6374714408104a9c5f8031bc.mockapi.io/Member")
      setUsers(getUsers.data)
      setLoading(false)
    }
    catch (error){
      alert("Error")
    }
  }

  let deleteUser = async (userId) =>{
    try{
      setLoading(true)
      const user = await axios.delete(`https://6374714408104a9c5f8031bc.mockapi.io/Member/${userId}`)
     alert("User Deleted Successfully")
     fetchData()
     setLoading(false)
    }
    catch (error){
      alert("User Can't Deleted")
    }
  }
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Members</h1>
        {user.enable ?
        <Link
          to={"/portal/member/create"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Member
        </Link> : null}
      </div>

      { isLoading ? 
      <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
      </div> :
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">members Data</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
               
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Book_id</th>
                  <th>Issue_date</th>
                  <th>Return_date</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tfoot>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Book_id</th>
                  <th>Issue_date</th>
                  <th>Return_date</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                users.map((user1) => {
                  return <tr>
                    <td>{user1.id}</td>
                    <td>{user1.name}</td>
                    <td>{user1.email}</td>
                    <td>{user1.password}</td>
                    <td>{user1.phone}</td>
                    <td>{user1.gender}</td>
                    <td>{user1.book_id}</td>
                    <td>{user1.issue_date}</td>
                    <td>{user1.return_date}</td>
                    <td>
                      <Link to={`/portal/member/edit/${user1.id}`} className ="btn btn-warning m-1">
                        Edit
                      </Link>
                      <button onClick={() => deleteUser(user1.id)} className ="btn btn-danger m-1">
                        Delete
                      </button>
                       </td>
                       
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

export default Members