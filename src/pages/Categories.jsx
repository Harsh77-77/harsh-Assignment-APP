import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assume these imports are correct for your project structure
import s2 from "../assets/s2.png";
import loginimg from "../assets/Log in.png";
import img1 from "../assets/image 1.png";

const categories = [
  {
    id: 1,
    title: "Graph Pravesh (गृह प्रवेश)",
    description: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    imageUrl: img1
  },
  {
    id: 2,
    title: "Graph Pravesh (गृह प्रवेश)",
    description: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    imageUrl: img1
  },
  {
    id: 3,
    title: "Graph Pravesh (गृह प्रवेश)",
    description: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    imageUrl: img1
  },
  {
    id: 4,
    title: "Graph Pravesh (गृह प्रवेश)",
    description: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    imageUrl: img1
  },
  {
    id: 5,
    title: "Graph Pravesh (गृह प्रवेश)",
    description: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    imageUrl: img1
  },
  {
    id: 6,
    title: "Graph Pravesh (गृह प्रवेश)",
    description: "The Puja is performed by a Pandit ji by doing Ganesh puja, along with the Navagraha Jaaps.",
    imageUrl: img1
  },

];

export default function Categories() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const toggleCategory = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    // Handle navigation or form submission
    console.log('Selected categories:', selectedCategories);
    navigate('/services');
    // navigate('/next-page');
  };

  return (
    <div className="relative min-h-screen  p-4 pb-20">
      <div className="absolute right-5 top-4">
        <img src={loginimg} alt="Login" className="w-[22px] h-[22px]" />
      </div>
      
      <div className="mt-16 flex items-center justify-center flex-col font-bold font-serif space-y-4">
        <h1 className="text-2xl">Categories</h1>
        <p className="text-xs text-center">Please select all the categories in which you perform the pooja</p>
      </div>
      
      <div className="mt-8 space-y-4 mb-20">
        {categories.map(category => (
          <div
            key={category.id}
            className={` rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out 
              ${selectedCategories.includes(category.id) ? 'border-2 border-red-500' : 'border border-gray-200'}`}
            onClick={() => toggleCategory(category.id)}
          >
            <div className="flex p-4">
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-[98.5px] h-[83px] object-cover rounded-md"
              />
              <div className='mx-[20px] '>
              <div className="ml-4 flex-1">
                <h2 className="text- font-bold">{category.title}</h2>
                <p className="text-sm mt-[10px] text-gray-600">{category.description}</p>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleNext}
        className="fixed bottom-20 left-4 right-4 bg-red-500 text-white py-3 rounded-lg font-semibold"
      >
        Next
      </button>
      
      <div className="fixed right-0 bottom-0 pointer-events-none">
        <img src={s2} alt="Decorative" className="max-w-full h-auto" />
      </div>
    </div>
  );
}