import { DOMAIN, GLENMARK_DOMAIN } from '../constants/constants'

const getDomain = (client: string) => {
  if(client=== 'glenmark')
    return GLENMARK_DOMAIN
  return DOMAIN
}

export default getDomain;
