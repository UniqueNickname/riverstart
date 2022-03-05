export const getEventValue = (event: Event): string => {
  const target = event.target

  if (!target) return ""

  // @ts-ignore
  return target.value || ""
}
