var Cursor = document.querySelector('#cursor');
var curManin = document.querySelector('#main');

curManin.addEventListener('mousemove',function(dets){
    Cursor.style.left = dets.x + 'px';
    Cursor.style.top = dets.y + 'px';

});

document.querySelector('#overlay1').addEventListener('mousemove',function(dets){
    document.querySelector('#ele1 img').style.scale = 1;
    document.querySelector('#ele1 img').style.opacity = 1;

    Cursor.style.opacity = 0;

    document.querySelector('#ele1 img').style.left = (dets.x-350) + 'px';
    document.querySelector('#ele1 img').style.top = (dets.y-350) + 'px';

})
document.querySelector('#overlay1').addEventListener('mouseleave',function(dets){
    document.querySelector('#ele1 img').style.scale = 0;
    document.querySelector('#ele1 img').style.opacity = 0;

    Cursor.style.opacity = 1;
})





document.querySelector('#overlay2').addEventListener('mousemove',function(dets){
    document.querySelector('#ele2 img').style.scale = 1;
    document.querySelector('#ele2 img').style.opacity = 1;

    Cursor.style.opacity = 0;

    document.querySelector('#ele2 img').style.left = (dets.x-630) + 'px';
    document.querySelector('#ele2 img').style.top = (dets.y-350) + 'px';

})
document.querySelector('#overlay2').addEventListener('mouseleave',function(dets){
    document.querySelector('#ele2 img').style.scale = 0;
    document.querySelector('#ele2 img').style.opacity = 0;

    Cursor.style.opacity = 1;
})





document.querySelector('#overlay3').addEventListener('mousemove',function(dets){
    document.querySelector('#ele3 img').style.scale = 1;
    document.querySelector('#ele3 img').style.opacity = 1;

    Cursor.style.opacity = 0;

    document.querySelector('#ele3 img').style.left = (dets.x-1120) + 'px';
    document.querySelector('#ele3 img').style.top = (dets.y-350) + 'px';

})
document.querySelector('#overlay3').addEventListener('mouseleave',function(dets){
    document.querySelector('#ele3 img').style.scale = 0;
    document.querySelector('#ele3 img').style.opacity = 0;

    Cursor.style.opacity = 1;
})