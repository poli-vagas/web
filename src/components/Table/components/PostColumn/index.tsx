import React from 'react'
import * as S from './styles'

interface PostColumnProps {
  text: string
  image: string
}

const PostColumn: React.FC<PostColumnProps> = ({ text, image }) => {
  return (
    <S.Container>
      {image && <img src={image} alt={text} />}

      <p>{text}</p>
    </S.Container>
  )
}

export default PostColumn
