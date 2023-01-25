import React from 'react'
import './AddButton.css'

//Needs work to dissapear on mouse leave downwards
export const AddButton = () => {
    const tooltip = document.getElementById("tooltip-bottom" );
    const addBtn = document.getElementById("addBtn" );
    addBtn?.addEventListener("mouseenter", () => {
        console.log("mouse entered")
        tooltip?.classList.remove("hide");
        tooltip?.classList.add(".inline-block" )
    });
    addBtn?.addEventListener("mouseleave", () => {
        console.log("mouse left")
        tooltip?.classList.remove("inline-block" );
        tooltip?.classList.add("hide");
    });
	return (
		<>
      <div  className="w-auto h-auto mr-6" data-tooltip-target="tooltip-right" data-tooltip-placement="right">
        <div className="flex-1 h-full">
          <div  className=" addCircle flex items-center justify-center flex-1 h-full p-2 bg-green-600 text-white  rounded-full
          shadow-[0_4px_0_rgb(0,0,0)] ease-out ">
            <div id="addBtn" className="relative plus-sign">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-[wiggle_1s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
            <div id="tooltip-right" role="tooltip"
                 className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 hide">
                Add blex
            </div>
        </>
	 )
}
