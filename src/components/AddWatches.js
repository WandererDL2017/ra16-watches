import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import WatchesModel from '../models/WatchesModel';

function AddWatches({ handleAdd }) {
 const [form, setForm] = useState({city: '', offset: ''});

 const handleSubmit = evt => {
  evt.preventDefault();
  const watches = new WatchesModel(form.city, form.offset, shortid.generate());
  handleAdd(watches);
  setForm({ city: '', offset: '' });
 };

 const handleChange = evt => {
  const { name, value } = evt.target;
  setForm(prevForm => ({ ...prevForm, [name]: value}));
 };

 return (
  <form className='form' onSubmit={handleSubmit}>
    <label className='name' htmlFor="city">Названи</label>
    <input 
      type='text'
      id='city'
      name='city'
      value={form.city}
      onChange={handleChange}
      placeholder='Астрахань'
      required
    />
    <label className='name' htmlFor="distance">Временная зона</label>
    <input 
      type='number'
      step={1}
      min={-12}
      max={+12}
      name='offset'
      id='offset'
      value={form.offset}
      onChange={handleChange}
      placeholder='4'
      required
    />
    <button className='button' type='submit'>Добавить</button>
  </form>
 );
}

AddWatches.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default AddWatches;