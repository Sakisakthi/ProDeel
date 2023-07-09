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
  paragraph.contentEditable = false;
  lead.contentEditable = false;
  place.contentEditable = false;
  sav1.style.display = "none";
  edt.style.display = "block";

} );



const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const mail = document.getElementById("email");
const phone = document.getElementById("phn");
const bio = document.getElementById("bio");

const edtbtn = document.getElementById("edtbtn1");
const savbtn = document.getElementById("savbtn1");
savbtn.style.display="none";

edtbtn.addEventListener("click", function(){
  fname.contentEditable = true;
  lname.contentEditable = true;
  mail.contentEditable = true;
  phone.contentEditable = true;
  bio.contentEditable = true;
   
  savbtn.style.display = "block";
  edtbtn.style.display = "none";
});
savbtn.addEventListener("click", function() 
{
  fname.contentEditable = false;
  lname.contentEditable = false;
  mail.contentEditable = false;
  phone.contentEditable = false;
  bio.contentEditable = false;
  savbtn.style.display = "none";
  edtbtn.style.display = "block";

});





const countryplace = document.getElementById ("country1");
const  stateplace = document.getElementById("state");
const  statepincode = document.getElementById("pincode");
const  staxid = document.getElementById("taxid");

const editbutton3 = document.getElementById("editbutton3");
const savebutton3 = document.getElementById("savebutton3");
savebutton3.style.display = "none";

editbutton3.addEventListener("click", function()
{
  countryplace.contentEditable = true;
  stateplace.contentEditable = true;
  statepincode.contentEditable = true;
  staxid.contentEditable = true;
  
  editbutton3.style.display = "none";
  savebutton3.style.display = "block";

});

savebutton3.addEventListener("click",function()
{
  countryplace.contentEditable = false;
  stateplace.contentEditable = false;
  statepincode.contentEditable = false;
  staxid.contentEditable = false;

  editbutton3.style.display ="block";
  savebutton3.style.display = "none"
});


