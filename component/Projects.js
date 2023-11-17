import project from '@/utils/data';
import React from 'react';

const Projects = () => {

    return (

        <div className='w-full pl-36  grid grid-cols-5 gap-6 md:grid-cols-1 pt-3'>
            {project.map((item,i)=>(
            <div key={i}>
                <div class="max-w-sm sm:w-40 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 ">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.discription}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div></div>
            ))}
        </div>

    );
}

export default Projects;
