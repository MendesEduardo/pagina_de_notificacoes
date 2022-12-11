function allCheck() {
  for (var c=0; c<4; c++) {
    var r = document.getElementsByTagName('span')[c]
    var x = document.getElementsByClassName('noticia')[c]
    r.style.display = "none"
    x.style.background = "none"
  }
}