"use client";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ScanPage() {
    return (
        <div className="w-full flex justify-center px-6 py-10">
            <Card className="w-full max-w-6xl px-8 py-10 shadow-lg border bg-white rounded-2xl">
                <h1 className="text-3xl font-semibold mb-6">SCAN Workflow</h1>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">
                        All newly opened cases go to <strong>SCAN</strong> for their initial review.
                        The team includes both SCAN Board and SCAN Analysts, who handle RR'ing,
                        calls, letters, and transfer-related tasks.
                    </p>
                </section>

                <Separator className="my-8" />

                {/* --- SCAN BOARD --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">SCAN Board</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The SCAN Board tracks all newly created cases and assigns them appropriately.
                        You can find new cases in two places:
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>
                            <strong>SCAN UA Working Folder</strong> – contains newly created cases that
                            have not yet been assigned.
                        </li>
                        <li>
                            <strong>Reno Census</strong> – sort by newest case number at the top to see
                            recent cases. A SCAN case is indicated when the rightmost RN column says
                            “SCAN,” and the row may be color-coded differently.
                        </li>
                    </ul>
                </section>

                <Separator className="my-8" />

                {/* --- SCAN ANALYST --- */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">SCAN Analyst</h2>

                    <p className="text-gray-700 leading-relaxed">
                        SCAN Analyst workflow is similar to CCR, with a few differences.
                        You’ll typically handle more letters and potential transfers, but not as frequently
                        as CCR.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Your OPSTEL assignment will be <strong>SCAN NT</strong>.
                    </p>
                </section>
            </Card>
        </div>
    );
}
