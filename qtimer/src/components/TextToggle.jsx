import { useState } from 'react'

export default function TextToggle({ items }) {
  const [index, setIndex] = useState(0)

  return (
    <span onClick={() => setIndex((i) => (i + 1) % items.length)}>
      {items[index]}
    </span>
  )
}
