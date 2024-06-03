function handleScroll() {
    let windowHeight = window.innerHeight
    let currentDistance = window.scrollY
    if (currentDistance >= 0.5*windowHeight)
    {
        let tracks = document.getElementById('test-box')
        tracks.setAttribute('class', 'test-box-to-add')
    }
}

window.addEventListener("scroll", handleScroll, true)

// if (window.scrollY >= 0.5*window.innerHeight) console.log('0.5')
