import React from 'react';

const AllTasks = ({ task }) => {
  const { tasksText, date } = task;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p className='text-2xl'>{tasksText}</p>
          <p className='text-1xl'>{date}</p>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Remember me</span>
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            </label>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllTasks;