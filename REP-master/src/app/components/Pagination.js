import React from "react";
import { PiCaretLeftThin } from "react-icons/pi";
import { PiCaretRightThin } from "react-icons/pi";

const Pagination = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <ul className="flex items-center -space-x-px h-10 text-base gap-[8px]">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-10 leading-tight text-lightGray bg-white  rounded-[4px]"
          >
            <span className="sr-only">Previous</span>
            <PiCaretLeftThin className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="z-10 flex items-center justify-center px-4 h-10 leading-tight bg-white text-lightPeach hover:bg-lightPeach hover:text-white rounded-[4px]"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="z-10 flex items-center justify-center px-4 h-10 leading-tight bg-white text-lightPeach hover:bg-lightPeach hover:text-white rounded-[4px]"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="z-10 flex items-center justify-center px-4 h-10 leading-tight bg-white text-lightPeach hover:bg-lightPeach hover:text-white rounded-[4px]"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="z-10 flex items-center justify-center px-4 h-10 leading-tight bg-white text-lightPeach hover:bg-lightPeach hover:text-white rounded-[4px]"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-10 leading-tight text-lightGray bg-white  rounded-[4px]"
          >
            <span className="sr-only">Next</span>
            <PiCaretRightThin className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
