$(document).ready(function () {
    //Random order Hero Cards on page load
    var cards = $(".ProfessionCards");
    // for (var i = 0; i < cards.length; i++) {
    //     var target = Math.floor(Math.random() * cards.length - 1) + 1;
    //     var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    //     cards.eq(target).before(cards.eq(target2));
    // }

    // Random order Top Right Image Every 2s
    // Images on TopRight Slider
    var images = ['constructions.jpg', 'heroSlide1.png', 'HeroSlide2.jpg', 'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'];
    var index = 0;

    //auto change
    function nextBackground() {
        $('#background').css({ 'background-image': 'url(../Public/Images/' + images[Math.floor(Math.random() * images.length)] + ')' });
        timer = setTimeout(nextBackground, 4000);
    }
    timer = setTimeout(nextBackground, 2000);
    $('#background').css('background', images[0]);
    //change to next on button click and stop timer
    var nextIndex = function (index, length) {
        return ((index + 1) % length)
    };
    $('#nextbtn').click(function () {
        clearTimeout(timer);
        index = nextIndex(index, images.length);
        $('#background').css({ 'background-image': 'url(../Public/Images/' + images[index] + ')' });

    });
    //change to prev on button click and stop timer
    var previousIndex = function (index, length) {
        if (index <= 0) {
            return length - 1; // cycle backwards to the last image
        } else {
            return index - 1;
        }
    }
    $('#previousbtn').click(function () {
        clearTimeout(timer);
        index = previousIndex(index, images.length);
        $('#background').css({ 'background-image': 'url(../Public/Images/' + images[index] + ')' });
    });

    // Real Estate
    var Estateimages = ['PANO_20160513_171231.jpg', 'fbaa6d73-1cba-4ce4-9279-f3dccc1f367e.jpg', 'renovation.jpg', 'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'];
    var index = 0;
    // 
    //change to next on button click and stop timer
    var nextIndex = function (index, length) {
        return ((index + 1) % length)
    };
    $('#nextRental_btn').click(function () {
        clearTimeout(timer);
        index = nextIndex(index, Estateimages.length);
        $('#RentalsImages').css({ 'background-image': 'url(../Public/Images/' + Estateimages[index] + ')' });

    });
    //change to prev on button click and stop timer
    var previousIndex = function (index, length) {
        if (index <= 0) {
            return length - 1; // cycle backwards to the last image
        } else {
            return index - 1;
        }
    }
    $('#previousRental_btn').click(function () {
        clearTimeout(timer);
        index = previousIndex(index, Estateimages.length);
        $('#RentalsImages').css({ 'background-image': 'url(../Public/Images/' + Estateimages[index] + ')' });
    });


    //Sooth Jump On Page
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            // $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });




    /* Modal Form When Opening an Image */

    // Get the modal from class
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName("clickedImage");

    for (var i = 0; i < img.length; i++) {
        //== Select *from Images wherename=swimingpool 
        if (i == 0) {
            img[0].onclick = function () {
                window.open("src/Experiences/Piscine.html", "_self")
            }
        }
        if (i == 1) {
            img[1].onclick = function () {
                window.open("src/Experiences/Boucherie.html", "_self")

                // modal.style.display = "block";
                // $('#WorkTitle').html("Construction de Restaurant");
                // $('.ModalImage').eq(0).css({ 'background-image': 'url(Public/Images/Boucherie1.png' });
                // $('.ModalImage').eq(1).css({ 'background-image': 'url(Public/Images/Boucherie2.png' });
                // $('.ModalImage').eq(2).css({ 'background-image': 'url(Public/Images/Boucherie3.png' });
                // $('.ModalImage').eq(3).css({ 'background-image': 'url(Public/Images/Boucherie4.png' });
                // $('.ModalImage').eq(4).css({ 'background-image': 'url(Public/Images/Boucherie5.png' });
                // $('.ModalImage').eq(5).css({ 'background-image': 'url(Public/Images/Boucherie6.png' });
                // $('.ModalImage').eq(6).css({ 'background-image': 'url(Public/Images/Boucherie7.png' });
            }
        }
        if (i == 2) {
            img[2].onclick = function () {
                window.open("src/Experiences/Batiment.html", "_self")

            }
        }
        if (i == 3) {
            img[3].onclick = function () {
                window.open("src/Experiences/Renovation.html", "_self")

            }
        }

    }




    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        window.open("../../index.html", "_self")

    }


    // Before & After Slider
    const _slideInputs = document.querySelectorAll('.slideInput');
    const _dragLines = document.querySelectorAll('.drag-line');
    const _imgs = document.querySelectorAll('.img-2');
    const _labelAfter = document.querySelectorAll('.bal-afterPosition');


    Array.prototype.slice.call(_slideInputs).forEach((slideInput, index) => {
        slideInput.addEventListener('input', e => {
            _dragLines[index].style.left = `${slideInput.value}%`;
            _imgs[index].style.width = `${slideInput.value}%`;
            if (_imgs[index].style.width < `${20}px`) {
                _labelAfter[index].style.display = "none";
            }
            else {
                _labelAfter[index].style.display = "block";

            }
        });
    });

});


