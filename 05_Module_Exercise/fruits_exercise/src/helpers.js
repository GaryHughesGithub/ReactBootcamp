function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove(items,item) {
  let fruit = items.splice(items.indexOf(item),1);
  return fruit
}



export {choice, remove};
