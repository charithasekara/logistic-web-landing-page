"use client";

import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Newsletter Subscription */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-white">Subscribe to our Newsletter</h2>
          <p className="text-gray-400 mb-4 text-sm">
            Get weekly insights, updates, and news directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Tracking</a></li>
            <li><a href="#">Warehousing</a></li>
            <li><a href="#">API Integration</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} TransMax. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><IconBrandFacebook className="w-5 h-5 hover:text-white" /></a>
          <a href="#"><IconBrandTwitter className="w-5 h-5 hover:text-white" /></a>
          <a href="#"><IconBrandLinkedin className="w-5 h-5 hover:text-white" /></a>
          <a href="#"><IconMail className="w-5 h-5 hover:text-white" /></a>
        </div>
      </div>
    </footer>
  );
}
