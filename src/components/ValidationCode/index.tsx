import React, { FormEvent, useCallback } from 'react'
import { Container, Code } from './styles'
import { ValidationCodeProps } from './types'
const values = ['', '', '', '']

const ValidationCode: React.FC<ValidationCodeProps> = ({ setCode }) => {
  const handleNextFocus = useCallback((e) => {
    const { id } = e.currentTarget
    if (Number(id) < 3) {
      const nextId = (Number(id) + 1).toString()
      const element = document.getElementById(nextId)
      element && element.focus()
    }
  }, [])

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget
    values.splice(Number(id), 1, value)
    setCode(values.join(''))
  }

  return (
    <Container>
      <Code id="0" name="0" onKeyUp={handleNextFocus} onChange={handleChange} />
      <Code id="1" name="1" onKeyUp={handleNextFocus} onChange={handleChange} />
      <Code id="2" name="2" onKeyUp={handleNextFocus} onChange={handleChange} />
      <Code id="3" name="3" onKeyUp={handleNextFocus} onChange={handleChange} />
    </Container>
  )
}

export default React.memo(ValidationCode)
