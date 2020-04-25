export const requiredField = value => {
  if (value) return undefined;
  return 'Field is required';
}

export const maxLength = max => value => {
  if (value && value.length > max) return `Max length > ${max}`
  return undefined;
}

export const maxLength10 = maxLength(10)
