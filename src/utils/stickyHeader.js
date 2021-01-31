// When the user scrolls the page, execute myFunction
export default function StickyHeader(){
    window.onload =()=>{
        window.onscroll = function() {myFunction()};

// Get the navbar
        let navbar = document.getElementsByClassName('header-row')[0];

// Get the offset position of the navbar
        var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {

            if (window.pageYOffset > sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }
    return null
}
