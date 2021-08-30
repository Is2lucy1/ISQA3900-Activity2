
/* For "EDUCATION" and "WORK" and "AWARD" buttons to determine which content should be visible */
document.getElementById('experience__education').addEventListener('click', function () {
    document.getElementById("education").classList.add('experience__active');
    document.getElementById("experience__education").classList.add('exp__button__active');
/*
    document.getElementById("experience__education").setAttribute('style', 'border-bottom: 1px white');
*/

    document.getElementById("work").classList.remove('experience__active');
    document.getElementById("experience__work").classList.remove('exp__button__active');

    document.getElementById("award").classList.remove('experience__active');
    document.getElementById("experience__award").classList.remove('exp__button__active');

    li = document.getElementById("education").classList;
    console.log("education list is " + li);

})

document.getElementById('experience__work').addEventListener('click', function () {
    console.log("Work was clicked");
    document.getElementById("work").classList.add('experience__active');
    document.getElementById("experience__work").classList.add('exp__button__active');

    document.getElementById("education").classList.remove('experience__active');
    document.getElementById("experience__education").classList.remove('exp__button__active');

    document.getElementById("award").classList.remove('experience__active');
    document.getElementById("experience__award").classList.remove('exp__button__active');

})

document.getElementById('experience__award').addEventListener('click', function () {
    console.log("Award was clicked");
    document.getElementById("award").classList.add('experience__active');
    document.getElementById("experience__award").classList.add('exp__button__active');

    document.getElementById("education").classList.remove('experience__active');
    document.getElementById("experience__education").classList.remove('exp__button__active');

    document.getElementById("work").classList.remove('experience__active');
    document.getElementById("experience__work").classList.remove('exp__button__active');

})


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    if(isScrolledIntoView($('#home')))
    {
        document.getElementById("intro__button").classList.add('navbar__active');
        document.getElementById("project__button").classList.remove('navbar__active');
        document.getElementById("skills__button").classList.remove('navbar__active');
        document.getElementById("experience__button").classList.remove('navbar__active');


    }

    if(isScrolledIntoView($('#intro')))
    {
        document.getElementById("intro__button").classList.add('navbar__active');
        document.getElementById("project__button").classList.remove('navbar__active');
        document.getElementById("skills__button").classList.remove('navbar__active');
        document.getElementById("experience__button").classList.remove('navbar__active');

         reveal();
    }

    if(isScrolledIntoView($('#projects')))
    {
        document.getElementById("intro__button").classList.remove('navbar__active a');
        document.getElementById("project__button").classList.add('navbar__active a');
        document.getElementById("skills__button").classList.remove('navbar__active a');
        document.getElementById("experience__button").classList.remove('navbar__active a');
    }

    if(isScrolledIntoView($('#experience')))
    {
        document.getElementById("intro__button").classList.remove('navbar__active');
        document.getElementById("project__button").classList.remove('navbar__active');
        document.getElementById("skills__button").classList.remove('navbar__active');
        document.getElementById("experience__button").classList.add('navbar__active');
    }

    if(isScrolledIntoView($('#skills')))
    {
        document.getElementById("intro__button").classList.remove('navbar__active');
        document.getElementById("project__button").classList.remove('navbar__active');
        document.getElementById("skills__button").classList.add('navbar__active');
        document.getElementById("experience__button").classList.remove('navbar__active');
    }


});

/*window.addEventListener('scroll', reveal);*/
function reveal () {
    console.log("on intro page");
    var reveals = document.querySelectorAll('.reveal');

    console.log("reveal is " + reveals);

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        console.log("windowheight is " + windowheight + ". revealtop is " + revealtop + ". revealpoint + " + revealpoint);

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('bar__reveal');

        } else {
            reveals[i].classList.remove('bar__reveal');
        }
    }
}

document.addEventListener('DOMContentLoaded', show(1));

function show(buttonId) {
    sections = document.getElementsByClassName('section');
    for (let i=1; i<=sections.length; i++) {

        if (i == buttonId) {
            // document.getElementById("section_" + i).style.display = 'block';

            content = document.getElementById("section_" + i);
            document.getElementById("middlecontent").innerHTML = content.innerHTML;

        } else {
            document.getElementById("section_" + i).style.display = 'none';
        }
    }

}

let rightPage = document.getElementsByClassName('column right');
for (let item = 0; item < rightPage.length; item++) {
    rightPage[item].style.display = 'none';
}

