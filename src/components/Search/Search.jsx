import s from "./Search.module.css";
import FilterForm from "../FilterForm/FilterForm";
import FilterDate from "../FilterDate/FilterDate";
import { useState } from "react";
import { Filter, getTable } from "../../redux/table";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import useToggle from 'react-use-toggle';
import { joinFilters } from "../../redux/filter";

const Search = () => {
  const dispatch = useDispatch();
  const {filters} = useSelector(state => state.filters);
  
  
  const itemsENL = [
    { name: 'EQUALS', type: ''},
    { name: 'NOTEQUALS', type: '_ne'},
    { name: 'LESS', type: '_lte'},
  ];

  const itemsECN = [
    { name: 'EQUALS', type: ''},
    { name: 'CONTAIN', type: '_like'},
    { name: 'NOTCONTAIN', type: ''},
  ];

  const itemsEBAB = [
    { name: 'EQUALS', type: ''},
    { name: 'BEFORE', type: '_like'},
    { name: 'AFTER', type: '_like'},
    { name: 'BETWEEN', type: ''},
  ];

    
  let Search = () => {
    dispatch(getTable(filters))
  }
  const [toggleButton, setToggleButton] = useToggle(false);
 
  return (
    <div className={s.search}>
      <FilterForm items={itemsENL} header="ID" placeholder="Only number" field="id" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      <FilterForm items={itemsECN} header="Meter #" placeholder="Meter #" field="meter" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      <FilterForm items={itemsECN} header="Address" placeholder="Address" field="meter" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      <FilterForm items={itemsECN} header="Status" placeholder="Status" field="meter" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      <FilterForm items={itemsECN} header="Owner" placeholder="Owner" field="meter" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      <FilterDate items={itemsEBAB} header="Data Submitted" placeholder="Owner" field="meter" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      <FilterForm items={itemsECN} header="Project ID" placeholder="Project ID" field="meter" filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton}/>
      {toggleButton ? 
        <div className={s.button}><Button text="Apply" onClick={Search}/>
      </div>
       : null}
    </div>
  );
}

export default Search;
