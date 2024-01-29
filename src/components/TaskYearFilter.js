import React, { useState } from 'react';
import './TaskYearFilter.css';

const TaskYearFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('');

    const yearChangeHandler = (event) => {
        const year = event.target.value;
        setSelectedYear(year);
        props.onFilterChange(year); // Notify parent component about the selected year
    };

    return (
        <div className='filter'>
            <div className='tasks-filter'>
                <label>Filter by year</label>
                <select className="Select" onChange={yearChangeHandler}>
                    <option value=''>All</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                    <option value='2026'>2026</option>
                </select>
            </div>
        </div>
    );
};

export default TaskYearFilter;