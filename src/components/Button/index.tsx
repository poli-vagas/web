import React from 'react'
import { VscLoading } from 'react-icons/vsc'
import * as S from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  outline,
  width,
  height,
  loading,
  marginHorizontal,
  marginVertical,
  size,
  color,
  rounded,
  disabled,
  ...rest
}) => (
  <S.Container
    type="button"
    outline={outline}
    width={width}
    height={height}
    marginHorizontal={marginHorizontal}
    marginVertical={marginVertical}
    size={size}
    color={color}
    rounded={rounded}
    disabled={disabled}
    {...rest}
  >
    {loading ? (
      <S.WrapperLoadgin>
        <VscLoading size={30} />
      </S.WrapperLoadgin>
    ) : (
      children
    )}
  </S.Container>
)

export default Button
