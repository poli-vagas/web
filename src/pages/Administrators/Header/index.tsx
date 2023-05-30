import { useFormikContext } from 'formik'
import React, { useCallback, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Button, Input } from '~/components'
import * as S from './styles'
import { INITIAL_PARAMS } from '../types'
import { useLocation, useNavigate } from 'react-router'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormikContext<typeof INITIAL_PARAMS>()

  const handleOpenModal = useCallback(() => {
    navigate('/dash/administrators/new', {
      replace: true,
      state: { backgroundLocation: location }
    })
  }, [location, navigate])

  const handleSubmitFilter = useCallback(() => {
    setFieldValue('page', 1)
    handleSubmit()
  }, [handleSubmit, setFieldValue])

  useEffect(() => {
    handleSubmitFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <Button
        height="4rem"
        width="auto"
        onClick={handleOpenModal}
        style={{
          whiteSpace: 'nowrap',
          padding: '0 4.4rem',
          marginRight: '1rem'
        }}
      >
        Adicionar
      </Button>
      <Input
        id="name"
        name="name"
        placeholder="Buscar pelo nome"
        value={values?.name || ''}
        leftIcon={() => (
          <AiOutlineSearch
            size={25}
            style={{ cursor: 'pointer' }}
            onClick={() => handleSubmitFilter()}
          />
        )}
        backgroundWhite
        onBlur={() => handleSubmitFilter()}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e?.keyCode === 13) {
            handleSubmitFilter()
          }
        }}
      />
    </S.Container>
  )
}

export default Header
