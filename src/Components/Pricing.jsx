import React, { useState, useEffect } from "react";
import profil1 from "../assets/Profile/Profile-1.jpg";
import profil2 from "../assets/Profile/Profile-2.jpg";
import profil3 from "../assets/Profile/Profile-3.jpg";
import { ArrowRight, Star } from "lucide-react";

export default function Pricing() {
  const data = [
    {
      img: profil2,
      text: "John Doe",
      Subtext: "@johndoe",
      role: "Founder Of XYZ Company",
      message: "John's testimonial message goes here.",
      rating: 5,
    },
    {
      img: profil1,
      text: "Jane Smith",
      Subtext: "@janesmith",
      role: "CEO Of ABC Company",
      message: "Jane's testimonial message goes here.",
      rating: 4,
    },
    {
      img: profil3,
      text: "Bob Johnson",
      Subtext: "@bobjohnson",
      role: "Product Manager",
      message: "Bob's testimonial message goes here.",
      rating: 5,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  // useEffect
  useEffect(() => {
    if (isManual) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isManual, data.length]);

  //
  const handleClick = (index) => {
    setActiveIndex(index);
    setIsManual(true);
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full border-y border-gray-800">
      {/* LEFT SIDE */}
      <div className="flex flex-col md:border-r border-gray-800">
        {data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className={`flex gap-8 items-center pl-10 py-2 cursor-pointer border-b border-gray-800 
          ${activeIndex === idx ? "bg-gray-900" : ""}`}
          >
            <img
              src={item.img}
              className="h-20 w-20 rounded-full object-cover"
            />

            <div>
              <h1 className="text-xl font-semibold">{item.text}</h1>
              <p className="text-base text-gray-400">{item.Subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-4 h-full pl-10 py-10">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(data[activeIndex].rating)].map((_, i) => (
            <Star key={i} fill="yellow" color="yellow" size={20} />
          ))}
        </div>

        {/* Role */}
        <h1 className="text-xl font-semibold">{data[activeIndex].role}</h1>

        {/* Message */}
        <p className="max-w-md text-gray-400">{data[activeIndex].message}</p>

        <button className="flex items-center gap-2">
          Read More <ArrowRight />
        </button>
      </div>
    </div>
  );
}
