import React from 'react';
import { Link } from 'react-router-dom';
const Navber = () => {
  const manuItem = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/toDo'>TO DO</Link></li>
    <li><Link to='/calender'>Calender</Link></li>
  </>



  return (

    <div className='sticky top-0 z-10'>
      <div className="navbar bg-slate-500 text-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-500 rounded-box w-52 ">

              {manuItem}

            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to='/' ><span className='text-white-200'>Google Tasks app</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItem}

          </ul>
        </div>


      </div>

    </div >

  );
};

export default Navber;