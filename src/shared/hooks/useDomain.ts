import { useStore } from '../../store/useStore'
import { DOMAIN, GLENMARK_DOMAIN } from '../constants/constants'

const useDomain = () => {
  const {client} = useStore()
  return client === 'glenmark' ? GLENMARK_DOMAIN : DOMAIN;
}

export default useDomain;
