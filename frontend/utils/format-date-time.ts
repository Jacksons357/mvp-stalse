export function formatDateTime(dateString: string) {
  const date = new Date(dateString)

  const datePart = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const timePart = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return `${datePart} às ${timePart}`
}
