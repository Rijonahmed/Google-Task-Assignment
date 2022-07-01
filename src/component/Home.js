import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTasks from './AllTasks';

const Home = () => {
  const date = new Date();
  const formattedDate = format(date, 'PP')
  const [isReload, setIsReload] = useState(true);







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
        setIsReload(!isReload)
        console.log(data);
      })


  }

  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))


  }, [isReload])




  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <h1 className='text-3xl font-bold text-center my-12 px-5'>Please Enter Your Task...</h1>
        <div class="card-body ">
          <form onSubmit={handleTaskSubmit}>
            <textarea name='tasks' className="textarea textarea-bordered text-2xl lg:w-8/12 " placeholder="Type Your Tasks" required></textarea>
            <br />
            <input type="submit" value="Submit" className="btn btn-outline-primary lg:w-8/12" />

          </form>
        </div>
      </div>




      <div className='my-5'>
        <h1>TO DO component</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
            tasks.map(task => <AllTasks
              key={task._id}
              task={task}
            ></AllTasks>)
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;