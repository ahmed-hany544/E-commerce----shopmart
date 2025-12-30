'use client';

import { Store, Target, Heart, Shield, Truck, Headphones, PackageOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section with Background Image */}
        <div className="text-center mb-16 relative rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-black to-black py-20 text-white">
            <h1 className="text-5xl font-bold mb-6">About ShopMart</h1>
            <p className="text-xl max-w-3xl mx-auto">
              ShopMart is your one-stop destination for the latest technology, fashion, and lifestyle products. 
              We are committed to providing quality products with fast shipping and excellent customer service.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-4">
            <Target className="w-12 h-12 text-black" />
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            To make shopping for quality products easy, convenient, and enjoyable for everyone. 
            We believe that everyone deserves access to the latest and best products at competitive prices.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-4">
            <Heart className="w-12 h-12 text-black" />
            Our Values
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <li className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <Shield className="w-10 h-10 text-black mt-1" />
              <div>
                <strong>Quality:</strong> We only sell products that meet our high standards
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <Headphones className="w-10 h-10 text-black mt-1" />
              <div>
                <strong>Customer Service:</strong> Your satisfaction is our priority
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <Store className="w-10 h-10 text-black mt-1" />
              <div>
                <strong>Innovation:</strong> We stay ahead of trends to bring you the latest products
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <Heart className="w-10 h-10 text-black mt-1" />
              <div>
                <strong>Trust:</strong> We build lasting relationships with our customers
              </div>
            </li>
          </ul>
        </div>

        {/* Why Choose ShopMart */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose ShopMart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
              <Truck className="w-20 h-20 text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Fast Shipping</h3>
              <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
              <Shield className="w-20 h-20 text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">All products are carefully selected and tested</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
              <Headphones className="w-20 h-20 text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our customer service team is always here to help</p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
              <PackageOpen className="w-20 h-20 text-black mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free returns policy for your peace of mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}