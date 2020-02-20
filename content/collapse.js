var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
		var rect = this.getBoundingClientRect();
		var top = rect.top + window.pageYOffset;
		var middle = top - window.innerHeight / 2;
		window.scrollTo(0, middle);
  });
}