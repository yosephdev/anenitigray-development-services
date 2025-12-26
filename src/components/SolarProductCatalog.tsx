import React, { useState } from 'react';
import { Sun, Zap, Battery, Shield } from 'lucide-react';
import { solarProducts } from '../data/productsAndImpact';
import { Button } from './ui/button';

const categoryIcons = {
  lighting: Sun,
  power: Zap,
  cooking: Sun,
  appliance: Battery
};

const SolarProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(solarProducts.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'all' 
    ? solarProducts 
    : solarProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-tigray-dark mb-3">
          Solar Product Catalog
        </h2>
        <p className="text-tigray-dark/70">
          Quality solar solutions for every household need
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? 'bg-solar-yellow text-tigray-dark shadow-md'
                : 'bg-gray-100 text-tigray-dark/70 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const IconComponent = categoryIcons[product.category] || Sun;
          
          return (
            <div 
              key={product.id}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image Placeholder */}
              <div className="bg-gradient-to-br from-solar-yellow/20 to-energy-green/20 h-48 flex items-center justify-center">
                <IconComponent size={64} className="text-energy-green" />
              </div>

              {/* Product Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-tigray-dark">
                    {product.name}
                  </h3>
                  <span className="bg-solar-yellow/20 text-solar-dark text-xs font-semibold px-2 py-1 rounded">
                    {product.capacity}
                  </span>
                </div>

                <p className="text-sm text-tigray-dark/70 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4 space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Shield size={14} className="text-energy-green mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-tigray-dark/70">{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 3 && (
                    <p className="text-xs text-tigray-dark/50 italic">
                      +{product.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-energy-green">
                      ${product.price}
                    </p>
                    <p className="text-xs text-tigray-dark/60">Per unit</p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-solar-yellow hover:bg-solar-gold text-tigray-dark"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-tigray-dark/60">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default SolarProductCatalog;
