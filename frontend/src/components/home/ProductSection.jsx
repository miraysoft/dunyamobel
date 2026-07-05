import React, { useRef, useState } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSection = ({ title, products }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const PRODUCT_CARD_WIDTH = 280;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = PRODUCT_CARD_WIDTH;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-lg md:text-xl font-bold text-[#1a1a1a] tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 flex items-center justify-center border transition-all duration-200 ${
                canScrollLeft
                  ? 'border-gray-300 text-[#1a1a1a] hover:border-[#F7C948] hover:text-[#F7C948]'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 flex items-center justify-center border transition-all duration-200 ${
                canScrollRight
                  ? 'border-gray-300 text-[#1a1a1a] hover:border-[#F7C948] hover:text-[#F7C948]'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="product-scroll flex gap-5 overflow-x-auto pb-4"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
