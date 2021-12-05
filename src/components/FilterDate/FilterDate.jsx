import {ReactComponent as Arrow} from '../../img/arrow.svg';
import useToggle from 'react-use-toggle';
import { DateRangePicker, SingleDatePicker } from "react-dates";
import { useState } from "react";
import "react-dates/lib/css/_datepicker.css";
import 'react-dates/initialize'; 
import "./FilterDate.css";
import { format } from "date-fns";

const FilterDate = ({items, header, placeholder}) => {
  const [visiblePopup, toggleVisiblePopup] = useToggle(false);


  
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();

  return (

      <div className="item">
        <div className="itemHeader">          
          <Arrow className={visiblePopup ? ["arrow", "rotated"].join(' '): "arrow"}/>
          <p onClick={toggleVisiblePopup}>{header}</p>
        </div>
        {visiblePopup ? 
          <div className="itemToggle">
            <div className="itemToggleHeader">
              <p>Conditions</p>
              <ul>              
                {items && 
                  items.map((name, index) =>(<li key={`${name}, ${index}`}>{name.name}</li>))}
              </ul>
            </div>
            <SingleDatePicker
              date={startDate} // momentPropTypes.momentObj or null
              onDateChange={setStartDate} // PropTypes.func.isRequired
              focused={focusedInput} // PropTypes.bool
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired
              id="your_unique_id" // PropTypes.string.isRequired,
              numberOfMonths={1}
            />
            {/* <DateRangePicker
              isOutsideRange= {()=> false }
              startDate={startDate}
              startDateId="start-date"
              endDate={endDate}
              endDateId="end-date"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              numberOfMonths={1}
          /> */}
          </div>
          : null
        }
      </div>

  );
}

export default FilterDate;
