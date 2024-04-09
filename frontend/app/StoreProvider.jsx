'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import { registerStudent } from '../lib/features/application/applicationSlice'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(registerStudent(applicationData))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}