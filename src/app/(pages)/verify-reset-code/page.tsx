'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { VerifyPasswordResponse } from '@/interfaces';

const schema = z.object({
  resetCode: z.string().length(6, 'The code must be 6 digits'),
});

export default function VerifyResetCode() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
type VerifyCodeForm = z.infer<typeof schema>
  const onSubmit = async (data: VerifyCodeForm) => {
    setLoading(true);
    try {
      const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resetCode: data.resetCode }),
      });
const result: VerifyPasswordResponse = await response.json();
if (!response.ok) {
        throw new Error(result.message || 'The code not correct');
      }

      setSuccess(true);
      setTimeout(() => router.push('/resetPassword'), 2000);
    } catch (error: any) {
      alert(error.message || 'The code not correct');
    } finally {
      setLoading(false);
    }
  };
      

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Check the code</CardTitle>
        </CardHeader>
        <CardContent>
          {success ? (
            <p className="text-green-600 text-center">Verfication successful.in progress......</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                {...register('resetCode')}
                placeholder="Enter the 6-digit code"
                maxLength={6}
                disabled={loading}
              />
              {errors.resetCode && <p className="text-red-500 text-sm">{errors.resetCode.message}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Verification....' : 'Verification'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}