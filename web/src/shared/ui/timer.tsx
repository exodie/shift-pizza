import React, { useState, useEffect } from 'react'

interface CountdownTimerProps {
  initialSeconds: number
}

export function CountdownTimer({ initialSeconds }: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000)
      return () => clearTimeout(timerId)
    }
  }, [seconds])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-bold">{seconds > 0 ? seconds : "Time's up!"}</div>
    </div>
  )
}
