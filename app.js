const form = document.getElementById("searchForm");
form.addEventListener("submit",async function(e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: {q: searchTerm}}
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value="";
})

// const makeImages = (shows) => {
//   for(let result of shows) {
//     const img = document.createElement("IMG");
//     img.src = result.show.image.medium;
//     document.body.append(img);
//   }
// }

function makeImages(shows) {
  for (var i = 0; i < shows.length; i++) {
    if (shows[i].show.image) {
      const img = document.createElement("IMG");
      img.src = shows[i].show.image.medium;
      document.body.append(img);
    }
  }  
}