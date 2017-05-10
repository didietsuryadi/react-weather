import React from 'react';

const Selector = (props) => (
  <select onChange={(e)=>props.changeLocation(e.target.value)}>
    <option defaultValue="Jakarta">Jakarta</option>
    <option value="London">London</option>
    <option value="Tokyo">Tokyo</option>
  </select>
)

export default Selector;
