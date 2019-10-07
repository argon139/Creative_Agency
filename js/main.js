$('.menu').modal({
	timingFunction: 'linear'
});

$('.slider').slick({
	arrows: false,
	dots: true,
    autoplay: true,
    autoplaySpeed: 6000
});

document.querySelector('#gallery').appendChild(JGallery.create([{
    title: 'Images',
    items: [
        {
            url: 'img/r1.jpg',
            thumbUrl: 'img/r1.jpg',
            
            hash: 'photo-1'
        },
        {
            url: 'img/r2.jpg',
            thumbUrl: 'img/r2.jpg',
           
            hash: 'photo-2'
        },
        {
            url: 'img/r3.jpg',
            thumbUrl: 'img/r3.jpg',
           
            hash: 'photo-3'
        },
        {
            url: 'img/r4.jpg',
            thumbUrl: 'img/r4.jpg',
           
            hash: 'photo-4'
        },
        {
            url: 'img/r5.jpg',
            thumbUrl: 'img/r5.jpg',
           
            hash: 'photo-5'
        },
        {
            url: 'img/r6.jpg',
            thumbUrl: 'img/r6.jpg',
            
            hash: 'photo-6'
        },
       
    ],
   
}]).getElement());