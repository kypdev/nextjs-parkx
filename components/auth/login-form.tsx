"use client";
import * as z from "zod";
import { CordWrapper } from "@/components/auth/card-wrapper"
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FormError } from "@/components/form-error";
export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider!"
        : "";
    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransaction] = useState();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });


    return (
        <CordWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form className="space-y-6">
                    <div className="space-y-4">
                        {showTwoFactor && (
                            <FormField
                                control={form.control}
                                name="code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Two Factor Code</FormLabel>
                                        <FormControl>
                                            <Input {...field} disabled={isPending} placeholder="123456" />
                                        </FormControl>
                                    </FormItem>)}
                            />)}
                        {!showTwoFactor && (<>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                type="email"
                                                placeholder="john.doe@example.com" />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type="password"
                                            placeholder="********" />
                                    </FormControl>
                                    <Button
                                     size="sm"
                                     variant="link"
                                     asChild
                                     className="px-0 font-normal"
                                    >
                                        <Link href="/auth/reset">Forgot password?</Link>
                                    </Button>
                                </FormItem>
                                )}
                            />
                        </>)}
                    </div>
                 <FormError message={error || urlError} />
                 <Button disabled={isPending} type="submit" className="w-full">
                    {showTwoFactor ? "Confirm" : "Login"}
                 </Button>
                </form>
            </Form>
        </CordWrapper>)
}

export default LoginForm;