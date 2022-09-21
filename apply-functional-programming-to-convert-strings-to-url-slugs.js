// Only change code below this line
function urlSlug(title) {
  let urlTit = title.toLowerCase (title);
  urlTit = urlTit.trim()
  ;
  let urlTit1 = urlTit.split(/\s+/);
//console.log(urlTit1)
 

  let urlJoin = urlTit1.join("-");
console.log(urlJoin)

  return urlJoin;
console.log(urlJoin)

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug(" Winter Is  Coming")