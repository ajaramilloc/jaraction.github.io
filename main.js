const typed = new Typed('.typed', {
    strings: [
        '<i class = "me">Game Developer</i>', 
        '<i class = "me">AI Learner</i>',
        '<i class = "me">Software Engineering Student</i>'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true, // this is a default
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html', // or 'html'
});