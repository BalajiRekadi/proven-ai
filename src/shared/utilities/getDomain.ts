import {
  CLIENTS,
  DEMO_DOMAIN,
  DOMAIN,
  GLENMARK_DOMAIN,
  LUPIN_DOMAIN,
  PIRAMAL_DOMAIN,
  STRIDES_DOMAIN,
} from "../constants/constants"

const getDomain = (client: string) => {
  if (client === CLIENTS.GLENMARK.value) return GLENMARK_DOMAIN
  if (client === CLIENTS.DEMO.value) return DEMO_DOMAIN
  if (client === CLIENTS.LUPIN.value) return LUPIN_DOMAIN
  if (client === CLIENTS.STRIDES.value) return STRIDES_DOMAIN
  if (client === CLIENTS.PIRAMAL.value) return PIRAMAL_DOMAIN
  return DOMAIN
}

export default getDomain
