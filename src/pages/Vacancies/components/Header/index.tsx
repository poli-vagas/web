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
import SelectCheckbox from '~/components/SelectCheckbox'
import useStore from '~/store'
import { NameId } from '~/services/vacancies/types'
import { capitalize } from '~/utils/string'

const Header: React.FC = () => {
  const { companies, courses } = useStore((store) => ({
    companies: store.companies,
    courses: store.courses
  }))
  const [advancedFilter, setAdvancedFilter] = useState(false)
  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm
  } = useFormikContext<typeof INITIAL_PARAMS>()
  const companyOptions = companies?.map?.((item: NameId) => ({
    value: item.id,
    label: capitalize(item.name)
  }))
  const courseOptions = courses?.map?.((item: NameId) => ({
    value: item.id,
    label: capitalize(item.name)
  }))

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
  // console.log(values)

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
            options={periods.LAST_PERIODS}
          />
        </div>
      </S.RowFilter>
      {advancedFilter && (
        <>
          <S.AdvancedFilterGroup>
            <SelectCheckbox
              name="filter.companyId"
              placeholder="Empresa"
              options={companyOptions}
              value={
                companyOptions
                  ? companyOptions.filter((option) =>
                      values.filter.companyId?.includes?.(option.value)
                    )
                  : []
              }
              onChange={(options) =>
                setFieldValue(
                  'filter.companyId',
                  options.map((option) => option.value)
                )
              }
            />
            <SelectCheckbox
              name="filter.type"
              placeholder="Tipo"
              options={vacancy.TYPE_LIST}
              value={vacancy.TYPE_LIST.filter((option) =>
                values.filter.type?.includes?.(option.value)
              )}
              onChange={(options) =>
                setFieldValue(
                  'filter.type',
                  options.map((option) => option.value)
                )
              }
            />
            <SelectCheckbox
              name="filter.courseId"
              placeholder="Curso"
              options={courseOptions}
              value={
                courseOptions
                  ? courseOptions.filter((option) =>
                      values.filter.courseId?.includes?.(option.value)
                    )
                  : []
              }
              onChange={(options) =>
                setFieldValue(
                  'filter.courseId',
                  options.map((option) => option.value)
                )
              }
            />
            <SelectFilter
              id="minLimitDate"
              name="minLimitDate"
              placeholder="Prazo mínimo para inscrção"
              value={values?.filter.minLimitDate?.toString() ?? '0'}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={(e) =>
                setFieldValue('filter.minLimitDate', e.currentTarget.value)
              }
              options={periods.NEXT_PERIODS}
            />
            <SelectFilter
              id="maxLimitDate"
              name="maxLimitDate"
              placeholder="Prazo máximo para inscrção"
              value={values?.filter.maxLimitDate?.toString() ?? '0'}
              size={Sizes.SMALL}
              backgroundWhite
              onChange={(e) =>
                setFieldValue('filter.maxLimitDate', e.currentTarget.value)
              }
              options={periods.NEXT_PERIODS}
            />
            <SelectCheckbox
              name="filter.area"
              placeholder="Área"
              options={vacancy.AREA_LIST}
              value={vacancy.AREA_LIST.filter((option) =>
                values.filter.area?.includes?.(option.value)
              )}
              onChange={(options) =>
                setFieldValue(
                  'filter.area',
                  options.map((option) => option.value)
                )
              }
            />
            <SelectCheckbox
              name="filter.workplace"
              placeholder="Espaço de trabalho"
              options={vacancy.WORKPLACE_LIST}
              value={vacancy.WORKPLACE_LIST.filter((option) =>
                values.filter.workplace?.includes?.(option.value)
              )}
              onChange={(options) =>
                setFieldValue(
                  'filter.workplace',
                  options.map((option) => option.value)
                )
              }
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
            <Input
              id="filter.minSalary"
              name="filter.minSalary"
              placeholder="Salário Mínimo"
              value={
                values?.filter.minSalary
                  ? `R$ ${money(Number(values?.filter.minSalary ?? 0))}`
                  : ''
              }
              size={Sizes.SMALL}
              backgroundWhite
              onChange={handleChangeMinSalary}
            />
            <SelectCheckbox
              name="filter.benefits"
              placeholder="Benefícios"
              options={vacancy.BENEFITS_LIST}
              value={vacancy.BENEFITS_LIST.filter((option) =>
                values.filter.benefits?.includes?.(option.value)
              )}
              onChange={(options) =>
                setFieldValue(
                  'filter.benefits',
                  options.map((option) => option.value)
                )
              }
            />
            <SelectCheckbox
              name="filter.englishLevel"
              placeholder="Nível de inglês"
              options={vacancy.ENGLISH_LEVEL_LIST}
              value={vacancy.ENGLISH_LEVEL_LIST.filter((option) =>
                values.filter.englishLevel?.includes?.(option.value)
              )}
              onChange={(options) =>
                setFieldValue(
                  'filter.englishLevel',
                  options.map((option) => option.value)
                )
              }
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
