window.onload = function() {
    //跳转页面
    var back = document.getElementById('back');
    back.onclick = function() {
        location.href = "../../../一级页面/中药分类.html";
    }

    var cover = document.querySelector('.cover');
    var cover_div = cover.querySelector('.cover_div');
    var typics = cover.querySelectorAll('.typic');
    var new_ps = cover.querySelectorAll('.new_p');
    var nos = document.querySelectorAll('.con');
    var no_imgs = document.querySelectorAll('.no_img');
    var close = document.getElementById('close');
    for (var i = 0; i < nos.length; i++) {
        nos[i].onclick = function() {
            var index = parseInt(this.getAttribute('index'));
            cover.style.width = '1265px';
            cover.style.height = '510px';
            cover_div.style.width = '1265px';
            cover_div.style.height = '510px';
            cover.style.backgroundImage = 'url(' + no_imgs[index].src + ')';
            cover.style.backgroundFilter = 'blur(7px)';
            cover.style.backgroundSize = '100%';
            setTimeout(function() {
                typics[index].style.display = 'block';
                new_ps[index].style.display = 'block';
                close.style.display = 'block';
            }, 1000);
            close.onclick = function() {
                typics[index].style.display = 'none';
                new_ps[index].style.display = 'none';
                close.style.display = 'none';
                setTimeout(function() {
                    cover.style.width = '0px';
                    cover.style.height = '0px';
                    cover_div.style.width = '0px';
                    cover_div.style.height = '0px';
                }, 100);
            }
        }


    }
}