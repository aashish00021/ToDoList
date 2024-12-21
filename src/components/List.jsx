import React from 'react';
// import { IconName } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function List() {
  return (
    <div className='mt-7 mx-14 bg-gray-200 h-screen flex flex-col justify-items-start rounded-lg'>
        <div className='mx-4 bg-white mt-4 rounded-lg p-4 flex justify-between'>
            <div className='flex flex-row'>
                <input type='checkbox' className='mr-5 mt-2.5 w-8 h-8'/>
                <div className='flex flex-col'>
                    <span className=' size-9 w-96 h-7 font-bold'>Create a react project</span>
                    <span className='text-gray-500 ml-1'>2:20 AM, 21/12/2024</span>
                </div>
            </div>
            <div>
                <button className='mt-2'><FontAwesomeIcon icon={faTrash} className='w-14 h-7 text-red-700' /></button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default List