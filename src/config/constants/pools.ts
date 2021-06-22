import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.deko,
    earningToken: tokens.deko,
    contractAddress: {
      97: '',
      137: '0x12E577d8DAC8548a78578f77852061E619d1a959',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
  },
  
]

export default pools
