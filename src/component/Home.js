import React, { useState } from 'react';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const date = new Date();
  const formattedDate = format(date, 'PP')

  const handleTaskSubmit = e => {
    e.preventDefault();
    const tasksText = e.target.tasks.value;
    const tasks = {
      tasksText,
      date: formattedDate

    }
    console.log(tasks)

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(tasks)

    })
      .then(res => res.json())
      .then(data => {
        e.target.reset();
        toast.success('Tasks inserted success');
        console.log(data);
      })


  }
  return (
    <div>
      <h1>this is home</h1>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <h1 className='text-3xl font-bold text-center my-12 px-5'>Please Enter Your Task...</h1>
        <div class="card-body ">
          <form onSubmit={handleTaskSubmit}>
            <textarea name='tasks' className="textarea textarea-bordered text-2xl lg:w-8/12 " placeholder="Type Your Tasks" required></textarea>
            <input type="submit" value="Submit" className="btn btn-accent w-full max-w-xs " />
          </form>


        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;