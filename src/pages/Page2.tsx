import React from 'react'
import { useNavigate } from 'react-router-dom'

// import { Container } from './styles';

export const Page2: React.FC = () => {
  const navigate = useNavigate()

  const goto = (path: string) => {
    return () => {
      navigate(path)
    }
  }

  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={goto('/')}>Page Home</button>
      <button onClick={goto('/page1')}>Page 1</button>
      <button onClick={goto('/pageapp')}>Page App</button>
    </div>
  )
}
