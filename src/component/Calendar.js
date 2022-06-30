import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calendar = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 className='text-3xl text-center font-bold'>Calendar</h1>
          <DayPicker
            mode="single"
          />
        </div>

      </div>
    </div>
  );
};

export default Calendar;