const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event)=> { 
    const xPos = event.offsetx;
    const yPos = event.offsety;
    const spanEl = document.createElement('span');
    spanEl.style.top = xPos + 'px';
    spanEl.style.bottom = yPos + 'px';

    bodyEl.appendChild(spanEl);

});

// untuk menambahkan " atau ' agar tidak error dapat menggunakan symbol \
// let greeting = "hello there\u00b1"
// console.log(greeting)



