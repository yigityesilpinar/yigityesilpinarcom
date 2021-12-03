/* eslint-disable */
function validateEmail(value) {
  return [
    handleRequired(value, 'Email is required'),
    handleEmailFormat(value),
  ].filter((v) => !!v)
}

const handleEmailFormat = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : 'Invalid email address format'

const handleRequired = (value, message = 'Password is required') =>
  value ? undefined : message

const handleLength = (length) => (value) =>
  value.length < length ? 'Password must be 3 characters at minimum' : undefined

function validatePassword(value) {
  return [handleRequired(value), handleLength(3)(value)].filter((v) => !!v)
}

console.log(validatePassword(''))
console.log(validatePassword('1'))

console.log(validateEmail('1334'))
