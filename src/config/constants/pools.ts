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
  
    {
    sousId: 1,
    stakingToken: tokens.deko,
    earningToken: tokens.wmatic,
    contractAddress: {
      97: '',
      56: '0xe2fcfadc9502f6fe7f2188fe5320edf8f5ab2e2e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.1',
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  
]

export default pools
