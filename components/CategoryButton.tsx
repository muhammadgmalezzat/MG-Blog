import React from 'react'

const CategoryButton = ({ category }: { category: string }) => {


    const checked = true;
    const active = true;
    
    const handleCategoryClick = (category: string) => () => {
        console.log(category)
    };
    return (
        <button
            onClick={handleCategoryClick(category)}
            className={`my-2 mr-6 cursor-pointer rounded-full px-6 py-2 ring-red-500 transition-all duration-300 hover:ring-offset-4 dark:ring-offset-customGray-dark ${checked
                    ? 'bg-black text-white ring-[3px] ring-offset-4 dark:bg-white dark:text-black'
                    : 'bg-secondary'
                } ${!active && 'pointer-events-none opacity-25'} ${active && 'hover:ring-[3px]'
                }`}
        >
            {category}
        </button>
    )
};

export default CategoryButton