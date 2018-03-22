/*-------------------------------------
| .burguer-menu action
-------------------------------------*/
$('.menu-toggle').click(function(){

    $('.site-nav').toggleClass('site-nav--open');

});

/*-------------------------------------
| image carousel home
-------------------------------------*/

$('div.sliding1 img:gt(0)').css({'left':'-410px'});

function slide_sliding1(){
        $('div.sliding1 img:eq(0)').delay(2000).animate({'left': '410px'}, 1000, slide_sliding1_done);
        $('div.sliding1 img:eq(1)').delay(2000).animate({'left': '0px'}, 1000);
         //console.log('test');
}

function slide_sliding1_done(){
        $('div.sliding1 img:eq(0)').css({'left':'-410px'}).appendTo('div.sliding1');

        slide_sliding1();
}

slide_sliding1();

/*-------------------------------------
| image carousel Guitars
-------------------------------------*/

$('div.sliding2 img:gt(0)').css({'left':'-410px'});

function slide_sliding2(){
        $('div.sliding2 img:eq(0)').delay(2000).animate({'left': '410px'}, 1000, slide_sliding2_done);
        $('div.sliding2 img:eq(1)').delay(2000).animate({'left': '0px'}, 1000);
         //console.log('test');
}

function slide_sliding2_done(){
        $('div.sliding2 img:eq(0)').css({'left':'-410px'}).appendTo('div.sliding2');

        slide_sliding2();
}

slide_sliding2();

/*-------------------------------------
| image carousel AMPS
-------------------------------------*/

$('div.sliding3 img:gt(0)').css({'left':'-410px'});

function slide_sliding3(){
        $('div.sliding3 img:eq(0)').delay(2000).animate({'left': '410px'}, 1000, slide_sliding3_done);
        $('div.sliding3 img:eq(1)').delay(2000).animate({'left': '0px'}, 1000);
         //console.log('test');
}

function slide_sliding3_done(){
        $('div.sliding3 img:eq(0)').css({'left':'-410px'}).appendTo('div.sliding3');

        slide_sliding3();
}

slide_sliding3();

/*-------------------------------------
| image carousel PEDALS
-------------------------------------*/

$('div.sliding4 img:gt(0)').css({'left':'-410px'});

function slide_sliding4(){
        $('div.sliding4 img:eq(0)').delay(2000).animate({'left': '410px'}, 1000, slide_sliding4_done);
        $('div.sliding4 img:eq(1)').delay(2000).animate({'left': '0px'}, 1000);
         //console.log('test');
}

function slide_sliding4_done(){
        $('div.sliding4 img:eq(0)').css({'left':'-410px'}).appendTo('div.sliding3');

        slide_sliding4();
}

slide_sliding4();
