//global congig

$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    /* Slider home */
    $('#slider-Home').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoPlay: true,
        items: 1,
        nav: true,
        dots: false,
        navigationText: ["<i class='fas fa-chev-left''></i>","<i class='fas fa-chev-right''></i>"]
    });

    $('.slider-icon').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        autoPlay: true,
        nav: false,
        dots: false
    });

    $('.dropdown-menu .dropdown-item').click(function(){
        $('.dropdown-menu .dropdown-item').removeClass('active');
        $(this).addClass('active');      
    });

    $('.buttonDropdown').click(function(){
        $('nav .dropdown-menu.py-0').removeClass('show');
    });


    $('.dropdown-item.ourPrograms').click(function(event){
        event.stopPropagation();
        let hasClass = $('.dropdown-menu .dropdown-item').hasClass('active');
        if (hasClass){
            $('nav .dropdown-menu.py-0').toggleClass('show');
        }
        $('.dropdown-menu .dropdown-item').removeClass('active');
        $(this).addClass('active');      
    });

})

function showPane(section){
    $('#myTabContent .tab-pane').removeClass('active');
    $('.clickActive .nav-link').removeClass('active');
    $("html, body").animate({ scrollTop: 0 }, 250);
    if (section == 'home'){
        $('#home').tab('show')
        $('.clickActive .home').addClass('active');
    }
    if (section == 'our'){
        $('#our').tab('show')
        $('.clickActive .our').addClass('active');
    }
    if (section == 'ourPrograms'){
        $('#ourPrograms').tab('show')
        $('.clickActive .ourPrograms').addClass('active');
    }
    if (section == 'parents'){
        $('#parents').tab('show')
        $('.clickActive .parents').addClass('active');
    }
    if (section == 'register'){
        $('#register').tab('show')
        $('.clickActive .register').addClass('active');
    }
}