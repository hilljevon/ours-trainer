import { Step } from "@/lib/types";

export const dcpFlow: Record<string, Step> = {
    dcpIntro: {
        message: [
            "DCP works with CMA's and REF RN for discharge planning (DME, HH, SNF, ARU, Hospice) and referral cases. Click for more info:",
        ],
        options: [
            { label: "Workflow", next: "dcpWorkflow" },
            { label: "DCP Tagging", next: "dcpTagging" },
            { label: "RR Workflow", next: "rrWorkFlowAD" },
            { label: "DCP Calls", next: "dcpCalls" },
        ],
    },
    dcpTagging: {
        message: [
            "When opening rightfax, if you scroll to the following directory Other Users >> OURS-REFERRAL-888 >> Main. All DCP + REF UA's are responsible for helping tag + open all cases. See instructions on AD tagging for how to tag.",
        ],
        options: [
            { label: "How to Tag (from AD)", next: "howToTagAD" },
            { label: "DCP Workflow", next: "dcpWorkflow" },
            { label: "Back to DCP Intro", next: "dcpIntro" },
        ],
    },
    dcpWorkflow: {
        message: [
            "At the beginning of your DCP shift, you will be added to a couple groupchats:",
            "1. A main DCP chat, which contains all DCP/REF UA's + CMA's + ACS.",
            "2. An ACS groupchat, with DCP UA's + ACS people.",
            "3. An AD DCP groupchat with AD RR + DCP UA's"
        ],
        options: [
            { label: "Main DCP Groupchat", next: "dcpMainGroupchat" },
            { label: "ACS Groupchat", next: "acsGroupchat" },
            { label: "AD DCP Groupchat", next: "adDcpGroupchat" },
            { label: "DCP Calls", next: "dcpCalls" },
            { label: "Back to DCP Intro", next: "dcpIntro" },
        ],
    },
    dcpCalls: {
        message: [
            "Opstel will be Analyst DCP. Some examples of calls that may happen are:",
            "1. NKF wanting to initiate placement for SNF, ARU or process orders for HH/DME.",
            "2: NKF following up on either ARU/SNF placement or DME/HH orders that were sent to us",
            "First confirm if orders were sent yet. If not, provide OURS fax number and advise to fax so we may work on placement.",
            "If orders already sent, best course of action is checking reno note for updates.",
            "Typically, placement takes a few days so there may not be an update right that second. It's important to relay the info appropriately to NKF's, saying we are actively managing and checking daily for bed availability."
        ],
        options: [
            { label: "Main DCP Groupchat", next: "dcpMainGroupchat" },
            { label: "ACS Groupchat", next: "acsGroupchat" },
            { label: "AD DCP Groupchat", next: "adDcpGroupchat" },
            { label: "DCP Calls", next: "dcpCalls" },
            { label: "Back to DCP Intro", next: "dcpIntro" },
        ],
    },
    adDcpGroupchat: {
        message: [
            "AD RR will ask for any CCR or REF cases to be reassigned to CMA desk for DCP needs, see DCP RR for more details. DCP will assign accordingly and update AD with which CMA was assigned. Any cases that need to be RR'd back to CCR can be communicated to AD through here.",
        ],
        options: [
            { label: "DCP RR", next: "dcpRR" },
            { label: "Back to DCP Workflows", next: "dcpWorkflow" },
            { label: "Main DCP Groupchat", next: "dcpMainGroupchat" },
            { label: "Back to DCP Intro", next: "dcpIntro" },
        ],
    },
    acsGroupchat: {
        message: [
            "All communication with ACS will be here. Some examples of the requests that ACS may ask for is:",
            "1. Opening up a REF case, confirming if patient SIH.",
            "2. Re-opening a REF case as a claims case.",
            "3. Sending message to PCP office for outpatient follow up.",
            "UA's are responsible for notifying ACS of the following: OP Therapy Orders, auth ext requests, and special DME sizing."
        ],
        options: [
            { label: "Back to DCP Workflow", next: "dcpWorkflow" },
            { label: "DCP Intro", next: "dcpIntro" },
        ],
    },
    dcpMainGroupchat: {
        message: [
            "You and your CMA may communicate through this groupchat or a private groupchat. If there are any requests for UA's sharing a CMA, you may also find these requests in this groupchat.",
            "Additionally, all RR's to CMA's will be in this groupchat. Click below for info on RR to CMA's. Examples of things CMA's may request help on:",
            "1. Checking if patient SIH",
            "2. Confirming DME with APRIA or other vendor.",
            "3. Calling SNF/ARU admissions for acceptance.",
            "4. Letters",
            "5. Engagements."
        ],
        options: [
            { label: "DCP RR's", next: "dcpRR" },
            { label: "Main DCP Groupchat", next: "dcpMainGroupchat" },
            { label: "Back to DCP Intro", next: "dcpIntro" },
        ],
    },
    dcpRR: {
        message: [
            "All RR's are tracked in the main DCP spreadsheet. The spreadsheet can be found under OURS Remote Work 2023 > DCP >Files > DCP RR List - CURRENT MONTH.",
            "Once spreadsheet is open, navigate to the current date and wait for all CMA's to confirm they are 'updated'. They will message in the DCP Groupchat  once they are, and this means they have updated their RR list with all the cases they plan on working on for the day.",
            "At the top row, you can see a CMA's name followed by: number of placements and cutoff times.",
            "Placements equals all SNF and ARU placements that CMA will be working on. When assigning a new SNF/ARU, we go left to right assigning first to whoeever has the lowest number of placements. We disregard if one CMA has more total cases then another. Once we add the case to their list, we notify them in the main DCP groupchat and update their placement #. Be sure to notify AD in AD | DCP groupchat so CMA has the new case in their reno queue."
        ],
        options: [
            { label: "DCP RR's", next: "dcpRR" },
            { label: "Main DCP Groupchat", next: "howToTagAD" },
            { label: "Back to DCP Intro", next: "dcpIntro" },
        ],
    }
}