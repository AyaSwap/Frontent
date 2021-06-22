import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 8,
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
  {
    sousId: 183,
    stakingToken: tokens.wmatic,
    earningToken: tokens.deko,
    contractAddress: {
      97: '',
      137: '0x55865E27b8f8018fEEbBEa0Fb410f60330f4DDEA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1',
  },
]

export default pools
