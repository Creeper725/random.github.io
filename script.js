let wrapper = document.getElementById('wrapper');
wrapper.addEventListener('mousemove', (event) => {
    let moveX = ((window.screen.width / 2) - event.pageX) * 0.02;
    let moveY = ((window.screen.height / 2) - event.pageY) * 0.02;
    let background = document.getElementById('background');
    background.style.marginLeft = moveX + 'px';
    background.style.marginTop = moveY + 'px';
});

particlesJS.load('particles', 'assets/particles.json');
