import React from 'react';
import { ArrowLeft, Heart, MapPin, Clock, Shield, Phone, Mail, Share2 } from 'lucide-react';
import { Page } from '../App';
import { Animal } from '../components/AnimalCard';

interface AnimalDetailProps {
  animalId: string | null;
  navigateTo: (page: Page) => void;
}

const AnimalDetail: React.FC<AnimalDetailProps> = ({ animalId, navigateTo }) => {
  // Sample animal data - in a real app, this would be fetched based on animalId
  const animal: Animal = {
    id: '1',
    name: 'Luna',
    type: 'dog',
    breed: 'Golden Retriever Mix',
    age: '2 years',
    location: 'Downtown Shelter',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luna is a gentle, loving dog who adores children and other pets. She has been with us for 3 months and is ready to find her forever family. Luna loves long walks, playing fetch, and cuddling on the couch. She is house-trained and knows basic commands.',
    health: 'Excellent - Vaccinated, Spayed, Microchipped',
    personality: ['Friendly', 'Playful', 'Gentle', 'Good with kids', 'Good with pets'],
    shelter: 'Downtown Animal Shelter'
  };

  const shelterInfo = {
    name: 'Downtown Animal Shelter',
    address: '123 Main Street, Pet City, PC 12345',
    phone: '(555) 123-4567',
    email: 'adopt@downtownshelter.org',
    hours: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM'
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigateTo('listings')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Animals</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors">
                  <Share2 className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-3 gap-2">
              <img
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt={`${animal.name} photo 2`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt={`${animal.name} photo 3`}
                className="w-full h-24 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt={`${animal.name} photo 4`}
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-4xl font-bold text-gray-800">{animal.name}</h1>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
                </span>
              </div>
              <p className="text-xl text-gray-600 mb-4">{animal.breed}</p>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{animal.age}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5" />
                  <span>{animal.location}</span>
                </div>
              </div>
            </div>

            {/* Personality Traits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personality</h3>
              <div className="flex flex-wrap gap-2">
                {animal.personality.map((trait, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">About {animal.name}</h3>
              <p className="text-gray-600 leading-relaxed">{animal.description}</p>
            </div>

            {/* Health Status */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span>Health Status</span>
              </h3>
              <p className="text-gray-600">{animal.health}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 text-lg">
                Start Adoption Process
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="w-full border-2 border-blue-500 text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Contact Shelter
              </button>
            </div>
          </div>
        </div>

        {/* Shelter Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shelter Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{shelterInfo.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-600">{shelterInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{shelterInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">{shelterInfo.email}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Visiting Hours</h3>
              <div className="text-gray-600">
                <p>{shelterInfo.hours}</p>
                <p className="mt-2 text-sm text-orange-600">
                  Please call ahead to schedule a meet-and-greet with {animal.name}!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Animals */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Animals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder for similar animals */}
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
              <span className="text-gray-500">Similar Animal 1</span>
            </div>
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
              <span className="text-gray-500">Similar Animal 2</span>
            </div>
            <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
              <span className="text-gray-500">Similar Animal 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;