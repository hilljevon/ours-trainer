"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DcpPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
            <div className="max-w-7xl mx-auto w-full">

                <h1 className="text-4xl font-semibold text-indigo-600 mb-2">
                    DCP Assignment Overview
                </h1>

                <p className="text-gray-600 mb-8 text-base max-w-5xl">
                    This page covers DCP responsibilities, groupchat workflows, calls, RR rules, and tagging.
                    Use this reference page alongside the chatbot trainer as needed.
                </p>

                <ScrollArea className="h-[85vh] rounded-md border border-gray-200 bg-white shadow-sm p-10">

                    {/* Section 1: Overview */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                DCP Overview
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                DCP works with CMA’s and REF RN on discharge planning such as DME, HH, SNF, ARU, Hospice,
                                and referral-related cases.
                            </p>
                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 2: Tagging */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                Tagging – RightFax
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">

                            <p>
                                In RightFax, go to:
                                <br />
                                <strong>Other Users → OURS-REFERRAL-888 → Main</strong>.
                            </p>

                            <p>
                                All DCP + REF UA’s assist with tagging and opening cases.
                                Follow AD Tagging guidelines for how to tag properly.
                            </p>

                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 3: Groupchats */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                Groupchats at Start of Shift
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>At the beginning of each DCP shift, you'll join:</p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>Main DCP groupchat (DCP/REF UA’s + CMA’s + ACS)</li>
                                <li>ACS groupchat</li>
                                <li>AD | DCP groupchat (AD RR + DCP UA’s)</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 4: Main DCP Groupchat */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                Main DCP Groupchat
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">

                            <p>
                                You may communicate with your CMA here or through private chats.
                                UA’s may also receive requests when multiple CMA’s share a patient.
                            </p>

                            <p>Examples of CMA requests:</p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>Checking if a patient is SIH</li>
                                <li>Confirming DME with vendors</li>
                                <li>Calling SNF/ARU admissions for acceptance</li>
                                <li>Letters</li>
                                <li>Engagements</li>
                            </ul>

                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 5: ACS Groupchat */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                ACS Groupchat
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>Common ACS requests include:</p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>Opening REF cases or confirming SIH</li>
                                <li>Reopening REF cases as claims</li>
                                <li>Sending messages to PCP offices for outpatient follow up</li>
                            </ul>

                            <p>
                                UA’s notify ACS of OP therapy orders, auth extensions,
                                and special DME sizing requests.
                            </p>

                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 6: AD | DCP Groupchat */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                AD | DCP Groupchat
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                AD RR may request CCR or REF cases to be assigned to CMA desks for DCP needs.
                                DCP assigns the case and updates AD on which CMA received it.
                            </p>

                            <p>
                                Any cases that need to be RR’d back to CCR can also be communicated in this chat.
                            </p>
                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 7: DCP Calls */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                DCP Calls
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">

                            <p>
                                OPSTEL assignment for DCP is <strong>Analyst DCP</strong>.
                            </p>

                            <p>Common call types include:</p>

                            <ul className="list-disc list-inside space-y-1 leading-relaxed">
                                <li>NKF initiating placement (SNF/ARU)</li>
                                <li>Processing orders for HH or DME</li>
                                <li>NKF following up on placement or orders</li>
                                <li>Providing OURS fax number if orders not yet sent</li>
                                <li>Checking Reno notes before giving updates</li>
                                <li>Telling NKF we are actively managing placement when no updates exist</li>
                            </ul>

                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 8: DCP RR Workflow */}
                    <Card className="border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                DCP RR Workflow
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">

                            <p>
                                All RR tracking is located in the DCP spreadsheet:
                            </p>

                            <p>
                                <strong>OURS Remote Work 2023 → DCP → Files → DCP RR List – CURRENT MONTH</strong>
                            </p>

                            <p>
                                Go to the current date and wait for CMA’s to confirm they are “updated.”
                                This means they’ve added everything they will work on today.
                            </p>

                            <p>CMA information will show:</p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>Name</li>
                                <li>Number of placements</li>
                                <li>Cutoff times</li>
                            </ul>

                            <p>
                                Assign new SNF/ARU cases to the CMA with the <strong>lowest placement count</strong>,
                                regardless of total caseload.
                            </p>

                            <p>After assigning:</p>

                            <ul className="list-disc list-inside space-y-1">
                                <li>Notify the CMA in the main DCP groupchat</li>
                                <li>Update their placement number</li>
                                <li>Notify AD in AD | DCP chat so the CMA receives the case in Reno</li>
                            </ul>

                        </CardContent>
                    </Card>
                </ScrollArea>
            </div>
        </div>
    );
}
