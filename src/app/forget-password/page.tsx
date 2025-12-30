'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ForgotPasswordResponse } from '@/interfaces';


const schema = z.object({
  email: z
    .email('Invalid email format')
    .trim()
    .min(3, 'Email is required')
    .max(254, 'Email is too long'),
});

type ForgotPasswordForm = z.infer<typeof schema>;

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Fix 3: Add generic type to useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    setLoading(true);
    try {
      const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result: ForgotPasswordResponse = await response.json();
if (!response.ok) {
        throw new Error(result.message || 'An error ocurred');
      }

      setSuccess(true);
      setTimeout(() => router.push('/verify-reset-code'), 2000);
    } catch (error: any) {
      alert(error.message || 'Make sure the email address is correct');
    } finally {
      setLoading(false);
    }
  };
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Forgot your password?</CardTitle>
        </CardHeader>
        <CardContent>
          {success ? (
            <p className="text-green-600 text-center">
              The verification code has been sent to your email
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email address"
                  disabled={loading}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send verification code'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}