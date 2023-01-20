import React from 'react'
import './AddButton.css'
export const AddButton = () => {
	return (
		<>
      <div className="w-auto h-auto mr-6 ">
        <div className="flex-1 h-full">
          <div className="flex items-center justify-center flex-1 h-full p-2 bg-pink-600 text-white  rounded-full
          shadow-[0_4px_0_rgb(0,0,0)] ease-out hover:translate-y-0.5 transition-all">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-[wiggle_1s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-Linecap="round" stroke-Linejoin="round" stroke-width="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
		</>
	 )
}
