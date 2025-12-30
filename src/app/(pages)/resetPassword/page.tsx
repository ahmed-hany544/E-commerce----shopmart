'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { ResetPasswordResponse } from '@/interfaces';

const schema = z.object({
  email:z.email("Invalid email format").trim().min(3, "Email is required").max(254, "Email is too long") ,
  newPassword:z.string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password must not exceed 64 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&#]/, "Password must contain at least one special character")
    .refine((val) => !val.includes(" "), {
      message: "Password must not contain spaces",
    }),
});

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
type ResetPasswordForm = z.infer<typeof schema>
  const onSubmit = async (data: ResetPasswordForm) => {
    setLoading(true);
    try {
      const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          newPassword: data.newPassword,
        }),
      });
const result: ResetPasswordResponse  = await response.json();
  if (!response.ok) {
        throw new Error(result.message || 'password reset failed');
      }

      setSuccess(true);
      setTimeout(() => router.push('/login'), 3000);
    } catch (error: any) {
      alert(error.message || 'error, please try again');
    } finally {
      setLoading(false);
    }};
      
      

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Reset password</CardTitle>
        </CardHeader>
        <CardContent>
          {success ? (
            <p className="text-green-600 text-center">Your password has been successfully changed.You are now being directed to log in.....</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input {...register('email')} type="email" placeholder="Your Email" disabled={loading} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <Input {...register('newPassword')} type="password" placeholder="newPassword" disabled={loading} />
              {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Saving in progress' : 'Save the new password'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}