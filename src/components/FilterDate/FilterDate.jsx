import { DateRangePicker, SingleDatePicker } from "react-dates";
import { useState } from "react";
import "react-dates/lib/css/_datepicker.css";
import 'react-dates/initialize'; 
import "./FilterDate.css";

const FilterDate = ({filter, selectFilterDate, indexfiltre}) => {
  const oneElementObj = filter[0].item.one;
  
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();

  const [date, setDate] = useState();
  const [focusedSingleInput, setFocusedSingleInput] = useState();

  const getDDMMYYYY = (msec) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const d = new Date(Number(msec));
    return d.toLocaleDateString("ru", options).slice(0);
  };
  
    return (
      <div className="item">
        {oneElementObj != null
        ? <DateRangePicker
            isOutsideRange= {()=> false }
            startDate={startDate}
            startDateId="start-date"
            endDate={endDate}
            endDateId="end-date"
            onDatesChange={({ startDate, endDate }) => {              
              setStartDate(startDate);
              setEndDate(endDate);
              selectFilterDate({name:"text", value: {textDateOne: getDDMMYYYY(startDate),textDateTwo: getDDMMYYYY(endDate)}}, indexfiltre)            
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            numberOfMonths={1}/>
        : <SingleDatePicker
            date={date}
            onDateChange={( date ) => {
              setDate(date);              
              selectFilterDate({name:"text", value: getDDMMYYYY(date)}, indexfiltre)            
            }}
            focused={focusedSingleInput}
            onFocusChange={(focusedSingleInput) => setFocusedSingleInput(focusedSingleInput)}
            id="your_unique_id"
            numberOfMonths={1}/>
        }
      </div>
  );
}

export default FilterDate;
