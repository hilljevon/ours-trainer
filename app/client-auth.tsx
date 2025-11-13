"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ClientAuth({ children }: { children: React.ReactNode }) {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const [password, setPassword] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem("auth_passed");
        if (stored === "true") {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    const handleSubmit = () => {
        if (password === "OURS2025") {
            localStorage.setItem("auth_passed", "true");
            setAuthenticated(true);
        } else {
            alert("Incorrect password.");
        }
    };

    // still loading state from localStorage
    if (authenticated === null) {
        return null;
    }

    if (!authenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <Card className="w-full max-w-md p-6 shadow-lg border">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-semibold text-indigo-600">
                            Enter Password
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-base"
                        />

                        <Button onClick={handleSubmit} className="w-full text-base">
                            Continue
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return <>{children}</>;
}
