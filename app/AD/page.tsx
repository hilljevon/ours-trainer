"use client";

import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ADPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
            <div className="max-w-7xl mx-auto w-full"> {/* wider container */}
                <h1 className="text-4xl font-semibold text-indigo-600 mb-2">
                    AD Assignment Overview
                </h1>
                <p className="text-gray-600 mb-8 text-base max-w-5xl">
                    This page provides an overview of all responsibilities and workflows
                    for the AD and AD RR roles. Use this as a reference guide or quick
                    refresher alongside the chatbot trainer.
                </p>
                <ScrollArea className="h-[85vh] rounded-md border border-gray-200 bg-white shadow-sm p-10">
                    {/* Section 1: AD RR Responsibilities */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                AD RR Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                AD RR manages order communication and new assignments for CCR.
                                Main duties include:
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    RR CCR cases to the CCR list while following daily RR rules
                                    and updating the RR spreadsheet.
                                </li>
                                <li>
                                    Notify CCR Case Managers when new orders come in for their
                                    cases.
                                </li>
                                <li>
                                    Notify the DCP team of any DCP orders that need to be
                                    assigned.
                                </li>
                                <li>Add cases to all CCR CM and CMA Reno queues.</li>
                                <li>Tag and open cases when appropriate.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Separator className="my-10" />

                    {/* Section 2: RR Workflow Start */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                RR Workflow – Start of Shift
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                At the beginning of each shift, management sends a message with
                                the RR rules for the day. These include exceptions (like not RR'ing
                                cases from contracted SBC facilities) and instructions for DCP
                                cases handled by CMAs or OOA cases.``
                            </p>
                            <p>
                                Any DCP directions should be shared in the{" "}
                                <strong>AD | DCP group chat</strong> so the team stays updated.
                            </p>
                            <p>
                                The message also includes a list of CMs and their RR order. Access
                                the RR list in{" "}
                                <strong>
                                    Teams → OURS Remote Work → General → CCR RR List
                                </strong>
                                . Use the tab for the current day (or create one if needed) and
                                add the RNs in the listed order.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 3: RR Workflow Continued */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                RR Workflow – Preparing the Case Assignment Tool
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>Once the RR list is ready, prepare the case assignment tool:</p>
                            <ol className="list-decimal list-inside space-y-1">
                                <li>Open the desk assignment spreadsheet from the daily email.</li>
                                <li>
                                    Go to the rightmost columns where you see{" "}
                                    <strong>CM/UA NUIDs</strong>.
                                </li>
                                <li>Copy them from top to bottom, skipping any white spaces.</li>
                                <li>If unsure, ask the PM or the previous RR for help.</li>
                            </ol>
                            <p>
                                To add a case to someone’s queue: click{" "}
                                <strong>Modify Assignments</strong>, find the case, and change
                                the dropdown on the left to the new CM or CMA.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 4: CCR RR Workflow */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                CCR RR Workflow
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>All RR’s will come from one of the following sources:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>UA notifications for verbal stability calls from NKF.</li>
                                <li>
                                    Transfer or HH/IX/ABX orders for unassigned CCR cases.
                                </li>
                                <li>Handoffs from CMAs to CCR for repat or RN needs.</li>
                                <li>Direct requests from management.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 5: Tagging Faxes */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                Tagging Faxes
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                When you open a fax and there are no orders, first search the
                                patient name in the CCR queue.
                            </p>
                            <p>
                                If the patient shows up, edit the fax using:
                                <br />– First three letters of the medical home
                                <br />– A dash
                                <br />– Full name (exactly as in Reno)
                            </p>
                            <p>Include the case number — skip the MRN to save time.</p>
                            <p>If the patient does not show up in CCR, it might mean:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>The case was closed (patient discharged).</li>
                                <li>
                                    This is the first time NKF is notifying us — open a new case.
                                </li>
                                <li>
                                    It’s a contracted facility or a case OURS does not manage.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 6: Identifying Orders */}
                    <Card className="mb-10 border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                Identifying Orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>
                                Finding orders gets easier with experience. Most faxes that have
                                orders show a note or table of contents within the first few
                                pages.
                            </p>
                            <p>
                                Orders are often at the start or end of the fax. Look for terms
                                like <strong>Order</strong>,{" "}
                                <strong>Order Requisition</strong>, or{" "}
                                <strong>Consult to Case Management</strong>.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 7: Opening Cases */}
                    <Card className="border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="text-2xl text-indigo-600">
                                Opening Cases
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-base text-gray-700 leading-relaxed">
                            <p>Open a case if it’s not one of the following:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Contracted facility</li>
                                <li>Transplant case</li>
                                <li>OUC case</li>
                                <li>Patient already discharged</li>
                                <li>Patient in ED or observation</li>
                            </ul>
                            <p>
                                Once confirmed, verify the identifiers and move the case to the{" "}
                                <strong>SCAN UA Working Folder</strong> so the SCAN Board can
                                assign it for review.
                            </p>
                        </CardContent>
                    </Card>
                </ScrollArea>
            </div>
        </div>
    );
}
