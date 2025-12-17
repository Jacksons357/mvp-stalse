type TicketsPerMonthApi = Record<
  string,
  { month: number; count: number }[]
>

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function formatTicketsPerMonth(
  data: TicketsPerMonthApi,
) {
  return MONTHS.map((label, index) => {
    const month = index + 1

    const row: any = {
      date: label,
    }

    Object.entries(data).forEach(([year, values]) => {
      const found = values.find(v => v.month === month)
      row[`year${year}`] = found?.count ?? 0
    })

    return row
  })
}
