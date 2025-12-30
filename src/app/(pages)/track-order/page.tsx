'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Truck, Package, Search, HelpCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [tracked, setTracked] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim() || !email.trim()) {
      toast.error('Please enter both order number and email');
      return;
    }

    setIsTracking(true);
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
      setTracked(true);
      toast.success('Order found! Showing status below.');
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Truck className="w-10 h-10 text-black" />
            Track Your Order
          </h1>
          <p className="text-lg text-gray-600">Enter your order details to check the current status</p>
        </div>

        {/* Form Card */}
        <Card className="p-8 mb-12 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Enter Your Order Information</h2>
          <form onSubmit={handleTrack} className="space-y-6">
            <div>
              <Label htmlFor="orderNumber" className="text-base font-medium">
                Order Number
              </Label>
              <Input
                id="orderNumber"
                type="text"
                placeholder="Enter your order number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-base font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-black"
              disabled={isTracking}
            >
              {isTracking ? (
                <>
                  <Search className="mr-2 h-5 w-5 animate-spin " />
                  Tracking...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" />
                  Track Order
                </>
              )}
            </Button>
          </form>
        </Card>

        {/* Order Status Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Package className="w-8 h-8 text-black" />
            Order Status
          </h2>

          {tracked ? (
            <Card className="p-8 shadow-lg">
              {/* Example status timeline - replace with real data */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Order Confirmed</p>
                    <p className="text-sm text-gray-500">December 20, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Shipped</p>
                    <p className="text-sm text-gray-500">December 21, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Package className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Out for Delivery</p>
                    <p className="text-sm text-gray-500">Expected: December 23, 2025</p>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-10 text-center bg-gray-100">
              <p className="text-lg text-gray-600">
                Enter your order number and email above to track your order status.
              </p>
            </Card>
          )}
        </div>

        {/* Need Help Section */}
        <Card className="p-8 text-center shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-black" />
            Need Help?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            If you're having trouble tracking your order, please contact our customer service team.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Support
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
}