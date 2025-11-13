"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ScanPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-4xl font-semibold text-indigo-600 mb-2">
                    SCAN Overview
                </h1>
                <p className="text-gray-600 mb-8 text-base max-w-5xl">
                    This page provides an overview of the SCAN Board and SCAN Analyst workflows.
                    All newly opened cases go to SCAN for initial review. Use this page as a reference alongside the chatbot trainer.
                </p>

                <ScrollArea className="h-[85vh] rounded-md border border-gray-200 bg-white shadow-sm p-10">

                    {/* Section 1: SCAN Overview */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                SCAN Overview
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                SCAN handles the initial review of all newly opened cases.
                                The team consists of the <strong>SCAN Board</strong> and <strong>SCAN Analysts</strong>.
                            </p>
                            <p>
                                Their responsibilities include RR’ing, calls, letters, and managing potential transfers.
                            </p>
                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 2: SCAN Board */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                SCAN Board Responsibilities
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                The SCAN Board tracks newly created cases and assigns them to the appropriate team members.
                                New cases can be found in two places:
                            </p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    <strong>SCAN UA Working Folder</strong> — contains newly created cases awaiting assignment.
                                </li>

                                <li>
                                    <strong>Reno Census</strong> — sort by the newest case number.
                                    SCAN cases are marked with “SCAN” in the RN column and may be color-coded.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 3: SCAN Analyst */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                SCAN Analyst Workflow
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                The SCAN Analyst workflow is similar to CCR but generally involves:
                            </p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>More letters to review</li>
                                <li>More potential transfers to manage</li>
                                <li>Less frequent updates compared to CCR</li>
                            </ul>

                            <p>
                                Your OPSTEL assignment when working SCAN is <strong>SCAN NT</strong>.
                            </p>
                        </CardContent>
                    </Card>
                </ScrollArea>
            </div>
        </div>
    );
}
