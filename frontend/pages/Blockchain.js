import React from 'react'
import BlockchainHero from '../components/Courses/BlockChain/BlockchainHero'
import BlockchainIconSection from '../components/Courses/BlockChain/BlockchainIconSection'
import BlockchainDetail from '../components/Courses/BlockChain/BlockchainDetail'

const blockchain = () => {
  return (
    <div>
      <BlockchainHero/>
      <BlockchainIconSection/>
      <BlockchainDetail/>
    </div>
  )
}

export default blockchain
