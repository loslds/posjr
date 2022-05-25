import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={goto('/page1')}>Page 1</button>
      <button onClick={goto('/page2')}>Page 2</button>
    </div>
  )
}
