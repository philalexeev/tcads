(function($) {

    var	$window = $(window),
        $body = $('body');

    // Breakpoints.
        breakpoints({
            wide:      [ '1281px',  '1680px' ],
            normal:    [ '981px',   '1280px' ],
            narrow:    [ '841px',   '980px'  ],
            narrower:  [ '737px',   '840px'  ],
            mobile:    [ '481px',   '736px'  ],
            mobilep:   [ null,      '480px'  ]
        });

    // Play initial animations on page load.
        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-preload');
            }, 100);
        });

})(jQuery);

const servicesSelect = document.querySelector(".services__select")
const servicesBodyTexts = document.querySelectorAll(".services__body-text")

function changeSelectText() {
    servicesBodyTexts.forEach(serviceText => {
        if (serviceText.classList.contains(servicesSelect.value)) {
            serviceText.style.display = "flex"
        } else {
            serviceText.style.display = "none"
        }
    })
}

changeSelectText()
servicesSelect.addEventListener("change", changeSelectText)