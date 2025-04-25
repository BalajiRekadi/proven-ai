import { DEMO_DOMAIN, DOMAIN, GLENMARK_DOMAIN } from "../constants/constants"

const getDomain = (client: string) => {
  if (client === "glenmark") return GLENMARK_DOMAIN
  if (client === "demo" || client === "Lupin") return DEMO_DOMAIN
  return DOMAIN
}

export default getDomain
