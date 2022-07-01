import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { updateId } = useParams();
  const [singleTask, setSingleTask] = useState({});
  const [isReload, setIsReload] = useState(true);

  const url = `https://obscure-dusk-11801.herokuapp.com/tasks/${updateId}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleTask(data))

  }, [isReload])

  const handleUpdateTask = e => {
    e.preventDefault();

    const tasksText = e.target.task.value;

    const url = `https://obscure-dusk-11801.herokuapp.com/tasks/${updateId}`

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tasksText })


    })
      .then(res => res.json())
      .then(data => {
        alert('you update seccessfully');
        setIsReload(!isReload)
        e.target.reset();
      })


  }

  return (
    <div>



      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 className='text-2xl my-12'>Tasks : {singleTask.tasksText}</h1>
            <div>
              <form onSubmit={handleUpdateTask}>
                <textarea name='task' className="textarea textarea-bordered text-2xl lg:w-8/12 " placeholder="Update Your Tasks" required></textarea>
                <br />

                <input className='btn btn-outline-primary mt-2' type="submit" value="Update" />
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Update;