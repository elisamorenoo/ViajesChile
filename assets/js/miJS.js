$(document).ready(function() {
    //smooth scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    //evento alerta enviar Correo
    $("#enviar").click(function() {
        alert("Recuerda haber llenado todos los campos...");
    });


    //on al pasar el mouse sobre p
    $("p")
        .on("mouseenter", function() {
            $(this).css({
                "background-color": "yellow",
                "font-weight": "bolder"
            });
        })
        .on("mouseleave", function() {
            var styles = {
                backgroundColor: "",
                fontWeight: ""
            };
            $(this).css(styles);
        });

    //tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    //popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

})