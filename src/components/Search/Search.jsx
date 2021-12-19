import s from "./Search.module.css";
import FilterForm from "../FilterForm/FilterForm";
import { getTable } from "../../redux/table";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import useToggle from 'react-use-toggle';

const Search = () => {
  const dispatch = useDispatch();
  const {filters} = useSelector(state => state.filters);
  const {headers} = useSelector(state => state.headers);
    
  let Search = () => {
    dispatch(getTable(filters))
  }
  const [toggleButton, setToggleButton] = useToggle(false);
 
  return (
    <div className={s.search}>
      {headers && headers.map((header) => (
        <FilterForm filters={filters} setToggleButton={setToggleButton} toggleButton={toggleButton} {...header}/>
      ))}

    {toggleButton ? 
        <div className={s.button}><Button text="Apply" onClick={Search}/>
      </div>
       : null}
    </div>
  );
}

export default Search;
