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
    sousId: 1000,
    stakingToken: tokens.wmatic,
    earningToken: tokens.deko,
    contractAddress: {
      97: '',
      137: '0xE2FcfadC9502F6fe7F2188fe5320eDF8f5aB2e2e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 2,
    isFinished: true,
  },
]

export default pools
