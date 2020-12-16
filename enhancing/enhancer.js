module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item, enhancement: item.enhancement < 20 ? item.enhancement += 1 : item.enhancement};
}

function fail(item) {
  if(item.enhancement >= 15 && item.enhacement < 16) {
    return {...item, durability: item.durability - 10}
  } else if (item.enhancement > 15 && item.enhancement > 16) {
    return {...item, durability: item.durability - 10, enhancement: item.enhancement - 1}
  } else if(item.enhancement < 15) {
    return {...item, durability: item.durability - 5}
  } else {
    return item
  }
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
