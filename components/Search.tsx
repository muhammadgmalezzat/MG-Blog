'use client';

import { BsSearch } from 'react-icons/bs';
interface SearchProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchTerm: string;
}

const Search: React.FC<SearchProps> =({ searchTerm, handleInputChange })=>{

    
    return (
        <div
            className="relative mx-auto w-[80%] max-w-[24rem] "
        >
            <BsSearch className=" absolute left-6 flex h-full items-center text-xl text-gray-400" />
            <input
                type="text"
                placeholder="Search posts"
                onChange={handleInputChange}
                value={searchTerm}
                className={`w-full rounded-full border-[2px] border-gray-300 py-4 pl-14 pr-12 text-xl font-medium hover:textGreen focus:textGreen focus:bodyColorLight focus:outline-none dark:border-gray-400 dark:bodyColorLight dark:focus:bodyColorLight dark:text-gray-400 dark:placeholder-gray-400 dark:bg-bodyColorLight `}
                
            />
            
        </div>
    )
};
export default Search