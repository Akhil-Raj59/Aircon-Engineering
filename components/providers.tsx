"use client"

import { atom, useSetAtom } from "jotai"
import { useEffect } from "react"

export const entryUrlAtom = atom("")


export function Providers({ children }: { children: React.ReactNode }) {
  const setEntryUrl = useSetAtom(entryUrlAtom)

  useEffect(() => {
    setEntryUrl(window.location.href)
    
  }, [])

  return <>{children}</>
}
