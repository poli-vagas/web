import { useFormikContext } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiFilterAlt } from 'react-icons/bi'
import { Button, Input, SelectFilter } from '~/components'
import { Sizes } from '~/components/Button/types'
import * as S from './styles'
import { INITIAL_PARAMS } from '../../types'
import { periods, vacancy } from '~/constants'

const Header: React.FC = () => {
  const [advancedFilter, setAdvancedFilter] = useState(false)
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm
  } = useFormikContext<typeof INITIAL_PARAMS>()

  const handleSubmitFilter = useCallback(() => {
    setFieldValue('page', 1)
    handleSubmit()
  }, [handleSubmit, setFieldValue])

  const handleChangePeriod = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const period = Number(e.currentTarget.value)
      setFieldValue('period', period)
      handleSubmitFilter()
    },
    [handleSubmitFilter, setFieldValue]
  )

  const handleClearFilter = useCallback(() => {
    resetForm()
    handleSubmitFilter()
  }, [handleSubmitFilter, resetForm])

  useEffect(() => {
    handleSubmitFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <S.RowFilter>
        <Input
          id="name"
          name="name"
          placeholder="Buscar por nome"
          value={values.name || ''}
          rightIcon={() => (
            <AiOutlineSearch
              size={25}
              style={{ cursor: 'pointer' }}
              onClick={() => handleSubmitFilter()}
            />
          )}
          backgroundWhite
          onChange={handleChange}
          onBlur={() => handleSubmitFilter()}
          onKeyDown={(e) => {
            if (e?.keyCode === 13) {
              handleSubmitFilter()
            }
          }}
          width="auto"
        />
        <div>
          <S.ButtonAdvancedFilter
            active={advancedFilter}
            onClick={() => setAdvancedFilter(!advancedFilter)}
          >
            Filtros avançados <BiFilterAlt size={18} />
          </S.ButtonAdvancedFilter>

          <SelectFilter
            id="period"
            name="period"
            value={values?.period?.toString() || '0'}
            size={Sizes.SMALL}
            backgroundWhite
            onChange={handleChangePeriod}
            options={periods.PERIODS}
          />
        </div>
      </S.RowFilter>
      {advancedFilter && (
        <>
          <S.AdvancedFilterGroup>
            <SelectFilter
              id="salary"
              name="salary"
              placeholder="Salário"
              value={values?.salary || ''}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChange}
              options={vacancy.SALARY_LIST}
            />
            <SelectFilter
              id="hoursPerDay"
              name="hoursPerDay"
              placeholder="Horas por dia"
              value={values.hoursPerDay?.toString() || ''}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChange}
              options={vacancy.HOURS_PER_DAY_LIST}
            />
            <SelectFilter
              id="type"
              name="type"
              placeholder="Tipo"
              value={values.type?.toString() || ''}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChange}
              options={vacancy.TYPE_LIST}
            />
          </S.AdvancedFilterGroup>

          <S.RowFilterButton>
            <Button
              height="4rem"
              width="14rem"
              marginVertical="2rem"
              type="button"
              onClick={() => handleSubmitFilter()}
            >
              Filtrar
            </Button>
            <Button
              height="4rem"
              width="14rem"
              marginVertical="2rem"
              marginHorizontal="2rem"
              type="reset"
              outline
              onClick={() => handleClearFilter()}
            >
              Limpar
            </Button>
          </S.RowFilterButton>
        </>
      )}
    </S.Container>
  )
}

export default Header
