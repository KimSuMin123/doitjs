function displayFavorites(first, ...favs) {
    let str = `가장 좋아하는 과일은 "${first}"군요`;
    return str;
}
  
console.log(displayFavorites("레몬", "사과", "포도", "토마토"));