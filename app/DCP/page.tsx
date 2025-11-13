"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DcpPage() {
    return (
        <div className="w-full flex justify-center px-6 py-10">
            <Card className="w-full max-w-6xl px-8 py-10 shadow-lg border bg-white rounded-2xl">
                <h1 className="text-3xl font-semibold mb-6">DCP Workflow</h1>

                {/* --- OVERVIEW --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">
                        DCP works with CMA’s and REF RN for discharge planning such as DME, HH,
                        SNF, ARU, Hospice, and referral cases.
                    </p>
                </section>

                <Separator className="my-8" />

                {/* --- TAGGING --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Tagging</h2>
                    <p className="text-gray-700 leading-relaxed">
                        In RightFax: navigate to
                        <strong> Other Users → OURS-REFERRAL-888 → Main</strong>.
                        All DCP + REF UA’s help with tagging and opening cases.
                    </p>
                    <p className="text-gray-700">Use AD Tagging as a reference guide.</p>
                </section>

                <Separator className="my-8" />

                {/* --- GROUPCHATS --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Groupchats</h2>
                    <p className="text-gray-700">At the start of a DCP shift, you will join:</p>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Main DCP chat (DCP/REF UA’s + CMA’s + ACS)</li>
                        <li>ACS Groupchat</li>
                        <li>AD DCP Groupchat (AD RR + DCP UA’s)</li>
                    </ul>
                </section>

                <Separator className="my-8" />

                {/* --- MAIN GROUPCHAT DETAILS --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Main DCP Groupchat</h2>
                    <p className="text-gray-700">
                        You may communicate with your CMA here or through private chats. UA’s
                        may also receive requests for patients shared by multiple CMA’s.
                    </p>

                    <p className="text-gray-700">Examples of requests:</p>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Checking SIH</li>
                        <li>Confirming DME with vendors</li>
                        <li>Calling SNF/ARU admissions</li>
                        <li>Letters</li>
                        <li>Engagements</li>
                    </ul>
                </section>

                <Separator className="my-8" />

                {/* --- ACS GROUPCHAT --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">ACS Groupchat</h2>

                    <p className="text-gray-700">Examples of ACS requests:</p>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Opening REF cases, confirming SIH</li>
                        <li>Reopening REF cases as claims cases</li>
                        <li>Messaging PCP offices for outpatient follow-up</li>
                    </ul>

                    <p className="text-gray-700">
                        UA’s notify ACS about OP Therapy Orders, auth extension requests,
                        and special DME sizing.
                    </p>
                </section>

                <Separator className="my-8" />

                {/* --- AD DCP GROUPCHAT --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">AD | DCP Groupchat</h2>
                    <p className="text-gray-700">
                        AD RR requests CCR or REF cases to be reassigned to CMA desks for DCP needs.
                        DCP assigns and updates AD with which CMA received the case.
                        RR’s back to CCR are communicated here.
                    </p>
                </section>

                <Separator className="my-8" />

                {/* --- DCP CALLS --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">DCP Calls</h2>

                    <p className="text-gray-700">
                        OPSTEL assignment will be <strong>Analyst DCP</strong>.
                    </p>

                    <p className="text-gray-700">Common call types:</p>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
                        <li>NKF initiating placement (SNF/ARU) or sending HH/DME orders</li>
                        <li>NKF following up on existing placements or orders</li>
                        <li>If orders not sent yet, provide OURS fax number</li>
                        <li>If orders were sent, check Reno notes before updating</li>
                        <li>
                            Placement typically takes a few days, so communicate clearly with NKF
                            that we are actively managing and checking for bed availability
                        </li>
                    </ul>
                </section>

                <Separator className="my-8" />

                {/* --- DCP RR --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">DCP RR Workflow</h2>

                    <p className="text-gray-700">
                        All RR tracking is in the DCP spreadsheet:
                    </p>

                    <p className="text-gray-700">
                        <strong>OURS Remote Work 2023 → DCP → Files → DCP RR List – CURRENT MONTH</strong>
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Go to the current date and wait for CMA’s to confirm they are “updated.”
                        This means their RR list reflects everything they’ll handle today.
                    </p>

                    <p className="text-gray-700">CMA list shows:</p>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Name</li>
                        <li>Number of placements</li>
                        <li>Cutoff times</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed">
                        Assign new SNF/ARU cases left-to-right to whoever has the <strong>lowest placements</strong>,
                        regardless of total case count.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        After assignment:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Notify the CMA in main DCP chat</li>
                        <li>Update their placement count</li>
                        <li>Notify AD in AD | DCP chat so CMA receives the case in Reno</li>
                    </ul>
                </section>
            </Card>
        </div>
    );
}
