import React from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';

export interface Animal {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'rabbit' | 'bird';
  breed: string;
  age: string;
  location: string;
  image: string;
  description: string;
  health: string;
  personality: string[];
  shelter: string;
}

interface AnimalCardProps {
  animal: Animal;
  onViewDetails: (animalId: string) => void;
  className?: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onViewDetails, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
            {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{animal.name}</h3>
          <span className="text-sm text-gray-500">{animal.age}</span>
        </div>
        
        <p className="text-gray-600 mb-2">{animal.breed}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{animal.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{animal.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {animal.personality.slice(0, 3).map((trait, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {trait}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => onViewDetails(animal.id)}
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;