import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toggleTask, deleteTask } from '../redux/AddSlice';

function List() {
    const tasks = useSelector((state) => state.add.tasks);
    const dispatch = useDispatch();

    return (
        <div className='mt-7 mx-14 bg-gray-200 h-screen flex flex-col justify-items-start rounded-lg'>
            {tasks.map((item) => (
                <div key={item.id} className='mx-4 bg-white mt-4 rounded-lg p-4 flex justify-between'>
                    <div className='flex flex-row'>
                        <input 
                            type='checkbox' 
                            className='mr-5 mt-2.5 w-8 h-8'
                            checked={item.done}
                            onChange={() => dispatch(toggleTask(item.id))}
                        />
                        <div className='flex flex-col'>
                            <span className={`size-9 w-96 h-7 font-bold ${item.done ? 'line-through' : '' } `}>
                                {item.title}
                            </span>
                            <div>
                                <span className='text-gray-500 ml-1'>{item.date},</span>
                                <span className='text-gray-500 ml-1'>{item.time}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button 
                            className='mt-2'
                            onClick={() => dispatch(deleteTask(item.id))}
                        >
                            <FontAwesomeIcon icon={faTrash} className='w-14 h-7 text-red-700' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;
