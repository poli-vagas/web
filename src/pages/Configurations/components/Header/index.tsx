import React, { useState } from 'react'
import { SelectFilter } from '~/components'
import { Sizes } from '~/components/Button/types'
import { PERIODS } from '~/constants/periods'
import * as S from './styles'

const Header: React.FC = () => {
  const [period, setPeriod] = useState(5)

  return (
    <S.Container>
      <SelectFilter
        id="period"
        name="period"
        value={period.toString()}
        size={Sizes.SMALL}
        backgroundWhite
        onChange={(e) => setPeriod(Number(e.currentTarget.value))}
        options={PERIODS}
      />
    </S.Container>
  )
}

export default Header
