window.onload = function() {
    var back = document.getElementById('back');
    back.onclick = function() {
        location.href = "../../一级页面/历代名医.html";
    }

    //图册
    var photos = document.querySelectorAll('.photo');
    var one_detail = document.querySelector('.detail');
    var li = one_detail.querySelector('ul').querySelector('li');
    for (var i = 0; i < photos.length; i++) {
        var fig = i + 1;
        photos[i].setAttribute('p_index', fig);
        photos[i].onclick = function() {
            var index = this.getAttribute('p_index');
            location.href = "./" + li.innerText + "图册" + index + ".html";
        }
    }
}