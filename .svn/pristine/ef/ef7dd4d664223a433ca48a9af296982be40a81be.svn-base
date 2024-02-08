"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Header } from "@/components/auth/header"

import { BackButton } from "@/components/auth/back-button";

interface CarsWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
export const CordWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CarsWrapperProps) => {
    return (<Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header
                label={headerLabel}


            />
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        
        <CardFooter>
            <BackButton
                label={backButtonLabel}
                href={backButtonHref}
            />
        </CardFooter>
    </Card>)
}