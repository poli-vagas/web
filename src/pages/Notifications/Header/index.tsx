import { useFormikContext } from 'formik'
import React, { useCallback } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Input, Select } from '~/components'
import * as S from './styles'
import { INITIAL_PARAMS } from '../types'
import { notification } from '~/constants'

const Header: React.FC = () => {
  const {
    values,
    handleChange,
    setFieldValue,
    handleSubmit
  } = useFormikContext<typeof INITIAL_PARAMS>()

  const handleSubmitFilter = useCallback(() => {
    setFieldValue('page', 1)
    handleSubmit()
  }, [handleSubmit, setFieldValue])

  return (
    <S.Container>
      <Input
        id="message"
        name="message"
        placeholder="Buscar pela notificação"
        value={values?.message || ''}
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

      <Input
        id="dateInit"
        name="dateInit"
        width="18rem"
        marginHorizontal="1rem"
        value={values?.dateInit || ''}
        type="date"
        leftIcon={() => <p>De:</p>}
        onBlur={() => handleSubmitFilter()}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e?.keyCode === 13) {
            handleSubmitFilter()
          }
        }}
      />

      <Input
        id="dateEnd"
        name="dateEnd"
        width="18rem"
        value={values?.dateEnd || ''}
        type="date"
        leftIcon={() => <p>Até:</p>}
        onBlur={() => handleSubmitFilter()}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e?.keyCode === 13) {
            handleSubmitFilter()
          }
        }}
      />

      <Select
        id="audience"
        name="audience"
        placeholder="Empresa"
        marginHorizontal="1rem"
        width="18rem"
        value={values?.audience || ''}
        options={notification.COMPANY_LIST}
        onChange={(e) => {
          setFieldValue('audience', e.currentTarget.value)
          handleSubmitFilter()
        }}
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
