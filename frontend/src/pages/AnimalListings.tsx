import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Page } from '../App';
import AnimalCard, { Animal } from '../components/AnimalCard';

interface AnimalListingsProps {
  navigateTo: (page: Page, animalId?: string) => void;
}

const AnimalListings: React.FC<AnimalListingsProps> = ({ navigateTo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Sample animals data
  const allAnimals: Animal[] = [
    {
      id: '1',
      name: 'Luna',
      type: 'dog',
      breed: 'Golden Retriever Mix',
      age: '2 years',
      location: 'Downtown Shelter',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Luna is a gentle, loving dog who adores children and other pets.',
      health: 'Excellent',
      personality: ['Friendly', 'Playful', 'Gentle'],
      shelter: 'Downtown Animal Shelter'
    },
    {
      id: '2',
      name: 'Whiskers',
      type: 'cat',
      breed: 'Maine Coon',
      age: '3 years',
      location: 'Eastside Rescue',
      image: 'https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Whiskers is an independent yet affectionate cat who loves sunny spots.',
      health: 'Good',
      personality: ['Independent', 'Calm', 'Affectionate'],
      shelter: 'Eastside Cat Rescue'
    },
    {
      id: '3',
      name: 'Buddy',
      type: 'dog',
      breed: 'Labrador Mix',
      age: '1 year',
      location: 'Westside Sanctuary',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Buddy is an energetic puppy who loves to play fetch and go on adventures.',
      health: 'Excellent',
      personality: ['Energetic', 'Loyal', 'Trainable'],
      shelter: 'Westside Animal Sanctuary'
    },
    {
      id: '4',
      name: 'Mittens',
      type: 'cat',
      breed: 'Domestic Shorthair',
      age: '5 years',
      location: 'Downtown Shelter',
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Mittens is a calm, senior cat who loves quiet companionship.',
      health: 'Good',
      personality: ['Calm', 'Quiet', 'Loving'],
      shelter: 'Downtown Animal Shelter'
    },
    {
      id: '5',
      name: 'Rocky',
      type: 'dog',
      breed: 'German Shepherd Mix',
      age: '4 years',
      location: 'Northside Haven',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Rocky is a loyal, protective dog who would make an excellent guard dog.',
      health: 'Excellent',
      personality: ['Loyal', 'Protective', 'Intelligent'],
      shelter: 'Northside Pet Haven'
    },
    {
      id: '6',
      name: 'Snowball',
      type: 'rabbit',
      breed: 'Holland Lop',
      age: '2 years',
      location: 'Small Pets Rescue',
      image: 'https://images.pexels.com/photos/7210474/pexels-photo-7210474.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Snowball is a gentle rabbit who enjoys fresh vegetables and quiet time.',
      health: 'Excellent',
      personality: ['Gentle', 'Quiet', 'Sweet'],
      shelter: 'Small Pets Rescue Center'
    }
  ];

  // Filter animals based on search and filters
  const filteredAnimals = allAnimals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || animal.type === selectedType;
    const matchesAge = selectedAge === 'all' || 
                      (selectedAge === 'young' && (animal.age.includes('1 year') || animal.age.includes('2 year'))) ||
                      (selectedAge === 'adult' && (animal.age.includes('3 year') || animal.age.includes('4 year'))) ||
                      (selectedAge === 'senior' && animal.age.includes('5 year'));
    const matchesLocation = selectedLocation === 'all' || animal.location === selectedLocation;

    return matchesSearch && matchesType && matchesAge && matchesLocation;
  });

  const locations = Array.from(new Set(allAnimals.map(animal => animal.location)));

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our wonderful animals waiting for their forever homes.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
              <option value="rabbit">Rabbits</option>
              <option value="bird">Birds</option>
            </select>

            {/* Age Filter */}
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Ages</option>
              <option value="young">Young (1-2 years)</option>
              <option value="adult">Adult (3-4 years)</option>
              <option value="senior">Senior (5+ years)</option>
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredAnimals.length} of {allAnimals.length} animals
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Sort by: Newest First</span>
          </div>
        </div>

        {/* Animals Grid */}
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onViewDetails={(id) => navigateTo('animal-detail', id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No animals found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedAge('all');
                setSelectedLocation('all');
              }}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalListings;