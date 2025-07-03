import { CLIENTS, DEMO_DOMAIN, DOMAIN, GLENMARK_DOMAIN, LUPIN_DOMAIN } from '../constants/constants'

const getDomain = (client: string) => {
  if (client === CLIENTS.GLENMARK.value) return GLENMARK_DOMAIN
  if (client === CLIENTS.DEMO.value) return DEMO_DOMAIN
  if (client === CLIENTS.LUPIN.value) return LUPIN_DOMAIN
  return DOMAIN
}

export default getDomain
