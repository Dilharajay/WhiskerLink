import React, { useState } from 'react';
import { FileText, AlertCircle, Camera, MapPin, CheckCircle } from 'lucide-react';
import { Page } from '../App';

interface RescueReportProps {
  navigateTo: (page: Page) => void;
}

const RescueReport: React.FC<RescueReportProps> = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    reportType: '',
    animalType: '',
    breed: '',
    size: '',
    color: '',
    condition: '',
    location: '',
    date: '',
    time: '',
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    canTransport: false,
    canFoster: false,
    urgency: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to a server
    console.log('Rescue report submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Report Received Successfully
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for reporting this animal. Your compassion helps save lives.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">What Happens Next?</h3>
              <ul className="text-left text-blue-700 space-y-2">
                <li>• Our rescue team will review your report immediately</li>
                <li>• If urgent, we'll dispatch a team within 1-2 hours</li>
                <li>• You'll receive updates on the animal's status</li>
                <li>• We may contact you if we need additional information</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 mb-6">
              <p className="text-orange-800 text-sm">
                <strong>Emergency?</strong> For immediate life-threatening situations, 
                please call our 24/7 hotline: <span className="font-bold">(555) 911-PETS</span>
              </p>
            </div>
            <button
              onClick={() => navigateTo('home')}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Report a Rescue
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Found an animal in need? Report it here and we'll connect you with local rescue resources.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-red-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Emergency Situations</h3>
              <p className="text-red-700">
                If the animal is in immediate danger or severely injured, 
                please call our 24/7 emergency hotline: <strong>(555) 911-PETS</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Report Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Report Type */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Report Details</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you reporting? *
                </label>
                <select
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select report type</option>
                  <option value="stray">Stray animal found</option>
                  <option value="injured">Injured animal</option>
                  <option value="abandoned">Abandoned animal</option>
                  <option value="abuse">Animal abuse/neglect</option>
                  <option value="lost">Lost pet (mine)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Animal Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Animal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Animal Type *
                  </label>
                  <select
                    name="animalType"
                    value={formData.animalType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select animal type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="bird">Bird</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (under 25 lbs)</option>
                    <option value="medium">Medium (25-60 lbs)</option>
                    <option value="large">Large (60-90 lbs)</option>
                    <option value="xlarge">Extra Large (over 90 lbs)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Breed (if known)
                  </label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    placeholder="e.g. Golden Retriever, Mixed breed"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color/Markings
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    placeholder="e.g. Brown and white, Black with white chest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Condition and Urgency */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Animal Condition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Condition *
                  </label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select condition</option>
                    <option value="healthy">Appears healthy</option>
                    <option value="injured">Injured</option>
                    <option value="sick">Appears sick</option>
                    <option value="malnourished">Malnourished</option>
                    <option value="pregnant">Pregnant</option>
                    <option value="with-babies">With babies/kittens</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency - Life threatening</option>
                    <option value="urgent">Urgent - Needs help today</option>
                    <option value="moderate">Moderate - Needs help soon</option>
                    <option value="low">Low - Routine rescue</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location and Time */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Location & Time</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Found *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Street address, intersection, or detailed location description"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Found *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Found (approximate)
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Describe the situation, animal behavior, surroundings, and any other relevant details..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Helper Options */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">How Can You Help?</h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="canTransport"
                    checked={formData.canTransport}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">I can help transport the animal to a shelter</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="canFoster"
                    checked={formData.canFoster}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">I can provide temporary foster care</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 text-lg"
              >
                Submit Rescue Report
              </button>
              <p className="text-sm text-gray-500 mt-3 text-center">
                We'll respond to your report as quickly as possible based on the urgency level.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RescueReport;