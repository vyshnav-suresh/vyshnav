import React from 'react';

const Details = () => {
  return (
    <div className="flex h-3/5 justify-center items-center flex-row sm:flex-col md:flex-col mt-3">
        <div className="w-1/3  flex justify-center items-center">
        <div  >
            <p className="text-6xl">Skills</p>
            <div className="mt-3 w-full">
              <p className="text-3xl mb-3">Frontend</p>
              <ul className="gap-2 grid grid-flow-rows grid-cols-3 sm:grid-col-1 md:grid-cols-2">
                <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Reactjs</p></li>
                <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Nodejs</p></li>
                <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Nextjs</p></li>
                <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Tailwind</p></li>
                <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Bootstrap</p></li>

              </ul>
              <div className="mt-10 " >
                <p className="text-3xl mb-3">Backend</p>
                <ul className="gap-2 grid grid-flow-rows grid-cols-3 md:grid-cols-2">
                  <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Django</p></li>
                  <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Expressjs</p></li>

                </ul>
              </div>
              <div className="mt-10">
                <p className="text-3xl mb-3">Other</p>
                <ul className="gap-2 grid grid-flow-rows grid-cols-3 md:grid-cols-1">
                  <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Adobe Photoshop</p></li>
                  <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">Adobe Illustarator</p></li>
                  <li className="text-lg "><p className="border border-spacing-1 p-1 w-min">REST API</p></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-1/5 flex justify-center items-center pt-5 pb-5  ">
          <div className='text-6xl md:text-4xl'>
            <p className="">V</p>
            <p className="">Y</p>
            <div className="flex gap-7"><p className="">S</p> <p className="">U</p> <p className="">R</p> <p className="">E</p><p className="">S</p>  <p className="">H</p> </div>
            <p className="">H</p>
            <p className="">N</p>
            <p className="">A</p>
            <p className="">V</p>


            <p className="text-3xl">Associate Software Engineer</p>
          </div>
        </div>
    <div className="w-1/3 flex justify-center items-center">

        <div  >
            <p className="text-6xl">Education</p>
            <div className="mt-3 w-full">
              <ul>
                <li className="text-2xl">MCA</li>
                <div className="flex w-full ">
                  <div className="w-1/2"><li>Amal Jyothi College of Engineering</li><li className="text-xs text-gray-500">APJ Abdul Kalam Technological University</li></div>
                  <div className="w-1/2 flex justify-end"><li >8.01 CGPA</li></div>
                </div>
              </ul>
              <ul className="mt-10">
                <li className="text-2xl">BCA</li>
                <div className="flex w-full ">
                  <div className="w-1/2"><li>Christ (Autonomus) College Irinjalakuda</li><li className="text-xs text-gray-500">University of Calicut</li></div>
                  <div className="w-1/2 flex justify-end"><li >6.84 CGPA</li></div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Details;
