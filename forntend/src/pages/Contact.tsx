import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { Page } from '../App';

interface ContactProps {
  navigateTo: (page: Page) => void;
}

const Contact: React.FC<ContactProps> = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    shelter: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to a server
    console.log('Contact form submitted:', formData);
  };

  const shelters = [
    {
      name: 'Downtown Animal Shelter',
      address: '123 Main Street, Pet City, PC 12345',
      phone: '(555) 123-4567',
      email: 'adopt@downtownshelter.org',
      hours: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM',
      specialty: 'Dogs & Cats'
    },
    {
      name: 'Eastside Cat Rescue',
      address: '456 Oak Avenue, Pet City, PC 12346',
      phone: '(555) 234-5678',
      email: 'info@eastsidecats.org',
      hours: 'Tue-Sat: 11AM-5PM, Sun: 12PM-4PM',
      specialty: 'Cats Only'
    },
    {
      name: 'Westside Animal Sanctuary',
      address: '789 Pine Road, Pet City, PC 12347',
      phone: '(555) 345-6789',
      email: 'help@westsideanimalrescue.org',
      hours: 'Daily: 10AM-6PM',
      specialty: 'All Animals'
    },
    {
      name: 'Northside Pet Haven',
      address: '321 Elm Street, Pet City, PC 12348',
      phone: '(555) 456-7890',
      email: 'contact@northsidehaven.org',
      hours: 'Mon-Sat: 9AM-7PM, Sun: 11AM-5PM',
      specialty: 'Dogs & Large Animals'
    },
    {
      name: 'Small Pets Rescue Center',
      address: '654 Birch Lane, Pet City, PC 12349',
      phone: '(555) 567-8901',
      email: 'info@smallpetsrescue.org',
      hours: 'Wed-Sun: 10AM-4PM',
      specialty: 'Rabbits, Birds, Small Animals'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Need Immediate Help?</h3>
              <p className="text-blue-700">
                For urgent matters, please call our main line: <strong>(555) 123-PETS</strong>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about adoption, volunteering, or need help? We're here for you and our furry friends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="adoption">Adoption Inquiry</option>
                    <option value="volunteer">Volunteer Information</option>
                    <option value="donation">Donations</option>
                    <option value="lost-pet">Lost Pet</option>
                    <option value="found-pet">Found Pet</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Shelter (if applicable)
                </label>
                <select
                  name="shelter"
                  value={formData.shelter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a shelter</option>
                  {shelters.map((shelter, index) => (
                    <option key={index} value={shelter.name}>
                      {shelter.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Main Line</h3>
                    <p className="text-gray-600">(555) 123-PETS</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM, Weekends 9AM-5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Emergency Hotline</h3>
                    <p className="text-gray-600">(555) 911-PETS</p>
                    <p className="text-sm text-gray-500">24/7 for urgent animal emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">help@whiskerlink.org</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Main Office</h3>
                    <p className="text-gray-600">123 Rescue Ave<br />Pet City, PC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Situations</span>
              </h3>
              <p className="text-red-700 mb-3">
                If you've found an injured animal or there's an immediate threat to an animal's safety:
              </p>
              <div className="bg-red-100 rounded-lg p-4">
                <p className="text-red-800 font-bold text-lg">Call: (555) 911-PETS</p>
                <p className="text-red-700 text-sm">Available 24/7 for true emergencies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shelter Directory */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Partner Shelters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shelters.map((shelter, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{shelter.name}</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{shelter.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{shelter.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{shelter.email}</span>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{shelter.hours}</span>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg px-3 py-2 mt-3">
                    <span className="text-blue-800 text-xs font-medium">{shelter.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;