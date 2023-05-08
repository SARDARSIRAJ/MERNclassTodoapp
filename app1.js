var list = document.getElementById("list");
var todo_inp = document.getElementById('todo_inp')
function getTime() {
    var today = new Date();
    var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return time;
}
getTime()

function addtxt() {
    var obj = {
        todo_inp: todo_inp.value,
        time: getTime(),
    };

    var li = document.createElement('li')
    li.setAttribute("class", "li")
    var litxt = document.createTextNode(obj.todo_inp)
    li.appendChild(litxt)


    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("onclick", "editbtn(this)")
    editbtn.appendChild(edittext)

    var dltbtn = document.createElement("button")
    var dlttxt = document.createTextNode("Delete")
    dltbtn.setAttribute("onclick", "dltbtn(this)")
    dltbtn.appendChild(dlttxt)

    li.appendChild(editbtn)
    li.appendChild(dltbtn)

    var span = document.createElement("span")
    span.setAttribute("class", "span")
    var spantxt = document.createTextNode(obj.time);
    span.appendChild(spantxt)
    li.appendChild(span)

    list.appendChild(li)
    todo_inp.value = ""
}

function deleteall() {
    list.innerHTML = ""
}
function editbtn(e) {
    var val = prompt("update Your task", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
    console.log(val)
}

function dltbtn(e) {
    e.parentNode.remove()
}