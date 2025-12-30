'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PackageOpen, Mail, RefreshCw, Tag, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ReturnsExchangesPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <RefreshCw className="w-10 h-10 text-black" />
            Returns & Exchanges
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, we'll make it right.
          </p>
        </div>

        {/* 30-Day Return Window */}
        <Card className="p-8 mb-12 shadow-xl bg-blend-color border-black">
          <div className="flex items-start gap-6">
            <Clock className="w-12 h-12 text-black mt-2" />
            <div>
              <h2 className="text-2xl font-semibold mb-4">30-Day Return Window</h2>
              <p className="text-gray-700 text-lg">
                You have 30 days from the delivery date to return or exchange your items.
              </p>
            </div>
          </div>
        </Card>

        {/* Return Conditions */}
        <Card className="p-8 mb-12 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Tag className="w-8 h-8 text-black" />
            Return Conditions
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <div className=" p-2 rounded-full mt-1">
                <PackageOpen className="w-5 h-5 text-black" />
              </div>
              <span>Items must be in original condition with all tags attached</span>
            </li>
            <li className="flex items-start gap-3">
              <div className=" p-2 rounded-full mt-1">
                <PackageOpen className="w-5 h-5 text-black" />
              </div>
              <span>Items must be unworn, unwashed, and unused</span>
            </li>
            <li className="flex items-start gap-3">
              <div className=" p-2 rounded-full mt-1">
                <PackageOpen className="w-5 h-5 text-black" />
              </div>
              <span>Original packaging should be include when possible</span>
            </li>
            <li className="flex items-start gap-3">
              <div className=" p-2 rounded-full mt-1">
                <PackageOpen className="w-5 h-5 text-black" />
              </div>
              <span>Some items may be excluded from returns (see product page for details)</span>
            </li>
          </ul>
        </Card>

        {/* How to Return */}
        <Card className="p-10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">How to Return</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-xl flex items-center gap-3">
                  <Mail className="w-6 h-6 text-black" />
                  Contact Us
                </h3>
                <p className="text-gray-700 mt-2">
                  Email us at <a href="mailto:returns@shopmart.com" className="text-black underline">returns@shopmart.com</a> with your order number
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-xl">Get Return Label</h3>
                <p className="text-gray-700 mt-2">
                  We'll send you a prepaid return shipping label and instructions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-xl">Ship Your Return</h3>
                <p className="text-gray-700 mt-2">
                  Pack your items securely and drop off at the carrier location
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-black">
                Start a Return
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}