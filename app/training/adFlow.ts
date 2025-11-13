import { Step } from "@/lib/types";

export const adFlow: Record<string, Step> = {
    adIntro: {
        message: [
            "AD is responsible for tagging, opening cases, and assigning new cases to CCR nurses (if you are AD RR).",
            "Select one of the options below to learn more."
        ],
        options: [
            { label: "How to Tag", next: "howToTagAD" },
            { label: "RR Overview", next: "adOverview" },
        ],
    },
    howToTagAD: {
        message: [
            "When you open a fax and confirm there are no orders:",
            "1. Search the patient’s name in the CCR queue.",
            "2. If the patient shows up, edit the fax like this: First three letters of medical home, dash, patient full name. Ex: FON-JOHN SMITH",
            "3. Don't forget to add the case number in the appropriate field. No need to include patient KP MRN.",
        ],
        options: [
            { label: "Back to AD Intro", next: "adIntro" },
            { label: "What if patient is not in CCR queue?", next: "notInCCRQueueAD" },
            { label: "How do I find orders in a fax?", next: "findingOrdersAD" },
        ],
    },
    notInCCRQueueAD: {
        message: [
            "When the case is not in the CCR queue: It usually means one of the following:",
            "1.The case was closed (the patient has been discharged). In this case we can find the associated case by searching patient's KP MRN and tag like so: 'COMPLETED FON-JOHN SMITH'.",
            "2.This is the first time NKF is notifying us about this patient — we’ll need to open a new case.",
            "3. NKF notifying us of patient admission for first time but patient already discharged. In this case, we do not open and can mention in fax patient discharged.",
        ],
        options: [
            { label: "Back to AD intro", next: "adIntro" },
            { label: "When do I open a case?", next: "openingCaseAD" },
        ],
    },
    findingOrdersAD: {
        message: [
            "Identifying Orders: Finding orders gets easier with practice. Most of the time, if a fax has an order, you’ll spot it within the first few pages — often in a note or the table of contents.",
            "Orders can technically be anywhere in the fax, but they’re usually at the beginning or end. Look for key words like:",
            "'Order', 'Order Requisition', 'Consult to Case Management'",
        ],
        options: [
            { label: "Back to AD intro", next: "adIntro" },
            { label: "When do I open a case?", next: "openingCaseAD" },
        ],
    },
    openingCaseAD: {
        message: [
            "Opening a Case: Open a case as long as it’s not one of the following:",
            "1. Contracted facility",
            "2. Transplant case",
            "3. OUC case",
            "4. Patient already discharged",
            "5. Patient in ED or observation",
            "Once you confirm it’s okay to open: Verify the 4–5 identifiers, Create the case, Move it to the SCAN UA Working Folder so the SCAN Board can assign it for review.",
            "Click more info below to see about these exceptions."
        ],
        options: [
            { label: "Back to AD intro", next: "adIntro" },
            { label: "Back to start", next: "start" }
        ],
        extraInfo: {
            title: "Case Exceptions",
            content: [
                "• Contracted Facility – Managed by an external partner.",
                "• Transplant Case – Typically handled by the transplant team.",
                "• OUC Case – Managed by OUC department.",
                "• Discharged Patient – No longer active.",
                "• ED/Observation – Case not yet admitted."
            ],
        },
    },
    adOverview: {
        message: [
            "AD RR Overview: Responsibilities of AD RR include: ",
            "1. RR to CCR.",
            "2. Notify others of received orders.",
            "3. Request for DCP team to assign.",
            "4. Adding cases to reno queues.",
            "5. Tagging",
            "6. Opening Cases",
            "At the beginning of your shift, management will send a message with the RR rules for the day. These rules include exceptions and special directions. Share any DCP instructions from management in the AD | DCP group chat so everyone stays updated.",
            "The message will also include a list of CMs from the desk assignments and their RR order. You can find the RR list here: Teams → OURS Remote Work → General → CCR RR List. Open the tab for the current day (or create one if needed) and add the RNs in the order listed.",
            "Once the RR list is ready, prepare the case assignment tool by copying NUID's from the desk assignments spreadsheet. Ask PM's for help on assigning."
        ],
        options: [
            { label: "When do I assign to CCR?", next: "rrDetailsAD" },
            { label: "AD RR", next: "rrWorkFlowAD" },
        ],
    },
    rrDetailsAD: {
        message: [
            "CCR RR: All RR’s will come from one of these sources:",
            "1. UA's notifying of NKF verbal stability calls.",
            "2. Unassigned transfer orders or hh iv abx orders.",
            "3. Handoffs from CMA's back to CCR for RN needs.",
            "4. Management Requests."
        ],
        options: [
            { label: "Back to AD Intro", next: "adIntro" },
            { label: "Back to start", next: "start" }
        ],
    }
}