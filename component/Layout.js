import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const Layout = ({ children }) => {
    return (
        
            <div className="dark:bg-black dark:text-white font-play w-screen h-full ">
                <div className='absolute  flex justify-start items-center w-screen h-screen' >
                    <div className="absolute flex  justify-center items-start flex-col w-full h-full gap-2">
                        <div className=''>
                            <img src='../icons/linkedin.png' className='w-12 ' />
                            <img src='../icons/youtube.png' width={50} />
                            <img src='../icons/instagram.png' width={50} />
                        </div>
                    </div>
                </div>
                <div className=' '>
                    {children}
                </div>
            </div>
    );
}

export default Layout;

