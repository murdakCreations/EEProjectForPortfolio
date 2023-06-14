const build = document.querySelector('#backToBuilding')
const buildName = document.querySelector('#bName')
build.addEventListener('click', e => {
    e.preventDefault()
    fetch('/dashboard', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            buildName: buildName.value,
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            console.log(response)
        })
})