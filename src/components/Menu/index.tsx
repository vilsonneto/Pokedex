'use client';

import { Dispatch, SetStateAction, ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ children, isOpen, setOpen }: MenuProps) => {
  return (
    <>
      <button className="sm:hidden hover:bg-white hover:text-red focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out rounded p-3" onClick={() => setOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-7 w-7 hover:text-red text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <nav
        className={`sm:flex sm:items-center sm:w-auto ${
          isOpen
            ? "block fixed top-0 left-0 w-full h-full bg-dark-red text-white p-4 z-50"
            : "hidden"
        }`}
      >
        <div className='flex justify-end pt-4 mb-2'>

        <button className="sm:hidden hover:bg-white hover:text-red focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out rounded p-3" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-7 w-7 hover:text-red text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>
        {children}
      </nav>
    </>
  );
};