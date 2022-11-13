function replace(show) {
  const albums = ["pl-krnb", "pl-cpop", "pl-still-nights", "pl-sunset-drives", "pl-kbops", "pl-curr"];
  for (let i = 0; i < albums.length; i++) {
    document.getElementById(albums[i]).style.display = "none";
  }
  document.getElementById(show).style.display = "block";
}
