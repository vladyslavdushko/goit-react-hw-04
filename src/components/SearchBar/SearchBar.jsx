import { FiSearch } from 'react-icons/fi';
import { useState } from "react";
import style from './SearchBar.module.css'
import toast from 'react-hot-toast';

export const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState('')
  
  const handleChange = (e) =>{
    setQuery(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!query.trim()){
      return toast.error("Enter text")
    }
    onSubmit(query)
    setQuery('')
  }

  return( 
  <>

    <form className={style.form}       
    onSubmit={handleSubmit}
    >

    <button className={style.button} type="submit">
      <FiSearch size="16px" />
    </button>
    <input
      className={style.input}
      placeholder="What do you want to write?"
      name="search"
      
      autoFocus
      value={query}
      onChange={handleChange}
    />

    
  </form>
  </>);
};