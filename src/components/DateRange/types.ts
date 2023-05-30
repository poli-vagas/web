type onChangeProps = [Date, Date]

export interface DateRangeProps {
  label: string
  marginVertical?: string
  marginHorizontal?: string
  startValue?: Date | undefined | null
  endValue?: Date | undefined | null
  onChange: (props: onChangeProps) => void
}
