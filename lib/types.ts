export type Step = {
    message: string | string[];
    options?: { label: string; next: string }[];
    allowFreeInput?: boolean;
    extraInfo?: {
        title: string;
        content: string | string[];
    };
};