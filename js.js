const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
})




const paragraph = document.getElementById("edit");
const edt = document.getElementById("edt");
const sav1 = document.getElementById("sav1");

edt.addEventListener("click", function() {
  paragraph.contentEditable = true;

} );

sav1.addEventListener("click", function() {
  paragraph2.contentEditable = false;
} )
