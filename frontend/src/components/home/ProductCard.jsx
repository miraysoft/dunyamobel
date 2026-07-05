import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Phone } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-[220px] md:w-[260px] group">
      <div className="product-card relative h-[280px] md:h-[320px] bg-gray-50 rounded-sm overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-image-primary w-full h-full object-cover"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className="product-image-hover"
          />
        )}
        <div className="quick-view-btn absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-[#1a1a1a] hover:bg-[#F7C948] transition-colors duration-200 shadow-md">
            <Eye size={14} />
            Quick view
          </button>
        </div>
      </div>
      <div className="pt-4">
        <h3
          className="text-sm font-semibold text-[#1a1a1a] mb-1 group-hover:text-[#F7C948] transition-colors duration-200"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {product.category}
        </p>
        <div className="flex items-center gap-2">
          <Link
            to="#"
            className="text-xs font-semibold text-[#1a1a1a] hover:text-[#F7C948] transition-colors underline"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Weiterlesen
          </Link>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <a
            href="https://wa.me/41613837052"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700 transition-colors font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+41613837052"
            className="flex items-center gap-1 text-xs text-[#1a1a1a] hover:text-[#F7C948] transition-colors font-medium"
          >
            <Phone size={12} />
            Anrufen
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
