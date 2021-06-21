import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
    
    const [startDate, setStartDate] = useState(new Date().getTime());
    const [endDate, setEndDate] = useState(new Date().getTime());

    return (
        <div className="row no-gutters" name="options">
            <div className="col-md-auto no-gutters">
                <p className="mb-0">Start Date</p>
                <DatePicker 
                    className="mr-3"
                    selected={startDate}
                    onChange={(date) => setStartDate(date.getTime())}
                />
            </div>
            <div className="col-md-auto no-gutters">
                <p className="mb-0">End Date</p>
                <DatePicker 
                    className="mr-3"
                    selected={endDate}
                    onChange={(date) => setEndDate(date.getTime())}
                />
            </div>
        </div>
    );
}

export default DatePickerComponent;