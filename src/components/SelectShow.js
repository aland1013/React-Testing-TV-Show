import React, { useState } from 'react';

const SelectShow = (props) => {
  const [show, setShow] = useState('');

  const handleChange = (e) => {
    setShow(e.target.value);
    props.setSelectedShow(e.target.value);
    props.setSelectedSeason('');
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
    </>
  );
};

export default SelectShow;
