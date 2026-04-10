function chooseRandomCategory(categories) {
  var randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}
