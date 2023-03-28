//B"H
function getSayf(url,cb=()=>{},er=()=>{}) {
    fetch(url)
    .then(r=>r.json())
        .catch(e=>{
            er(e)
        })
    .then(r=>{
        cb(r)
    })
        .catch(er)
}

var i = 0; 
for(i = 0; i < chaptersNumbers; i++) {
    (i => {
        if(!skip.includes(i+1)) {
            var h2 =  document.createElement("h2")
            h2.className="chapL"
            h2.innerHTML = "Chapter " + (i+1);
            var par = document.getElementById(elementID);
            par.appendChild(h2);

            var bod = document.createElement("p")
            par.appendChild(bod);
            h2.onclick = () => {
                getSayf(
                    chapterURL + "/"
                    +(i+1)
                    +".json",
                    r => {
                        r.forEach((q,i) => {
                            bod.innerHTML += "Halacha " + (i+1)
                                +"<br>" + q
                        })
                    },
                    er => {
                        bod.innerHTML = "There was an error getting chapter "
                            + (i+1)+"!"
                    }
                )
            }
        }
    })(i);
}
