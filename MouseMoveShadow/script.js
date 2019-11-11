const hero = document.querySelector('.hero');
const text =document.querySelector('h1');
const maxShadowMove = 60;  // Equals %px

function moveShadow(e) {
    // console.log(e); // Verify whats the event
    // gets the width and height of 'hero'
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // gets the x and y of 'hero'
    let x = e.offsetX;
    let y = e.offsetY;
    // When the cursor enters into childs of 'hero'
    // must be done a little compensation on x and y
    if (this != e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    // console.log('x = ',x , 'y = ', y);
    // Calculate the move of the shadow
    let xShadowMove = Math.round(( x / width * maxShadowMove) - (maxShadowMove / 2));
    let yShadowMove = Math.round(( y / height * maxShadowMove) - (maxShadowMove / 2));

    console.log(xShadowMove, yShadowMove);  // Verify
    
    // Add the 'shadow' style to element
    text.style.textShadow = `${xShadowMove}px ${yShadowMove}px 0 rgb(184, 12, 9),
        ${xShadowMove * -1}px ${yShadowMove}px 0 rgb(11, 79, 108),
        ${yShadowMove * -1}px ${xShadowMove}px 0 rgb(1, 186, 239),
        ${yShadowMove}px ${xShadowMove * -1 }px 0 rgb(251, 251, 255)`;
    // shadow = 10px 10px 0 color;
    // Coolors scheme: https://coolors.co/b80c09-0b4f6c-01baef-fbfbff-040f16
}

hero.addEventListener('mousemove', moveShadow);