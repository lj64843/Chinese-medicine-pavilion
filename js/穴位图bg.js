'use strict';

window.onload = function() {
    var KEYMAP = {
            '建里穴': 53,
            '阴交穴': 9,
            '上星穴': 13,
            '攒竹穴': 16,
            '承泣穴': 17,
            '迎香穴': 18,
            '地仓穴': 20,
            '承浆穴': 32,
            '五输穴': 33,
            '交会穴': 34,
            '络穴': 35,
            '郄穴': 36,
            '原穴': 37,
            '背俞穴': 38,
            '腹募穴': 39,
            '八会穴': 40,
            '下合穴': 45,
            '三里穴': 46,
            '中脘穴': 48,
            '关元穴': 49,
            '合谷穴': 50,
            '大椎穴': 51,
            '百会穴': 52,
            '太阳穴': 53,
            '关元穴': 54,
            '足三里穴': 55,
            '三阴交穴': 56,
            '云门穴': 57,
            '气舍穴': 65,
            '中府学': 66,
            '灵墟穴': 67,
            '神封穴': 68,
            '期门穴': 69,
            '不容穴': 70,
            '章门穴': 71,
            '太乙穴': 72,
            '大横穴': 73,
            '水道穴': 74,
            '肩井穴': 75,
            '秉风穴': 76,
            '魂门穴': 77,
            '京门穴': 78,
            '会阳穴': 79,
            '阳溪穴': 80,
            '商阳穴': 81,
            '少商穴': 82,
            '神庭穴': 83,
            '人中穴': 84,
            '天突穴': 85,
            '紫宫穴': 86,
            '四满穴': 87,
            '足三里穴': 88,
            '中脘穴': 89,
            '梁丘穴': 90,
            '辄筋穴': 112,
            '大包穴': 113,
            '曲池穴': 114,
            '环跳穴': 115,
            '太白穴': 116,
            '商丘穴': 117,
            '地机穴': 118,
            '身柱穴': 119,
            '至阳穴': 120,
            '中枢穴': 121,
            '中极穴': 122,
            '长强穴': 123,
            '委门穴': 124,
            '小海穴': 125,
            '养老穴': 126,
            '外关穴': 186,
            '支正穴': 187,
            '太渊穴': 188,
            '少海穴': 189,
            '间史穴': 190,
            '神门穴': 191,
            '劳宫穴': 219,
            '列缺穴': 220,
            '曲泽穴': 221,
            '尺泽穴': 222
        },
        key_els = {};

    var rand = function rand() {
        var max = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
        var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

        var _int = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        var gen = min + (max - min) * Math.random();
        return _int ? Math.round(gen) : gen;
    };

    (function init() {
        var a3d = document.querySelector('.a3d'),
            f = document.createDocumentFragment(),
            lims = [33, 41, 47, 58, 91, 127, 146],
            len = lims.length,
            unit = 360 / (len + 1);

        for (var p in KEYMAP) {
            var rot = document.createElement('div'),
                key = document.createElement('div');

            key.dataset.name = p.replace('NUM_', '');
            key.dataset.code = KEYMAP[p];
            key.classList.add('key');

            for (var i = 0; i < len; i++) {
                if (KEYMAP[p] < lims[i]) {
                    var hue = rand((i + .8) * unit, (i + .2) * unit, 1);
                    key.style.color = 'hsl(' + hue + ',100%,65%)';
                    break;
                }
            }

            rot.classList.add('rot');

            key_els[p] = key;
            rot.appendChild(key);
            f.appendChild(rot);
        }

        a3d.appendChild(f);
    })();

    addEventListener('keydown', function(e) {
        e.preventDefault();

        for (var p in KEYMAP) {
            if (e.keyCode === KEYMAP[p]) {
                if (!key_els[p].classList.contains('vis')) key_els[p].classList.add('vis');
                return;
            }
        }
    }, false);

    addEventListener('keyup', function(e) {
        e.preventDefault();
    }, false);

    addEventListener('animationend', function(e) {
        var t = e.target;
        if (e.animationName === 'hl') t.classList.remove('vis');
    }, false);

};