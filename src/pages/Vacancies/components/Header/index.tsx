import { useFormikContext } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'
import { BiFilterAlt } from 'react-icons/bi'
import { MdAlternateEmail } from 'react-icons/md'

import { Button, Input, SelectFilter } from '~/components'
import { Sizes } from '~/components/Button/types'
import * as S from './styles'
import { INITIAL_PARAMS } from '../../types'
import { periods, vacancy } from '~/constants'
import { money } from '~/utils/money'

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
    setFieldValue('notification', false)
    handleSubmit()
  }, [handleSubmit, setFieldValue])

  const handleSubmitNotification = useCallback(() => {
    setFieldValue('page', 1)
    setFieldValue('notification', true)
    handleSubmit()
  }, [handleSubmit, setFieldValue])

  const handleChangeMinCreatedTime = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFieldValue('filter.minCreatedTime', e.currentTarget.value)
      handleSubmitFilter()
    },
    [handleSubmitFilter, setFieldValue]
  )

  const handleChangeMinSalary = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text =
        Number(e.target.value.replace(/\D/g, '').replace(',', '.')) / 100
      setFieldValue('filter.minSalary', text)
    },
    [setFieldValue]
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
        {/* <Input
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
        /> */}
        <div>
          <S.ButtonAdvancedFilter
            active={advancedFilter}
            onClick={() => setAdvancedFilter(!advancedFilter)}
          >
            Filtros avançados <BiFilterAlt size={18} />
          </S.ButtonAdvancedFilter>

          <SelectFilter
            id="minCreatedTime"
            name="minCreatedTime"
            value={values?.filter.minCreatedTime?.toString() ?? '0'}
            size={Sizes.SMALL}
            backgroundWhite
            onChange={handleChangeMinCreatedTime}
            options={periods.PERIODS}
          />
        </div>
      </S.RowFilter>
      {advancedFilter && (
        <>
          <S.AdvancedFilterGroup>
            <Input
              id="minSalary"
              name="minSalary"
              placeholder="Salário Mínimo"
              value={`R$ ${money(Number(values?.filter.minSalary ?? 0))}`}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChangeMinSalary}
            />
            <SelectFilter
              id="filter.minHoursPerDay"
              name="filter.minHoursPerDay"
              placeholder="Mínimo de horas por dia"
              value={values.filter.minHoursPerDay?.toString() || ''}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChange}
              options={vacancy.HOURS_PER_DAY_LIST}
            />
            <SelectFilter
              id="filter.maxHoursPerDay"
              name="filter.maxHoursPerDay"
              placeholder="Máximo de horas por dia"
              value={values.filter.maxHoursPerDay?.toString() || ''}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChange}
              options={vacancy.HOURS_PER_DAY_LIST}
            />
            <SelectFilter
              id="type"
              name="type"
              placeholder="Tipo"
              value={values.filter.type?.toString() || ''}
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
            <Button
              height="4rem"
              width="24rem"
              justifyContent="center"
              marginVertical="2rem"
              type="button"
              onClick={() => handleSubmitNotification()}
            >
              <MdAlternateEmail />
              {' '}Notificar filtro atual
            </Button>
          </S.RowFilterButton>
        </>
      )}
    </S.Container>
  )
}

export default Header
