//B"H
function getSayf(url,cb,er) {
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
