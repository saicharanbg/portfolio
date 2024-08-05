import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">Sai Charan</h1>
         <p className="text-base md:text-lg mb-1 font-medium">Mechatronics Engineer</p>
         <a className="text-blue-600" href="https://www.linkedin.com/in/saicharanbg/">
            <p className="text-base mb-1 font-medium">LinkedIn</p>
         </a>
         <p className="text-base mb-1 font-medium">bgsaicharan@gmail.com | +91 91502 16471</p>
         <p className="text-base mb-1 font-medium">Chennai, India</p>

      </div>
   )
}

export default Intro;