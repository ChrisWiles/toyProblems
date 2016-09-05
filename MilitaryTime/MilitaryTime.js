function toMilitary(time) {
  let hour = +time.slice(0, time.indexOf(':'))
  let min = time.substr(time.indexOf(':') + 1, 2)

  if (time.includes('pm')) {
    if (hour !== 12) hour += 12
    if (hour === 24) hour = '00'
  } else {
    if (hour < 10) hour = '0' + hour
    if (hour === 12) hour = '00'
  }

  return hour + ':' + min
}
