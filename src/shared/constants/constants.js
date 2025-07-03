import { IconDatabase } from "@tabler/icons-react"
import GRADE_OPTIONS from "./grade"
import SAMPLING_POINT_OPTIONS from "./samplingPoints"
import STAGE_OPTIONS from "./stage"
import SPEC_TYPES from "./specTypes"
import BATCH_LINKS from "./batchLinks"
import BATCH_TEMPLATES from "./batchTemplates"
import COMPONENT_DEFAULTS from "./componentDefaults"
import COMPONENT_DOUBLE_CHECKS from "./componentDoubleChecks"
import COMPONENT_MANUALS from "./componentManuals"
import PRODUCT_SPEC_DEFAULTS from "./productSpecDefaults"
import PRODUCT_SPEC_DOUBLE_CHECKS from "./productSpecDoubleChecks"
import PRODUCT_SPEC_MANUALS from "./productSpecManuals"
import NAMES from "./names"
import NAMES_LUPIN from "./names_lupin"

const DOMAIN = "http://13.235.98.215:8003"
const GLENMARK_DOMAIN = "http://13.235.98.215:8000"
const DEMO_DOMAIN = "http://13.235.98.215:8000"
const LUPIN_DOMAIN = "http://13.235.98.215:8009"

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
]

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
}

const DEFAULT_TABLE_CONFIG = {
  initialState: { density: "xs" },
  enableTopToolbar: false,
  enableBottomToolbar: false,
  enableRowSelection: false,
  enableColumnOrdering: false,
  enableGlobalFilter: false,
  enableColumnActions: false,
  paginationDisplayMode: "pages",
  enableColumnFilters: false,
  enablePagination: false,
  enableSorting: false,
  enableStickyHeader: true,
}

const CLIENTS = {
  DEMO: {
    value: "demo",
    label: "DEMO",
  },
  DRL: {
    value: "DRL",
    label: "DRL",
  },
  GLENMARK: {
    value: "glenmark",
    label: "GLENMARK",
  },
  LUPIN: {
    value: "Lupin",
    label: "LUPIN",
  },
  NEULAND: {
    value: "neuland",
    label: "NEULAND",
  },
  SUN_PHARMA: {
    value: "Sunpharma",
    label: "SUN PHARMA",
  },
}

const MODULES = {
  CALIBER: { value: "Caliber", label: "Caliber" },
  LABWARE: { value: "Labware", label: "Labware" },
  LABVANTAGE: { value: "Labvantage", label: "LabVantage" },
}

export {
  ROUTES,
  THEME,
  DOMAIN,
  DEFAULT_TABLE_CONFIG,
  CLIENTS,
  MODULES,
  GRADE_OPTIONS,
  SAMPLING_POINT_OPTIONS,
  STAGE_OPTIONS,
  SPEC_TYPES,
  BATCH_LINKS,
  BATCH_TEMPLATES,
  COMPONENT_DEFAULTS,
  COMPONENT_DOUBLE_CHECKS,
  COMPONENT_MANUALS,
  PRODUCT_SPEC_DEFAULTS,
  PRODUCT_SPEC_DOUBLE_CHECKS,
  PRODUCT_SPEC_MANUALS,
  NAMES,
  NAMES_LUPIN,
  DEMO_DOMAIN,
  LUPIN_DOMAIN,
  GLENMARK_DOMAIN,
}
