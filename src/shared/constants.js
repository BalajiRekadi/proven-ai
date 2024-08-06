import { IconDatabase } from "@tabler/icons-react";

const DOMAIN = "https://2999-49-205-251-99.ngrok-free.app";

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
  enableStickyHeader: true,
};

const DETAILS ={
  sucess:"Deatils saved successfully",
  fail:"Failed to save details"
}
const WORKSHEET={
  load:"Worksheet details are loading..",
  loadOnSucess:"Worksheet details have been loaded successfully",
  loadingContent:"Loading worksheet content..",
  loadingContentSuccess:"Worksheet content loaded successfully"
}
const PRODUCT_DETAILS={
  load:"Generating product details",
  success:"Generated product details successfully"
}
const ACCORDION_TABLE_DETAILS={
  info:"Content copied to clipboard",
  fail:"Failed to copy"
}
const IMPORT_DOCS_DETAILS = {
  load:"Files upload is in progress.." ,
  success:"Files uploaded successfully" ,
  loadProcess:"Files processing is in progress",
  loadProcessSuccess:"Files processed successfully",
  info:"Please upload Files"
}

export { ROUTES, THEME, DOMAIN, DEFAULT_TABLE_CONFIG,DETAILS,WORKSHEET,PRODUCT_DETAILS,ACCORDION_TABLE_DETAILS,IMPORT_DOCS_DETAILS};
