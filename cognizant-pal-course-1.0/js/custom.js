(function () {
    positionSidebar();

    $(window).on("scroll touchmove", positionSidebar);

    document.querySelectorAll("[data-url-field]").forEach(fillFeedbackUrl);

    function positionSidebar() {
        $("#sidebar").toggleClass("top", $(document).scrollTop() > 253);
    }

    function fillFeedbackUrl(element) {
        var urlField = element.getAttribute("data-url-field");
        var href = element.getAttribute("href");

        element.setAttribute("href", href + "?" + urlField + "=" + window.location)
    }
})();
