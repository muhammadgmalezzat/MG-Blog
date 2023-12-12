import React,{useState} from 'react'
import CategoryButton from './CategoryButton';
type Category = {
  id: number
  name: string
}
const Categories = ({
    allCategories,
}: {
    allCategories: Category[];
}) => {
    
    //const [categories, setCategories] = useState(allCategories);
    const clearAllActive = allCategories.length > 0;

    //const categories = allCategories.map(category => category.name);
    //console.log(categories)
    return (
        <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="flex items-center">
                <h2 className="text-xl font-bold">Search by topics</h2>
                <button
                    //onClick={handleClearAll}
                    className={`relative -right-10 text-xs ${!clearAllActive &&
                        'pointer-events-none text-gray-300 dark:text-gray-600'
                        }`}
                >
                    Clear All
                </button>
            </div>
            <div className="flex min-h-[56px] w-[90vw] max-w-[36rem] flex-wrap justify-start gap-y-[0.3rem]">
                {allCategories.map((category) => (
                    //console.log(category)
                    <CategoryButton key={category.id} category={category.name} />
                ))}
            </div>
        </div>
    )
};

export default Categories