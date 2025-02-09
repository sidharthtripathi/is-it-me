'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schema/account';

import { z } from 'zod';
import { server } from '@/lib/axios';
import { AxiosError } from 'axios';


type TLoginSchema = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {toast} = useToast()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });
  const router = useRouter();
  async function onSubmit({username,password}: TLoginSchema) {
    try {
      await server.post("/api/auth/login",{username,password})
      router.push('/')
    } catch (error) {
      if(error instanceof AxiosError)
      toast({title : error.response?.statusText,variant:"destructive"})
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back! Sign in to connect</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Username</Label>
          <Input
            className="mb-2"
            type="text"
            placeholder="peduarte"
            {...register('username')}
          />
          {errors.username && (
            <p className="text-xs text-destructive">
              {errors.username.message}
            </p>
          )}

          <Label htmlFor="password">Password</Label>
          <Input
            className="mb-2"
            type="password"
            placeholder="********"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-xs text-destructive">
              {errors.password.message}
            </p>
          )}
          <Button type="submit" className="mt-2" disabled={isSubmitting}>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}