let rev = (s) => s === '' ? '' : rev(s.substr(1)) + s[0]
