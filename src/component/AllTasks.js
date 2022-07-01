import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllTasks = ({ task }) => {
  const { _id, tasksText, date } = task;
  const navigate = useNavigate();
  const handleUpdate = id => {
    navigate('/update/' + id)

  }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p className='text-2xl'>{tasksText}</p>
          <p>{date}</p>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Completed</span>
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            </label>
          </div>
          <div class="card-actions justify-end">
            <button onClick={() => handleUpdate(_id)} class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllTasks;