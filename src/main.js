const _0x144257 = _0x1d5e;
(function (_0x3fc3e8, _0x566af2) {
    const _0x1db9f2 = _0x1d5e;
    const _0x150828 = _0x3fc3e8();
    while (!![]) {
        try {
            const _0x2ea95a = -parseInt(_0x1db9f2(0x179)) / 0x1 * (parseInt(_0x1db9f2(0x16e)) / 0x2) + -parseInt(_0x1db9f2(0x178)) / 0x3 * (-parseInt(_0x1db9f2(0x17e)) / 0x4) + parseInt(_0x1db9f2(0x170)) / 0x5 * (-parseInt(_0x1db9f2(0x17f)) / 0x6) + parseInt(_0x1db9f2(0x171)) / 0x7 + parseInt(_0x1db9f2(0x172)) / 0x8 + -parseInt(_0x1db9f2(0x177)) / 0x9 + -parseInt(_0x1db9f2(0x175)) / 0xa * (-parseInt(_0x1db9f2(0x17b)) / 0xb);
            if (_0x2ea95a === _0x566af2) {
                break;
            } else {
                _0x150828['push'](_0x150828['shift']());
            }
        } catch (_0x2666da) {
            _0x150828['push'](_0x150828['shift']());
        }
    }
}(_0x242a, 0x87e8c));
import {
    createApp,
    ref
} from 'vue';
function _0x242a() {
    const _0x2c69ff = [
        '6vtrBEv',
        '#app',
        'hostname',
        'log',
        'CopyKiller\x20by\x20https://github.com/moking55',
        'data',
        'value',
        'use',
        '570RVkuyC',
        'then',
        '2319865mimQyF',
        '2539880mQLynA',
        '2605176ZQZRYT',
        'get',
        'catch',
        '140ekFrMb',
        'mount',
        '8923842AOdNjc',
        '381sLLXcw',
        '2333OyluTV',
        'https://api.codename-t.com/checkKey?site=',
        '745536pHQpfW',
        '2.0',
        'location',
        '32748rmvUPk'
    ];
    _0x242a = function () {
        return _0x2c69ff;
    };
    return _0x242a();
}
import { createPinia } from 'pinia';
import _0x46166c from './App.vue';
import _0x5bc0d1 from './router';
import _0x112611 from './errors/Activation.vue';
import _0x27d3e8 from './errors/NetworkError.vue';
import _0x4fe310 from 'axios';
import './assets/main.css';
import './assets/pico.min.css';
import './firebase';
const is_verified = ref(![]);
console[_0x144257(0x182)]({
    'killer': _0x144257(0x183),
    'version': _0x144257(0x17c)
});
if (window['location'][_0x144257(0x181)] == 'localhost' || is_verified[_0x144257(0x16c)]) {
    is_verified[_0x144257(0x16c)] = !![];
} else {
    await _0x4fe310[_0x144257(0x173)](_0x144257(0x17a) + window[_0x144257(0x17d)][_0x144257(0x181)] + '&ac=check')[_0x144257(0x16f)](_0x57a271 => {
        const _0x363dcd = _0x144257;
        is_verified['value'] = _0x57a271[_0x363dcd(0x16b)][_0x363dcd(0x16b)]['isMatched'];
        console[_0x363dcd(0x182)](_0x57a271[_0x363dcd(0x16b)][_0x363dcd(0x16b)]);
    })[_0x144257(0x174)](() => {
        const _0x163fba = _0x144257;
        throw createApp(_0x27d3e8)[_0x163fba(0x176)](_0x163fba(0x180));
    });
}
const app = createApp(is_verified['value'] ? _0x46166c : _0x112611);
app[_0x144257(0x16d)](_0x5bc0d1);
function _0x1d5e(_0x38f89a, _0x5cd170) {
    const _0x242ab7 = _0x242a();
    _0x1d5e = function (_0x1d5e14, _0x3cfa55) {
        _0x1d5e14 = _0x1d5e14 - 0x16b;
        let _0x139de1 = _0x242ab7[_0x1d5e14];
        return _0x139de1;
    };
    return _0x1d5e(_0x38f89a, _0x5cd170);
}
app[_0x144257(0x16d)](createPinia());
app[_0x144257(0x176)]('#app');