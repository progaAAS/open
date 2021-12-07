import s from "./FilterForm.module.css";
import {ReactComponent as Arrow} from '../../img/arrow.svg';
import useToggle from 'react-use-toggle';
import {ReactComponent as Delete} from '../../img/delete.svg';
import { useDispatch } from "react-redux";
import { setAddList, setInfoForm, setItemDeleteText, setSelectItemRemoveList } from "../../redux/filter";

const FilterForm = ({items, header, placeholder, field, filters, setToggleButton,  toggleButton}) => {
  
  let [visiblePopup, toggleVisiblePopup] = useToggle(false);
  let [visibleBtnDelete, setVisibleBtnDelete] = useToggle(false);
  
  let filter = filters && filters.filter(item => item.field == field);
  let indexfiltre = filters && filters.findIndex(item => item.field == field);
  

  const dispatch = useDispatch();

  const Enter = () => {
    if(visiblePopup == false){
      dispatch(setAddList({ field: field, item: "", text: "" }))
      toggleVisiblePopup(true)
    }else{      
      toggleVisiblePopup(true)
      dispatch(setSelectItemRemoveList(field));
    }
  }

  const inputChange = (e, index) => {
    if(!toggleButton){
      setToggleButton(true)
    }
    if(!visibleBtnDelete){
      setVisibleBtnDelete(true);
    }
    const value = e.target.value;
    const name = e.target.name;
    dispatch(setInfoForm({name, value}, index));
  }

  const deleteStrChange = (e, index) => {
    e.preventDefault();
    setVisibleBtnDelete(false)
    dispatch(setItemDeleteText(index))
  }

  const selectItemFilter = (type, index) => {
    dispatch(setInfoForm(type, index))
  }

  return (

      <div className={s.item}>
        <div className={s.itemHeader}>
          <Arrow className={visiblePopup ? [s.arrow, s.rotated].join(' '): s.arrow}/>
          <p onClick={Enter}>{header}</p>
        </div>
        {visiblePopup ? 
          <div className={s.itemToggle}>
            <div className={s.itemToggleHeader}>
              <p>Conditions</p>
              <ul>              
                {items && 
                  items.map((item, index) =>(
                  <li onClick={()=>{selectItemFilter({value:item.type, name: "item"}, indexfiltre)}}key={`${item}, ${index}`}>{item.name}</li>))}
              </ul>
            </div>
            <p className={s.greater}>GREATER</p>
            <div className={s.inputBox}>
              <input name="text" value={filter.text} onChange={(e)=> inputChange(e, indexfiltre)} placeholder={placeholder}/>
              {visibleBtnDelete ? <Delete className={s.delete} onClick={(e)=> deleteStrChange(e, indexfiltre)}/> : null}
            </div>
          </div>
          : null
        }
      </div>

  );
}

export default FilterForm;
