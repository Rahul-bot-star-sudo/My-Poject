const yearSelect = document.getElementById("year");
const warning = document.getElementById("warning");
const currentYear = new Date().getFullYear();
const startYear = 1900;
// add years in dropdown
for (let y = currentYear;  y >= startYear; y--)
{
    let option = document.createElement("option");
    option.value=y;
    option.textContent = y;
    yearSelect.appendChild(option);

}

// check year < 2004
yearSelect.addEventListener("change",function(){
    let selectedYear = parseInt(this.value);

    if (selectedYear < 2004){
        warning.textContent="School is started from 2004. Please select above 2004...";
        this.value="";
    } else {
        warning.textContent="";
    }
});

function showForm(){
    document.getElementById("formBox").style.display="block";
}
function cancelClick(){
    document.getElementById("formBox").style.display="none";
}