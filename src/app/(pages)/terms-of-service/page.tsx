'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
        <p className="text-center text-muted-foreground mb-12">
          Last updated: 9/20/2025
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                By accessing and using ShopMart, you accept and agree to be bound by the terms and provision of this agreement.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Use License</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on ShopMart for personal, non-commercial transitory viewing only.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Product Information</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Pricing and Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                All prices are subject to change without notice. Payment is due at the time of purchase.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Returns and Refunds</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {/* Add your actual returns and refunds policy here */}
                Please refer to our Returns Policy for details on returns and refunds.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}