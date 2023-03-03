(function (_0x131a6d, _0x3ba80f) {
    const _0x41434a = _0x1414;
    const _0x13ce1f = _0x131a6d();
    while (!![]) {
        try {
            const _0x2e02e1 = -parseInt(_0x41434a(0x8e)) / 0x1 * (-parseInt(_0x41434a(0x7e)) / 0x2) + -parseInt(_0x41434a(0x8c)) / 0x3 + parseInt(_0x41434a(0x7b)) / 0x4 + -parseInt(_0x41434a(0x8a)) / 0x5 * (-parseInt(_0x41434a(0x81)) / 0x6) + parseInt(_0x41434a(0x83)) / 0x7 * (-parseInt(_0x41434a(0x85)) / 0x8) + -parseInt(_0x41434a(0x87)) / 0x9 * (parseInt(_0x41434a(0x7f)) / 0xa) + -parseInt(_0x41434a(0x80)) / 0xb * (-parseInt(_0x41434a(0x7c)) / 0xc);
            if (_0x2e02e1 === _0x3ba80f) {
                break;
            } else {
                _0x13ce1f['push'](_0x13ce1f['shift']());
            }
        } catch (_0x208542) {
            _0x13ce1f['push'](_0x13ce1f['shift']());
        }
    }
}(_0x3e9b, 0x7888a));
function _0x3e9b() {
    const _0x1eb2ff = [
        '295731SHpAHT',
        'https://api.codename-t.com/checkKey?site=',
        'location',
        '85lXVFmy',
        'log',
        '1699524uMpVhX',
        'data',
        '10dZtFgY',
        'get',
        'use',
        'localhost',
        'value',
        '2199164ffTdji',
        '12ZrZlVw',
        'isMatched',
        '163364hyKzBV',
        '170idOCSj',
        '2346905KztCTB',
        '68808PsPySg',
        'hostname',
        '218547NkwSau',
        '#app',
        '40PiqRYz',
        'mount'
    ];
    _0x3e9b = function () {
        return _0x1eb2ff;
    };
    return _0x3e9b();
}
import {
    createApp,
    ref
} from 'vue';
import { createPinia } from 'pinia';
import _0x23d5e5 from './errors/Activation.vue';
import _0x2789ab from './errors/NetworkError.vue';
import _0x593b14 from 'axios';
import _0x3d4430 from './App.vue';
import _0x2cfa11 from './router';
import './firebase';
function _0x1414(_0x27060a, _0x2f1e93) {
    const _0x3e9bef = _0x3e9b();
    _0x1414 = function (_0x1414a2, _0x3d0cc4) {
        _0x1414a2 = _0x1414a2 - 0x77;
        let _0x59ab54 = _0x3e9bef[_0x1414a2];
        return _0x59ab54;
    };
    return _0x1414(_0x27060a, _0x2f1e93);
}
import './assets/pico.min.css';
import './assets/main.css';
async function initApp() {
    const _0xdf46e5 = _0x1414;
    const _0x96e222 = ref(![]);
    try {
        const _0x4ace1f = await _0x593b14[_0xdf46e5(0x77)](_0xdf46e5(0x88) + window[_0xdf46e5(0x89)][_0xdf46e5(0x82)] + '&ac=check');
        _0x96e222[_0xdf46e5(0x7a)] = window[_0xdf46e5(0x89)][_0xdf46e5(0x82)] == _0xdf46e5(0x79) || _0x4ace1f[_0xdf46e5(0x8d)][_0xdf46e5(0x8d)][_0xdf46e5(0x7d)];
        console[_0xdf46e5(0x8b)](_0x4ace1f['data'][_0xdf46e5(0x8d)]);
    } catch (_0x4575db) {
        throw createApp(_0x2789ab)[_0xdf46e5(0x86)](_0xdf46e5(0x84));
    }
    const _0x5e9257 = _0x96e222['value'] ? createApp(_0x3d4430) : createApp(_0x23d5e5);
    _0x5e9257[_0xdf46e5(0x78)](createPinia());
    _0x5e9257[_0xdf46e5(0x78)](_0x2cfa11);
    _0x5e9257[_0xdf46e5(0x86)](_0xdf46e5(0x84));
}
initApp();