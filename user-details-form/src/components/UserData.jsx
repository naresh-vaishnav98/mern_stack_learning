import React from 'react'

export default function UserData({userData}) {
    const DelUser = () => {
        
    }
  return (
    <>
      <div class="table-container">
              <h2>User Data</h2>
              <table id="data-table" border="1">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>Country</th>
                          <th>State</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody id="fetch-data">
                    {
                        userData.map( (v,i) => {
                            return(<tr>
                                <td>{i+1}</td>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.mobileNumber}</td>
                                <td>{v.countryName}</td>
                                <td>{v.stateName}</td>
                                <td>
                                    <button onClick={DelUser}>Delete</button> 
                                    <button>Edit</button>
                                </td>
                            </tr>)
                            
                        } )
                    }
                    
                  </tbody>
              </table>
          </div>
    </>
  )
}
