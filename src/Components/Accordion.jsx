import { useState } from "react";

const AccordionItem = ({ key, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    
  
    return (
      <div className="border-b border-gray-300 mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        >
          <h3 className="text-2xl font-bold text-gray-400">{title}</h3>
          <span className="text-gray-400">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div className="p-4 text-gray-500 transition-all duration-300 text-[24px]">
            {content}
          </div>
        )}

        
      </div>
    );
  };

  export default AccordionItem;