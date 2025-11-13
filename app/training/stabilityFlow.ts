import { Step } from "@/lib/types";

export const stabilityFlow: Record<string, Step> = {
    stabilityIntro: {
        message: [
            "AD is responsible for tagging, opening cases, and assigning new cases to CCR nurses (if you are AD RR). ",
        ],
        options: [
            { label: "How to Tag", next: "adIntro" },
            { label: "RR Workflow", next: "rrWorkFlowAD" },
        ],
    },
}