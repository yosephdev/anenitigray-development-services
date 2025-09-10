import React from 'react';

interface ImageShowcaseProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: string;
  description?: string;
  className?: string;
}

const ImageShowcase: React.FC<ImageShowcaseProps> = ({ 
  images, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`py-12 ${className}`}>
      {(title || description) && (
        <div className="text-center mb-8">
          {title && (
            <h3 className="text-2xl font-bold text-tigray-dark mb-4">{title}</h3>
          )}
          {description && (
            <p className="text-tigray-dark/70 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            {image.caption && (
              <p className="text-sm text-tigray-dark/60 mt-2 text-center">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowcase;
