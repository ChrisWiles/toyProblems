const firstNonRepeatedCharacter = s => s.split('').filter(char => s.split('').filter(ele => ele === char).length === 1)[0] || 'sorry'
