// Käynnistää lomakkeen validoinnin ja kutsuu muita funktioita
// Kutsutaan onSubmit-tapahtumasta
function formValidation()
{
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex; 
    
    if ( userid_validation(uid,5,12) ) {
        if( passid_validation(passid,7,12) ) {
            if( allLetter(uname) ) {
                if( alphanumeric(uadd) ) { 
                    if( countryselect(ucountry) ) {
                        if( allnumeric(uzip) ) {
                            if( ValidateEmail(uemail) ){
                                if( validsex(umsex,ufsex) ) {
                                }
                            } 
                        }
                    } 
                }
            }
        }
    }
    return false;
} 


function userid_validation(uid, minLength,maxLength) {
    
var uid_len = uid.value.length;
    
    if (uid_len >= maxLength || uid_len < minLength) {
        alert("Käyttäjä ID ei pitäisi olla tyhjä / pituus välillä "+minLength+" to "+maxLength);
        uid.focus();
        return false;
    }
    
    return true;
}
                    
                    
function passid_validation(passid,mx,my) {

    var passid_len = passid.value.length;

    if (passid_len == 0 ||passid_len >= my || passid_len < mx){
    alert("Salasanan ei pitäisi olla tyhjä / pituus välillä "+mx+" to "+my);
    passid.focus();
    return false;}
    return true; }

function allLetter(uname) { 

    var letters = /^[A-Za-z]+$/;

    if(uname.value.match(letters)) {
    return true; }
    else{
    alert('Käyttäjänimessä täytyy olla vain kirjaimia');
    uname.focus();
    return false; }
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;

    if(uadd.value.match(letters))
    {
    return true;
    }
    else
    {
    alert('Käyttäjä osoitteessa täytyy olla vain numeroita');
    uadd.focus();
    return false;
}
}
function countryselect(ucountry){
    
        if(ucountry.value == "Default")
{
alert('Valitse maasi listalta');
ucountry.focus();
return false;
        }
        else{
        return true;}
        }

function allnumeric(uzip){ 

    var numbers = /^[0-9]+$/;
    
    if(uzip.value.match(numbers)){
    return true;}
    else{
    alert('Postinumerossa täytyy olla voin numeroita');
    uzip.focus();
    return false;}}

function ValidateEmail(uemail){
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(uemail.value.match(mailformat)){
    return true;}
    else{
    alert("Olet syöttänyt käyttämättömän sähköpostin!");
    uemail.focus();
    return false;}
    
} function validsex(umsex,ufsex)
{
x=0;

        if(umsex.checked) {
        x++;
        } if(ufsex.checked){
        x++; }
        if(x==0) {
        alert('Select Male/Female');
        umsex.focus();
        return false; }
        else {

alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
