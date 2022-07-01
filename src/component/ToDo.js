import React, { useEffect, useState } from 'react';
import AllTasks from './AllTasks';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [isReload, setIsReload] = useState(true);

  useEffect(() => {
    fetch('https://obscure-dusk-11801.herokuapp.com/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))


  }, [isReload])
  return (
    <div className='my-5'>
      <h1 className='text-2xl font-bold text-center'>All Task</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {
          tasks.map(task => <AllTasks
            key={task._id}
            task={task}
          ></AllTasks>)
        }
      </div>

    </div>
  );
};

export default ToDo;