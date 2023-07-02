/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Select, { ActionMeta, MultiValue, components } from 'react-select'
import { Container, InputCheckbox } from './styles'
import { RecordType } from 'zod'
import { theme } from '~/styles/theme'
import { transparentize } from 'polished'

const InputOption = ({
  getStyles,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}: any) => {
  const [isActive, setIsActive] = useState(false)
  const onMouseDown = () => setIsActive(true)
  const onMouseUp = () => setIsActive(false)
  const onMouseLeave = () => setIsActive(false)

  // styles
  let bg = 'transparent'
  if (isFocused) bg = '#F9F9F9'
  if (isActive) bg = '#F9F9F9'

  const style = {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: bg,
    color: 'inherit',
    display: 'flex ',
    height: '50px'
  }

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  }

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <InputCheckbox type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  )
}

type SelectCheckboxProps = {
  placeholder: string
  control?: any
  options: RecordType<string, string | number>[]
  name: string
  defaultValue?: RecordType<string, string | number>[]
  value?: RecordType<string, string | number>[]
  onBlur?: () => void
  onChange:
    | ((newValue: MultiValue<any>, actionMeta: ActionMeta<any>) => void)
    | undefined
}
const SelectCheckbox = ({ onChange, ...props }: SelectCheckboxProps) => {
  const [, setSelected] = useState<any[]>([])
  return (
    <Container>
      <Select
        isMulti
        placeholder={props.placeholder}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onBlur={props.onBlur}
        value={props.value}
        onChange={(options, action) => {
          setSelected(() => options.map((option) => option.value))
          if (onChange && options && action) {
            onChange(options, action)
          }
        }}
        name={props.name}
        defaultValue={props.defaultValue}
        options={props.options}
        styles={{
          option: (base) => ({
            ...base,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '100%',
            color: '#292929',
            cursor: 'pointer'
          }),
          control: (base) => ({
            ...base,
            border: `1px solid ${transparentize(0.8, theme.colors.primary)}`,
            borderRadius: '1rem',
            height: '3.93rem',
            overflow: 'auto'
          }),
          input: (base) => ({
            ...base,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            color: '#292929'
          }),
          placeholder: (base) => ({
            ...base,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            color: '#292929'
          }),
          multiValueLabel: (base) => ({
            ...base,
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '100%',
            color: '#292929'
          }),
          multiValueRemove: (base) => ({
            ...base,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
          }),
          indicatorsContainer: (base, props) => ({
            ...base,
            alignItems: props.hasValue ? 'flex-start' : 'center',
            justifyContent: 'center'
          }),
          dropdownIndicator: (base) => ({
            ...base,
            color: '#292929'
          }),
          indicatorSeparator: (base, props) => ({
            ...base,
            display: props.hasValue ? base.display : 'none'
          })
        }}
        components={{
          Option: InputOption
        }}
      />
    </Container>
  )
}

export default SelectCheckbox
