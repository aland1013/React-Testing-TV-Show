import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const SelectShow = (props) => {
  const [show, setShow] = useState('');

  const handleChange = (e) => {
    setShow(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSelectedShow(show);
  };

  return (
    <>
      <label htmlFor='show'>Select a show:</label>
      <select value={show} onChange={handleChange} name='show' id='show'>
        <option defaultValue='stranger-things'>Stranger Things</option>
        <option value='rick-and-morty'>Rick and Morty</option>
        <option value='breaking-bad'>Breaking Bad</option>
        <option value='the-americans'>The Americans</option>
        <option value='the-wire'>The Wire</option>
      </select>
      <button onClick={handleSubmit}>get show data</button>
    </>
  );
};

export default SelectShow;
