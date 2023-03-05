window.onload = function() {
    //返回
    var back = document.querySelector('.icon-guanbi');
    var p = document.querySelector('header').querySelector('p');
    console.log(p.innerText.slice(0, -2));
    back.onclick = function() {
        location.href = "./" + p.innerText.slice(0, -2) + ".html ";
    }

    //底部菜单栏
    var footer = document.querySelector('footer');
    var page_num = footer.querySelector('p').querySelector('span');
    var big = footer.querySelector('.icon-fangda');
    console.log(big);
    var small = footer.querySelector('.icon-suoxiao');
    var pre = footer.querySelector('.icon-zuojiantou');
    var next = footer.querySelector('.icon-youjiantou');
    var rotate_left = footer.querySelector('.icon-xuanzhuan-2');
    var rotate_right = footer.querySelector('.icon-xuanzhuan-1');
    var pic = document.querySelector('.pic');
    var pics = pic.querySelectorAll('img');
    var nav_pic = document.querySelector('.nav_pic');
    var nav_divs = nav_pic.querySelectorAll('.nav_div');
    var shades = document.querySelectorAll('.shade');
    console.log(shades);
    var nav_pics = nav_pic.querySelectorAll('img');
    // var nav_pics_height = nav_pic.clientHeight;
    var pic_index = 0;
    for (var i = 0; i < pics.length; i++) {
        pics[i].setAttribute('pic_index', i);
        nav_pics[i].setAttribute('nav_pic_index', i);
        shades[i].setAttribute('shade_index', i);
        if (pics[i].style.display === 'block') {
            pic_index = this.getAttribute('pic_index');
        }
    }
    var nav_divs_height = 0;
    pre.addEventListener('click', function() {
        if (pic_index <= 0) {
            pre.disabled = true;
        } else if (pic_index > 0) {
            pics[pic_index].style.display = 'none';
            pics[pic_index - 1].style.display = 'block';
            pic_index -= 1;
            page_num.innerHTML = pic_index + 1;
            nav_divs_height += pic_index * shades[pic_index].clientHeight;
            for (var i = 0; i < nav_divs.length; i++) {
                nav_divs[i].style.top = -nav_divs_height + 'px';
            }
            for (var j = 0; j < shades.length; j++) {
                shades[j].style.opacity = 1;
            }
            shades[pic_index].style.opacity = 0;
        }
        nav_divs_height = 0;
    })
    next.addEventListener('click', function() {
        if (pic_index >= 4) {
            next.disabled = true;
        } else if (pic_index < 4) {
            pics[pic_index].style.display = 'none';
            pics[pic_index + 1].style.display = 'block';
            pic_index += 1;
            page_num.innerHTML = pic_index + 1;
            nav_divs_height += pic_index * shades[pic_index].clientHeight;
            for (var i = 0; i < nav_divs.length; i++) {
                nav_divs[i].style.top = -nav_divs_height + 'px';
            }
            for (var j = 0; j < shades.length; j++) {
                shades[j].style.opacity = 1;
            }
            shades[pic_index].style.opacity = 0;
        }
        nav_divs_height = 0;
    })

    //放大缩小
    var multiple = 1;
    var num = 0;
    big.addEventListener('click', function() {
        multiple += 0.1;
        if (multiple > 1.5) {
            big.disabled = true;
            multiple -= 0.1;
        } else if (multiple <= 1.5) {
            num += 10;
            pic.style.transform = 'scale(' + multiple + ')';
        }
    })
    small.addEventListener('click', function() {
        multiple -= 0.1;
        if (multiple < 0.5) {
            small.disabled = true;
            multiple += 0.1;
        } else if (multiple > 0.5) {
            num -= 10;
            pic.style.transform = 'scale(' + multiple + ')';
        }
    })

    //旋转
    var current = 0;
    rotate_left.addEventListener('click', function() {
        current = current - 90;
        pic.style.transform = 'rotate(' + current + 'deg)';
    })
    rotate_right.addEventListener('click', function() {
        current = current + 90;
        pic.style.transform = 'rotate(' + current + 'deg)';
    })

    //右侧菜单栏
    var nav_up = document.querySelector('.nav_up');
    var nav_down = document.querySelector('.nav_down');
    nav_up.addEventListener('click', function() {
        if (pic_index <= 0) {
            nav_up.disabled = true;
        } else if (pic_index > 0) {
            pics[pic_index].style.display = 'none';
            pics[pic_index - 1].style.display = 'block';
            pic_index -= 1;
            page_num.innerHTML = pic_index + 1;
            nav_divs_height += pic_index * shades[pic_index].clientHeight;
            for (var i = 0; i < nav_divs.length; i++) {
                nav_divs[i].style.top = -nav_divs_height + 'px';
            }
            for (var j = 0; j < shades.length; j++) {
                shades[j].style.opacity = 1;
            }
            shades[pic_index].style.opacity = 0;
        }
        nav_divs_height = 0;
    })

    nav_down.addEventListener('click', function() {
        if (pic_index >= 4) {
            nav_down.disabled = true;
        } else if (pic_index < 4) {
            pics[pic_index].style.display = 'none';
            pics[pic_index + 1].style.display = 'block';
            pic_index += 1;
            page_num.innerHTML = pic_index + 1;
            nav_divs_height += pic_index * shades[pic_index].clientHeight;
            for (var i = 0; i < nav_divs.length; i++) {
                nav_divs[i].style.top = -nav_divs_height + 'px';
            }
            for (var j = 0; j < shades.length; j++) {
                shades[j].style.opacity = 1;
            }
            shades[pic_index].style.opacity = 0;
        }
        nav_divs_height = 0;
    })
}