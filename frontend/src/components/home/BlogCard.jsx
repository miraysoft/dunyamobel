import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ post }) => (
  <Link
    to={post.href}
    className="blog-card group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div className="h-[200px] md:h-[220px] overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <span className="text-xs font-semibold text-[#F7C948] tracking-wider uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {post.category}
      </span>
      <h3 className="text-sm font-semibold text-[#1a1a1a] mt-2 mb-3 line-clamp-2 group-hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {post.title}
      </h3>
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a1a1a] group-hover:text-[#F7C948] transition-colors duration-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Mehr erfahren
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </div>
  </Link>
);

export default BlogCard;
