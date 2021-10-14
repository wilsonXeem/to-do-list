// create a 'close' button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//add a 'checked' symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);
var y = 1
//create a new list item when clicking on the 'add' button
var newElement = (function closure() {
    var p = 0


    function newelement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === "") {
            document.getElementById("myInput").focus()
            return
        } else {

            var mun = Number(localStorage.getItem('num'))
            for (let i = 1; i < mun - 1; i++) {
                
                var item = localStorage.getItem(`task${i}`)
                if (item == inputValue) {
                    document.getElementById("myInput").value = '';
                    document.getElementById("myInput").focus();
                    return
                }
            }

                document.getElementById("myUL").appendChild(li);
                if (localStorage.getItem('nump')) {
                    var d = Number(localStorage.getItem('nump')) + 1
                }
                else {
                    var d = p + 1
                }

                if (localStorage.getItem('num')) {
                    var w = Number(localStorage.getItem('num')) + 1
                } else {
                    var w = y + 1

                }

                localStorage.setItem('nump', d)
                localStorage.setItem('num', w)

                var py = Number(localStorage.getItem('nump'))
                localStorage.setItem(`task${py}`, inputValue)
                document.getElementById("myInput").value = "";
                document.getElementById("myInput").focus()
            }




            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u2715");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            var close = document.getElementsByClassName("close");
                close[close.length - 1].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                    localStorage.removeItem(`task${i + 1}`)
                    var q = Number(localStorage.getItem('num')) - 1
                    Number(localStorage.setItem('num', q))
                    var o = Number(localStorage.getItem('nump')) - 1
                    Number(localStorage.setItem('nump', o))
                }
            
        }
        return newelement
    })()

    function removeAll() {
        var lst = document.getElementsByTagName("ul");
        lst[0].innerHTML = "";
    }
    
    // getting old undone tasks from the local storage 
    window.onload = function newelement() {
        var mun = Number(localStorage.getItem('num'))
        for (let i = 1; i < mun ; i++) {
            var li = document.createElement("li");
            var item = localStorage.getItem(`task${i}`)
            if (item) {

                var t = document.createTextNode(item);
                li.appendChild(t);

                document.getElementById("myUL").appendChild(li);
                
                
                
                var span = document.createElement("SPAN");
                var txt = document.createTextNode("\u2715");
                span.className = "close";
                span.appendChild(txt);
                li.appendChild(span);
                
                    close[i - 2].onclick = function () {
                        var div = this.parentElement;
                        div.style.display = "none";
                        localStorage.removeItem(`task${i - 1}`)
                        var q = Number(localStorage.getItem('num')) - 1
                        Number(localStorage.setItem('num', q))
                        var o = Number(localStorage.getItem('nump')) - 1
                        Number(localStorage.setItem('nump', o))
                    }
                
            }
            else {
                mun = mun + 1;
                continue
            }
        }
    }





