import * as dayjs from 'dayjs'

export const lastNday = (n: number, isContainToday = true, isExpand = false, filters: any) => {
  const result = []
  const end = dayjs().subtract(isContainToday ? 0 : 1, 'days')
  for (let i = 0; i < n; i++) {
    result.unshift(end.subtract(i, 'days').format('YYYY-MM-DD'))
  }
  if (!isExpand && result.length > 2) {
    return [result[0], result[result.length - 1]]
  }
  if (filters) {
    return filters(result)
  }

  return result
}
