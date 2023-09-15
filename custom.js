$(document).ready(function () {
    /* Retrieve the current submenu */


    /* Retrieve all the menus name and add a class to them. As such, they will be easier to describe later */
    $(".chapter > .chapter-item:not(.affix):has(a)").each(function(index) {
        $(this).addClass("chapter-name");

        /* Create a new HTML tag that will be added to all the menu titles */
        var arrow = $("<a>", {"class": "arrow", "href": "#"});
        arrow.text('▸');
        $(this).append(arrow);

        /* Only remove "expanded" if the current page is not part of the submenu */
        if ($(this).next("li").find(".active").length < 1) {
            $(this).removeClass("expanded");
        }

        /* Add listeners on all arrows */
        arrow.on('click', function(e) {
            /* Check if the parent menu is expanded */
            const parent = $(this).parent();
            /* Find the index of "expanded" in the class list */
            const expanded = parent.hasClass("expanded");
            /* If it is expanded, remove the class from it */
            if (expanded) {
                /* Remove the class from the list */
                parent.toggleClass("expanded");
                /* Switch the icon */
                $(this).text('▸');
            } else {
                parent.toggleClass("expanded");
                $(this).text('▾');
            }
        });

    });

});
