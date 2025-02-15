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
}