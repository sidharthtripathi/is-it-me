
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm';
export default function Component() {
  return (
    <Tabs defaultValue="login" className="m-auto w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <SignupForm />
      </TabsContent>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
    </Tabs>
  )
}