import { InputHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";

declare type SalesActivityType = {
    href: string;
    number: number;
    color: string;
    unit: string;
    title: string;
};

declare type InventorySummaryType = {
    title: string;
    number: number;
};

declare type CollapseLinkType = {
    title: string;
    href: string;
};

declare type DropdownLinkType = {
    title: string;
    items: CollapseLinkType[];
    icon: React.ElementType;
};

declare type InventoryOptionType = {
    optionData: {
        title: string;
        description: string;
        link: string;
        linkTitle: string;
        enabled: boolean;
        imageUrl: string;
    }
};

declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    isRequired?: boolean;
    className?: string;
};

declare interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    name: string;
    isRequired?: boolean;
    className?: string;
};  

declare type SelectType = {
    label: string;
    name: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    className?: string;
    isRequired?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
};

declare type ImageInputType = {
    label: string;
    imageUrl: string;
    setImageUrl: (url: string) => void;
}; 