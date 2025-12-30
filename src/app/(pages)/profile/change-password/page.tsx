'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getUserToken } from '@/app/Helpers/getUserToken';
import { useRouter } from 'next/navigation';
import { ChangePasswordResponse } from '@/interfaces/changePass';
import Link from 'next/link';
const schema = z.object({
  currentPassword: z.string()
    .min(8, "The password must be at least 8 characters long")
    .max(64, "The password must not exceed 64 characters")
    .regex(/[A-Z]/,"The password must contain at least one uppercase letter" )
    .regex(/[a-z]/, "The password must contain at least one lowercase letter")
    .regex(/[0-9]/, "The password must contain at least one number")
    .regex(/[@$!%*?&#]/, "The password must contain at least one special character (@$!%?&#)")
    .refine((val) => !val.includes(" "), { message: "The password must not contain spaces" }),

  password: z.string()
   .min(8, "The password must be at least 8 characters long")
    .max(64, "The password must not exceed 64 characters")
    .regex(/[A-Z]/,"The password must contain at least one uppercase letter" )
    .regex(/[a-z]/, "The password must contain at least one lowercase letter")
    .regex(/[0-9]/, "The password must contain at least one number")
    .regex(/[@$!%*?&#]/, "The password must contain at least one special character (@$!%?&#)")
    .refine((val) => !val.includes(" "), { message: "The password must not contain spaces" }), 

  rePassword: z.string(),
}).refine((data) => data.password === data.rePassword, {
  message: "passwords not match",
  path: ["rePassword"],
});

type ChangePasswordForm = z.infer<typeof schema>;

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const token = await getUserToken();

      if (!token) {
        setErrorMsg('You must login first');
        router.push('/login');
        return;
      }

      const response = await fetch('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          token: token!,
        },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          password: data.password,
          rePassword: data.rePassword, 
        }),
      });
  const result: ChangePasswordResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'CurrentPassword not correct');
      }

      setSuccess(true);
      localStorage.removeItem(token);
      
    } catch (error) {
      alert( 'error ocurred during the change password');
    } finally {
      setLoading(false);
    }  
  }
  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Change password</h2>

      { success? (
        <div className="text-center text-green-600 text-xl space-y-4">
          <p>successfully</p>
          <p>go to login</p>
        <Link href={'/'}><Button>GO to App and go to login to show carts</Button></Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Input
              {...register('currentPassword')}
              type="password"
              placeholder="currentpassword"
              disabled={loading}
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register('password')}
              type="password"
              placeholder="newpassword"
              disabled={loading}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Input
              {...register('rePassword')}
              type="password"
              placeholder="repassword"
              disabled={loading}
            />
            {errors.rePassword && (
              <p className="text-red-500 text-sm mt-1">{errors.rePassword.message}</p>
            )}
          </div>

          {errorMsg && <p className="text-red-600 text-center font-medium">{errorMsg}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'change......' : 'change password'}
          </Button>
        </form>
      )}
    </div>
  );
}/**   بس الهندسه   قالت  متعملهوش انا  حاولت  فيه  شويه*/