import React, { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt-BR'
import * as S from './styles'
import { DateRangeProps } from './types'

registerLocale('pt-BR', pt)
const DateRange: React.FC<DateRangeProps> = ({
  label,
  marginVertical,
  marginHorizontal,
  startValue,
  endValue,
  onChange
}) => {
  const [startDate, setStartDate] = useState(
    startValue ? startValue : new Date()
  )
  const [endDate, setEndDate] = useState(endValue ? endValue : new Date())

  return (
    <S.Wrapper
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
    >
      <S.Label>{label}</S.Label>
      <S.Container>
        <S.Input>
          <p>De:</p>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date)
              onChange([date, endDate])
            }}
            selectsStart
            dateFormat="dd/MM/yy"
            startDate={startDate}
            endDate={endDate}
          />
        </S.Input>
        <S.Input>
          <p>Até:</p>
          <DatePicker
            selected={endDate}
            onChange={(date: Date) => {
              setEndDate(date)
              onChange([startDate, date])
            }}
            selectsEnd
            dateFormat="dd/MM/yy"
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </S.Input>
      </S.Container>
    </S.Wrapper>
  )
}

export default DateRange
