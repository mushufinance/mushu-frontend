import tokens from './tokens'
import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: null,
    lpSymbol: 'MUSHU-RNA LP',
    lpAddresses: {
      80: '0xad0b3bbe1046ee73b3527cd9cdf6f44fa4f9904f',
      8080: '0xad0b3bbe1046ee73b3527cd9cdf6f44fa4f9904f',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
]

export default priceHelperLps
