window.onload = function() {
    var back = document.getElementById('back');
    back.onclick = function() {
        location.href = "../../index.html";
    }

    var sec = document.querySelector('section');
    var go_up = document.querySelector('.go_up');
    document.addEventListener("scroll", function() {
        var scope = (sec.offsetHeight * (100 - 5)) / 100; //可出线范围大小
        var cH = document.documentElement.clientHeight; //当前页面可见区域高度
        var tY = sec.getBoundingClientRect().top; //到可见区域顶端的高度
        var bY = sec.getBoundingClientRect().bottom; //到可见区域底端的高度
        if (tY < -scope || bY > cH + scope) {
            go_up.style.opacity = '0';
        } else {
            go_up.style.opacity = '1';
        }
    });


    go_up.onclick = function() { //alert("111");

        //document.scrollingElement.scrollTop = 0;

        //window.scrollTo(0,0);

        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    window.οnscrοll = function() {
        varscrollTop1 = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop1 > 0) { //scrolltop.style.width = 45 + 'px';

            scrolltop.style.height = 45 + 'px';

        } else { //scrolltop.style.width = 0 + 'px';

            scrolltop.style.height = 0 + 'px';

        }

    }
}