const button = document.querySelector(".hover-text");
const tooltip = document.querySelector(".tooltip-text");

button.addEventListener("mouseover", function(e) {
    const buttonRect = button.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const spaceAbove = buttonRect.top - tooltipRect.height;
    const spaceBelow = window.innerHeight - buttonRect.bottom;

    if (spaceAbove > spaceBelow) {
        tooltip.id = "top";
        tooltip.style.top = buttonRect.top - tooltipRect.height + "px";
    } else {
        tooltip.id = "bottom";
        tooltip.style.top = buttonRect.bottom + "px";
    }
});

// button.onhover = function(e) {
//     tooltip.style.top = e.pageY - tooltip.offsetHeight / 2 + "px";
//     //tooltip.style.left = e.pageX - tooltip.offsetWidth / 2 + "px";

//     if (tooltip.offsetHeight - 50 < e.pageY)
//     {
//         tooltip.id = "top";
//         //tooltip.style.top = button.offsetHeight - 25 + "px";
//     }
//     else
//     {
//         tooltip.id = "bottom";
//     }

//     // if (e.pageY < tooltip.offsetHeight / 2) 
//     // {
//     //     tooltip.style.top = 0 + "px";
//     // }
    
//     // if (button.offsetWidth - 25 < e.pageX)
//     // tooltip.style.left = button.offsetWidth - 25 + "px";
//     // if (e.pageX < tooltip.offsetWidth / 2) 
//     // tooltip.style.left = 0 + "px";
// };