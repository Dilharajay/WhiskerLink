import React from 'react';
import { ArrowRight, Users, Heart, FileText, Star, Award, Shield } from 'lucide-react';
import { Page } from '../App';
import AnimalCard, { Animal } from '../components/AnimalCard';

interface HomeProps {
  navigateTo: (page: Page, animalId?: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  // Sample featured animals data
  const featuredAnimals: Animal[] = [
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
    }
  ];

  const stats = [
    { icon: Heart, label: 'Animals Rescued', value: '2,847' },
    { icon: Users, label: 'Active Volunteers', value: '482' },
    { icon: Award, label: 'Successful Adoptions', value: '1,953' },
    { icon: Shield, label: 'Partner Shelters', value: '27' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Every Pet Deserves a 
                <span className="text-yellow-300"> Forever Home</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                WhiskerLink connects loving families with rescue animals, volunteers with shelters, 
                and communities with hope. Together, we're saving lives one paw at a time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => navigateTo('listings')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Adopt Now</span>
                </button>
                <button
                  onClick={() => navigateTo('volunteer')}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Users className="h-5 w-5" />
                  <span>Volunteer</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy rescued animals"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-gray-800">2,847</div>
                <div className="text-sm text-gray-600">Animals Rescued</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Animals Looking for Love
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet some of our amazing animals who are ready to find their forever families today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
                onViewDetails={(id) => navigateTo('animal-detail', id)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigateTo('listings')}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <span>View All Animals</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-pink-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you want to adopt, volunteer, or report a rescue, 
            every action helps save lives and create happy endings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <button
              onClick={() => navigateTo('listings')}
              className="bg-white text-orange-600 p-6 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <Heart className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Adopt</div>
              <div className="text-sm text-gray-600">Find your perfect companion</div>
            </button>
            
            <button
              onClick={() => navigateTo('volunteer')}
              className="bg-white text-orange-600 p-6 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Volunteer</div>
              <div className="text-sm text-gray-600">Help animals in need</div>
            </button>
            
            <button
              onClick={() => navigateTo('rescue-report')}
              className="bg-white text-orange-600 p-6 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <FileText className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Report</div>
              <div className="text-sm text-gray-600">Report a rescue or lost pet</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;