import { Step } from "@/lib/types";

export const scanFlow: Record<string, Step> = {
    scanIntro: {
        message: [
            "SCAN Overview: All newly opened cases go to SCAN for their initial review.",
            "The SCAN team includes both the SCAN Board and SCAN Analysts, who handle RR'ing, calls, letters, and transfers."
        ],
        options: [
            { label: "SCAN Board", next: "scanBoard" },
            { label: "SCAN Analyst", next: "scanAnalyst" },
        ],
    },
    scanBoard: {
        message: [
            "SCAN Board: The SCAN Board is responsible for tracking all newly created cases and assigning them appropriately. You can find new cases in two places:",
            "1. SCAN UA Working Folder — contains newly created cases awaiting assignment.",
            "2. Reno Census — sort by the newest case number at the top to see recent entries. A case belongs to SCAN if the rightmost RN column is labeled “SCAN. These rows may also appear highlighted or color-coded differently from other cases.",
        ],
        options: [
            { label: "Back to SCAN Overview", next: "scanIntro" },
            { label: "SCAN Analyst", next: "scanAnalyst" },
        ],
    },
    scanAnalyst: {
        message: [
            "The SCAN Analyst workflow is similar to the CCR workflow, with a few differences.",
            "You’ll usually handle more letters and potential transfers, but these occur less frequently than in CCR.",
            "Your OPSTEL assignment will be SCAN NT."
        ],
        options: [
            { label: "Back to SCAN Overview", next: "scanIntro" },
            { label: "SCAN Board", next: "scanBoard" },
        ],
    },
}