import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/mockData';
import BlogCard from './BlogCard';

const BlogSection = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-[#1a1a1a] tracking-wide mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          UNSERE BLOGARTIKEL
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
