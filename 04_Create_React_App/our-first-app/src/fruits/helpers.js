const choice = items => {
  return items[Math.floor(Math.random() * items.length)]
}

const remove = (items, item) => {
  return items.filter(i => {
    return i !== item
  })
}

export { choice, remove }
