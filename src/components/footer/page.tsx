import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className=" py-12 mt-auto  border-t-1  container mx-auto  ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column: Logo & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center mr-3">
                <span className="text-white text-3xl font-bold">S</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">ShopMart</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.
            </p>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex items-center">
                <span className="mr-1 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4 mr-2" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
</span>
                <p>123 Shop Street, October City,<br />DC 12345</p>
              </div>
              <div>
  <div className="flex items-center">
    <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4 mr-2" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg></span>
    <p>(+20) 01093333333</p>
  </div>
  <div className="flex items-center mt-3">
    <span className="mr-1"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4 mr-2" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x={2} y={4} width={20} height={16} rx={2} /></svg></span>
    <p>support@shopmart.com</p>
  </div>
</div>

            </div>
          </div>

          {/* SHOP Column */}
          <div>
            <h3 className="text-sm font-bold  text-gray-900 mb-4">SHOP</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="categories" className="hover:text-gray-900 transition">Electronics</a></li>
              <li><a href="categories" className="hover:text-gray-900 transition">Fashion</a></li>
              <li><a href="categories" className="hover:text-gray-900 transition">Home & Garden</a></li>
              <li><a href="categories" className="hover:text-gray-900 transition">Sports</a></li>
              <li><a href="categories" className="hover:text-gray-900 transition">Deals</a></li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="contact" className="hover:text-gray-900 transition">Contact Us</a></li>
              <li><a href="help" className="hover:text-gray-900 transition">Help Center</a></li>
              <li><a href="track-order" className="hover:text-gray-900 transition">Track Your Order</a></li>
              <li><a href="returns" className="hover:text-gray-900 transition">Returns & Exchanges</a></li>
              <li><a href="size-guide" className="hover:text-gray-900 transition">Size Guide</a></li>
            </ul>
          </div>

          {/* ABOUT Column */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">ABOUT</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="about" className="hover:text-gray-900 transition">About shopmart</a></li>
              <li><a href="careers" className="hover:text-gray-900 transition">Careers</a></li>
              <li><a href="press" className="hover:text-gray-900 transition">Press</a></li>
              <li><a href="investor" className="hover:text-gray-900 transition">Investor Relations</a></li>
              <li><a href="sustainability" className="hover:text-gray-900 transition">Sustainability</a></li>
            </ul>
          </div>
        <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">POLICIES</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="privacy-policy" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="terms-of-service" className="hover:text-gray-900 transition">Terms of Service</a></li>
              <li><a href="cookie-policy" className="hover:text-gray-900 transition">Cookie Policy</a></li>
              <li><a href="shipping-policy" className="hover:text-gray-900 transition">Shipping Policy</a></li>
              <li><a href="refund-policy" className="hover:text-gray-900 transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
