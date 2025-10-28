import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-400 to-green-400 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">WhiskerLink</div>
                <div className="text-sm text-gray-300">Animal Rescue Connect</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting loving hearts with furry souls. We bridge the gap between volunteers, 
              shelters, and families looking to adopt, creating lasting bonds that save lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find Animals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become a Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Report a Rescue</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shelter Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Adoption Process</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">(555) 123-PETS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">help@whiskerlink.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">123 Rescue Ave, Pet City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 WhiskerLink - Animal Rescue Connect. All rights reserved. 
            Made with <span className="text-red-400">❤</span> for our furry friends.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;