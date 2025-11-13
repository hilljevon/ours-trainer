import { Step } from "@/lib/types";
import { adFlow } from "./adFlow";
import { dcpFlow } from "./dcpFlow";
import { dctFlow } from "./dctFlow";
import { ccrFlow } from "./ccrFlow";
import { stabilityFlow } from "./stabilityFlow";
import { scanFlow } from "./scanFlow";

export const trainingFlow: Record<string, Step> = {
    start: {
        message: "Welcome! Which assignment would you like to learn about?",
        options: [
            { label: "AD", next: "adIntro" },
            { label: "DCP", next: "dcpIntro" },
            { label: "SCAN", next: "scanIntro" }
        ],
    },
    ...adFlow,
    ...dcpFlow,
    ...dctFlow,
    ...ccrFlow,
    ...stabilityFlow,
    ...scanFlow,
    // caseBasics: {
    //   message:
    //     "Great! First question — how would you handle an out-of-network referral?",
    //   allowFreeInput: true,
    //   options: [{ label: "Continue", next: "end" }],
    // },
    end: {
        message: "That’s all for now. You can restart anytime!",
        options: [{ label: "Restart", next: "start" }],
    },
};