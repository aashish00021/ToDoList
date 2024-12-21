import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const items = [
    {
        id: 1,
        title: 'Create a react project',
        date: '21/12/2024',
        time: '2:20 AM',
    },
    {
        id: 2,
        title: 'Write a blog post',
        date: '22/12/2024',
        time: '1:20 PM',
    },
    {
        id: 3,
        title: 'Learn about redux',
        date: '23/12/2024',
        time: '2:20 PM',
    }
];

function List() {
  return (
    <div className='mt-7 mx-14 bg-gray-200 h-screen flex flex-col justify-items-start rounded-lg'>
        {items.map((item) => (
            <div key={item.id} className='mx-4 bg-white mt-4 rounded-lg p-4 flex justify-between'>
                <div className='flex flex-row'>
                    <input type='checkbox' className='mr-5 mt-2.5 w-8 h-8'/>
                    <div className='flex flex-col'>
                        <span className='size-9 w-96 h-7 font-bold'>{item.title}</span>
                        <div>
                            <span className='text-gray-500 ml-1'>{item.date}</span>
                            <span className='text-gray-500 ml-1'>{item.time}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='mt-2'>
                        <FontAwesomeIcon icon={faTrash} className='w-14 h-7 text-red-700' />
                    </button>
                </div>
            </div>
        ))}
    </div>
  );
}

export default List;
