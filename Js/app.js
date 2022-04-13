console.log("welcome to my notes app");
displaynotes();

let btnadd = document.getElementById('btnadd');
btnadd.addEventListener("click", function (e) {

    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addTitle');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    let MyObj = {
        title: addtitle.value,
        text: addtxt.value,
    }
    notesobj.push(MyObj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    addtitle.value = "";
    console.log(notesobj);
    displaynotes();
})

function displaynotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.text}</p>
                <button id="${index}" class="btn btn-primary" onclick=deletenote(this.id)>Delete note</button>
            </div>
        </div>`;
    });
    let notesEle = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesEle.innerHTML = html;
    } else {
        notesEle.innerHTML = `Notes sab pappa ly gye naye mangao...!!!`;
    }

}
function deletenote(index) {
    console.log("Remove now.....", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);

    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    displaynotes();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function (element) {

    let inpVal = search.value.toLowerCase();
    let notesCard = document.getElementByClassName("card");
    Array.from(notesCard).forEach(function (element) {
        let cardtxt = element.getElementByTagName("p")[0].innerText;
        if (cardtxt.includes(inpVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});