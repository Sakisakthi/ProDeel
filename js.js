const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
})




const paragraph = document.getElementById("editname");
const lead = document.getElementById("editLead");
const place = document.getElementById("editPlace");


const edt = document.getElementById("edt");
const sav1 = document.getElementById("savebtn");
sav1.style.display="none";

edt.addEventListener("click", function() {
  paragraph.contentEditable = true;
  lead.contentEditable = true;

  place.contentEditable = true;
  sav1.style.display="block";
  edt.style.display="none";


} );

sav1.addEventListener("click", function() {
  paragraph2.contentEditable = false;
} )
