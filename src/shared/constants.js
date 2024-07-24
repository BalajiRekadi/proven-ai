import { IconDatabase } from "@tabler/icons-react";

const DOMAIN =
  "https://8df4-2405-201-c03a-a1f1-8493-81f2-6680-8b27.ngrok-free.app";

const ROUTES = [
  {
    label: "Master Data",
    logo: IconDatabase,
    children: [
      {
        label: "Create",
        name: "create",
      },
      {
        label: "Spec Details",
        name: "spec",
      },
      {
        label: "Exported",
        name: "exported",
      },
    ],
  },
];

const THEME = {
  primaryColor: "proven",
  colors: {
    proven: [
      "#f0f1f9",
      "#dedfed",
      "#b9bcdb",
      "#9398cc",
      "#7279be",
      "#5e65b5",
      "#525bb2",
      "#444b9d",
      "#3b428d",
      "#31397d",
    ],
  },
};

const DEFAULT_TABLE_CONFIG = {
  initialState: { density: "xs" },
  enableTopToolbar: false,
  enableBottomToolbar: false,
  enableRowSelection: false,
  enableColumnOrdering: false,
  enableGlobalFilter: false,
  enableColumnActions: false,
  enableColumnFilters: false,
  enablePagination: false,
  enableSorting: false,
};

export { ROUTES, THEME, DOMAIN, DEFAULT_TABLE_CONFIG };
