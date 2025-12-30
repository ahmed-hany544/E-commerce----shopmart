'use client';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CreditCard, Truck, PackageOpen, MapPinned, HeadphonesIcon, Mail } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about payments, shipping, returns, and more.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Payment Methods */}
          <AccordionItem value="payment" className="bg-white rounded-xl shadow-md px-6">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline">
              <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-black" />
                What payment methods do you accept?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pt-4">
              <p>We accept all major credit cards, PayPal, and other secure payment methods.</p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <img src="https://cdn.dribbble.com/userupload/18710290/file/original-d76f746bd5d0fc646762ab57d9adc8fb.jpg" alt="Payment icons" className="h-12 rounded-lg shadow" />
                <img src="https://nucleoapp.com/assets/img/open-graph-credit-cards.png" alt="Credit card icons" className="h-12 rounded-lg shadow" />
                <img src="http://graphicpear.com/wp-content/uploads/2016/08/Credit-Card-Icons.jpg" alt="Visa Mastercard Paypal icons" className="h-12 rounded-lg shadow" />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Shipping */}
          <AccordionItem value="shipping" className="bg-white rounded-xl shadow-md px-6">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline">
              <div className="flex items-center gap-4">
                <Truck className="w-8 h-8 text-black" />
                How long does shipping take?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pt-4">
              <p>Standard shipping takes 3-5 business days. Express shipping options are available for faster delivery.</p>
              <div className="flex gap-6 mt-6 justify-center">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/000/404/small/fast-delivery-truck-box-free-vector.jpg" alt="Fast delivery truck" className="h-24 rounded-lg shadow" />
                <img src="https://thumbs.dreamstime.com/b/vector-image-delivery-truck-rendered-pink-carries-box-up-arrows-suggesting-shipping-also-features-399253990.jpg" alt="Shipping box icon" className="h-24 rounded-lg shadow" />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Returns */}
          <AccordionItem value="returns" className="bg-white rounded-xl shadow-md px-6">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline">
              <div className="flex items-center gap-4">
                <PackageOpen className="w-8 h-8 text-black" />
                Can I return or exchange items?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pt-4">
              <p>Yes, we offer a 30-day return policy for most items. Items must be in original condition with tags attached.</p>
              <div className="flex gap-6 mt-6 justify-center">
                <img src="https://www.shutterstock.com/image-vector/return-box-package-policy-sign-260nw-2294620909.jpg" alt="Return policy icon" className="h-20 rounded-lg shadow" />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/172/936/small/return-parcel-box-silhouette-and-line-icon-set-exchange-package-of-delivery-service-pictogram-arrow-back-shipping-return-goods-refund-product-in-box-editable-stroke-isolated-illustration-vector.jpg" alt="Exchange package icon" className="h-20 rounded-lg shadow" />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Tracking */}
          <AccordionItem value="tracking" className="bg-white rounded-xl shadow-md px-6">
            <AccordionTrigger className="text-xl font-semibold hover:no-underline">
              <div className="flex items-center gap-4">
                <MapPinned className="w-8 h-8 text-black" />
                How do I track my order?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base pt-4">
              <p>Once your order ships, you'll receive a tracking number via email. You can also track your order in your account.</p>
              <div className="flex gap-6 mt-6 justify-center">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/894/212/small_2x/parcel-box-point-on-shipping-map-geolocation-silhouette-and-line-icon-set-order-delivery-location-local-package-transportation-icon-pin-location-editable-stroke-isolated-illustration-vector.jpg" alt="Order tracking map" className="h-24 rounded-lg shadow" />
                <img src="https://img.freepik.com/premium-vector/order-tracking-delivery-transportation-parcel-map-with-pin-pointer-shipping-package_284092-1399.jpg" alt="Package tracking icon" className="h-24 rounded-lg shadow" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Still Need Help Section */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you can't find the answer you're looking for, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="bg-black hover:bg-black">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
            <Link href="mailto:support@shopmart.com">
              <Button size="lg" variant="secondary">
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </Link>
          </div>
          <div className="flex gap-6 mt-8 justify-center">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/043/514/672/small_2x/a-set-of-10-customer-support-icons-as-online-chat-chat-support-question-answer-vector.jpg" alt="Customer support icons" className="h-20 rounded-lg shadow" />
            <img src="https://as1.ftcdn.net/jpg/03/26/78/92/1000_F_326789207_j2xiy5Ih9k6k0wtzZWs1n5dWpnlu7kEh.jpg" alt="Live chat support" className="h-20 rounded-lg shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}