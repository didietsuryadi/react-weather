import React from 'react';
import './table.css'

const Table = (props) => (
  <table>
    <tr>
      <th>{props.city}</th>
      <th>Temperature</th>
      <th>Variance</th>
    </tr>
    {props.data.map((v,i)=>{
      let format = new Date(0)
      format.setUTCSeconds(v.dt)
      let date = JSON.stringify(format).slice(1, 11)
      return(
        <tr key={i}>
          <td>{date}</td>
          <td>{v.temp.day.toFixed(0)}C</td>
          <td>{(v.temp.max-v.temp.min).toFixed(2)}C</td>
        </tr>
    )})}
  </table>
)

export default Table;
