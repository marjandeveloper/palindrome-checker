function palindrome(str) {
  const getStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  const splitStr = getStr.split('')
  const reversStr = splitStr.reverse()
  const joinStr = reversStr.join('')

  if (getStr === joinStr) {
    return true
  } else {
    return false
  }
}
palindrome('1 eye for of 1 eye.')

palindrome('eye')
