export const getEventValue = (event: Event): string => {
  const target = event.target

  if (!target) return ''

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return target.value || ''
}
