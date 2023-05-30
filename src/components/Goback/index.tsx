import React from 'react'
import { GobackProps } from './types'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Goback: React.FC<GobackProps> = ({
  path,
  size = 25,
  title = 'Voltar',
  handleClick = () => null
}) => {
  return (
    <S.Container size={size}>
      <Link to={path} onClick={handleClick}>
        <AiOutlineArrowLeft size={size} color="black" /> {title}
      </Link>
    </S.Container>
  )
}

export default Goback
