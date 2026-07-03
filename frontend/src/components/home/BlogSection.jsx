import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <h2
          className="text-lg md:text-xl font-bold text-[#1a1a1a] tracking-wide mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          UNSERE BLOGARTIKEL
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.href}
              className="blog-card group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-[200px] md:h-[220px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span
                  className="text-xs font-semibold text-[#F7C948] tracking-wider uppercase"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {post.category}
                </span>
                <h3
                  className="text-sm font-semibold text-[#1a1a1a] mt-2 mb-3 line-clamp-2 group-hover:text-[#F7C948] transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {post.title}
                </h3>
                <span
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a1a1a] group-hover:text-[#F7C948] transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Mehr erfahren
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
