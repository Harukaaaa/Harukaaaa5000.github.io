window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var big_pic = document.querySelector('.big_pic');
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        };
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        };
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //最大图片的移动距离
        var bigMax = big_pic.offsetWidth - big.offsetWidth;

        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        big_pic.style.left = -bigX + 'px';
        big_pic.style.top = -bigY + 'px';
    })
})