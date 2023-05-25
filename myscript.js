// This is the var that grabs the button element from the HTML file
let button = document.getElementById("button");
// This is the var that grabs all the elements with the class 'color' from the HTML file
let color = document.getElementsByClassName("color");

// This adds a event listener to the button and changes the color when clicked
button.addEventListener('click', () => {

    // If else statment to change between colors, and to change the color and text of the button
    if (button.textContent === 'Purple Mode') {
        button.textContent = "Green Mode";
        button.style.backgroundColor = "rgba(0,255,0)";

        // This for loop lets me change the green to purple in the background. The arguement of the for loop, has var 'i' start at 0
        // and will continue to run as long as 'i' is less than color.length. Everytime it runs 'i' has 1 added to it (i++)
        // For everytime the loop runs it changes one of the backgrounds to purple
        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = "rgba(221,160,221,0.5)";
          }
    }
    else {
        button.textContent = 'Purple Mode';
        button.style.backgroundColor = "rgba(221,160,221)";
        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = "rgba(0,255,0,0.5)";
        }
    }
})