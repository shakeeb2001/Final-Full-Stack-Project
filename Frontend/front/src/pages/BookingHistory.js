import React from 'react'
import './BookingHistory.css';

export default function BookingHistory() {
  return (
  
     
    <div className='Container'>
      <h1>Booking History</h1>
      <br></br>
      <table className="table table-hover">
  <thead>
    <tr>
      <th className='thead' scope="col">Booking ID</th>
      <th className='thead' scope="col">First</th>
      <th className='thead' scope="col">Last</th>
      <th className='thead' scope="col">Handle</th>
      <th className='thead' scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button className='btn btn-danger'>Delete</button>
      <button className='btn btn-warning'>Edit</button></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button className='btn btn-danger'>Delete</button>
      <button className='btn btn-warning'>Edit</button></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><button className='btn btn-danger'>Delete</button>
      <button className='btn btn-warning'>Edit</button></td>
    </tr>
   
   
  </tbody>
</table>
    </div>

  )
}
