export const chartConfig = `
export interface ChartConfig {
  size: Size
  margin: Margin
  direction: 'horizontal' | 'vertical'
  axis: ChartAxis
}
`

export const margin = `
export interface Margin {
  top: number
  right: number
  bottom: number
  left: number
}
`
export const size = `
export interface Size {
  width: number
  height: number
}
`

export const axis = `
export interface ChartAxis {
  primary: AxisConfig
  secondary: AxisConfig
}

export type Domain = [string | number, string | number]
export type ScaleType = 'band' | 'linear'

export interface AxisConfig {
  domain: Domain
  type: ScaleType
  format?: (val: string) => string
  ticks?: number
  tickValues?: any[]
}
`

export const axisDefault = `
{
  primary: {
    domain: ['dataMin', 'dataMax'],
    type: 'band'
  },
  secondary: {
    domain: ['dataMin', 'dataMax'],
    type: 'linear'
  }
}
`

export const axisConfig = `

`
