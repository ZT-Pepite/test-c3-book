document.addEventListener('DOMContentLoaded', function () {

    /* Retrieve all the menus name and add a class to them. As such, they will be easier to describe later */
    document.querySelectorAll(".chapter > .chapter-item:not(.affix):has(a)").forEach(elt => {
        elt.classList += "chapter-name";

        /* Create a new HTML tag that will be added to all the menu titles */
        const arrow = document.createElement('a');
        arrow.innerText = '▾';
        arrow.classList = "arrow";
        arrow.href = "#";
        elt.appendChild(arrow);

        /* Add listeners on all arrows */
        arrow.addEventListener('click', function(e) {
            /* Check if the parent menu is expanded */
            const parent = this.parentElement;
            /* Find the index of "expanded" in the class list */
            const expanded = parent.classList.contains("expanded");
            /* If it is expanded, remove the class from it */
            if (expanded) {
                /* Remove the class from the list */
                parent.classList.remove("expanded");
                /* Switch the icon */
                this.innerText = '▸';
            } else {
                parent.classList.add("expanded");
                this.innerText = '▾';
            }
        });

    });

});
