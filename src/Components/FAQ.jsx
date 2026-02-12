import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "How To Use Component",
      answer: "To use this component, you need to import it in your project and use it in your JSX code."
    },
    {
      question: "Are there any other components available",
      answer: "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website"
    },
    {
      question: "Are Components responsive",
      answer: "Yes, all components are responsive and can be used on different screen sizes."
    },
    {
      question: "Can I customize the components",
      answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website."
    }
  ];

  // Fix: Use lowercase 'index' for state to avoid confusion with the 'Index' component/type
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked index is already open, close it (set to null)
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-black text-white"> {/* Added dark background to match your border colors */}
      <div className='grid md:grid-cols-2 grid-cols-1 w-full border-y border-gray-800'>
        <div className='py-16 px-8 border-r border-gray-800'>
          <h1 className='text-3xl font-semibold mb-4'>Asked Questions</h1>
          <p className='text-gray-400 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed odio sit 
            amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
        
        <div className='flex flex-col'>
          <h1 className='py-3 px-4 text-xl font-semibold border-b border-gray-800'>General</h1>
          {faqs.map((faq, index) => (
            <div key={index} className='border-b border-gray-800 cursor-pointer' onClick={() => handleToggle(index)}>
              <div className='flex py-4 px-3 justify-between items-center '>
                <p className="font-medium">{faq.question}</p>
                {activeIndex === index ? (
                  <Minus size={20} className="text-gray-500" />
                ) : (
                  <Plus size={20} className="text-gray-500" />
                )}
              </div>
              
              {/* Answer section - now correctly nested inside the container */}
              {activeIndex === index && (
                <div className="px-3 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
