evenOccurrence = arr => arr.filter(i => arr.filter(a => a === i).length % 2 == 0)[0] || null
