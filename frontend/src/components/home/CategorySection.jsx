import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';

const CategorySection = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="category-card group relative block h-[280px] md:h-[350px] lg:h-[400px] rounded-sm overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white text-xl md:text-2xl font-semibold tracking-wide"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {category.name}
                </h3>
                <div className="w-10 h-0.5 bg-[#F7C948] mt-2 group-hover:w-16 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
