import { ASN1DOM } from './dom.js';
import { Base64 } from './base64.js';
import { Hex } from './hex.js';
import { Defs } from './defs.js';
import { tags } from './tags.js';

const
    maxLength = 10240,
    reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
    tree = id('tree'),
    dump = id('dump'),
    wantHex = checkbox('wantHex'),
    trimHex = checkbox('trimHex'),
    wantDef = checkbox('wantDef'),
    area = id('area'),
    file = id('file'),
    examples = id('examples'),
    selectDefs = id('definitions'),
    selectTag = id('tags');

let hash = null;

if (!window.console || !window.console.log) // IE8 with closed developer tools
    window.console = { log: function () {} };
function id(elem) {
    return document.getElementById(elem);
}
function text(el, string) {
    if ('textContent' in el) el.textContent = string;
    else el.innerText = string;
}
function checkbox(name) {
    const el = id(name);
    const cfg = localStorage.getItem(name);
    if (cfg === 'false')
        el.checked = false;
    el.onchange = () => localStorage.setItem(name, el.checked);
    return el;
}
function show(asn1) {
    tree.innerHTML = '';
    dump.innerHTML = '';
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'treecollapse');
    tree.appendChild(ul);
    ul.appendChild(asn1.toDOM());
    if (wantHex.checked) dump.appendChild(asn1.toHexDOM(undefined, trimHex.checked));
}
export function decode(der, offset) {
    offset = offset || 0;
    try {
        const asn1 = ASN1DOM.decode(der, offset);
        if (wantDef.checked) {
            selectDefs.innerHTML = '';
            const types = Defs.commonTypes
                .map(type => {
                    const stats = Defs.match(asn1, type);
                    return { type, match: stats.recognized / stats.total };
                })
                .sort((a, b) => b.match - a.match);
            for (const t of types) {
                t.element = document.createElement('option');
                t.element.innerText = (t.match * 100).toFixed(1) + '% ' + t.type.description;
                selectDefs.appendChild(t.element);
            }
            let not = document.createElement('option');
            not.innerText = 'no definition';
            selectDefs.appendChild(not);
            Defs.match(asn1, types[0].type);
            selectDefs.onchange = () => {
                for (const t of types) {
                    if (t.element == selectDefs.selectedOptions[0]) {
                        Defs.match(asn1, t.type);
                        show(asn1);
                        return;
                    }
                }
                Defs.match(asn1, null);
                show(asn1);
            };
        } else
            selectDefs.innerHTML = '<option>no definition</option>';
        show(asn1);
        let b64 = der.length < maxLength ? asn1.toB64String() : '';
        if (area.value === '') area.value = Base64.pretty(b64);
        try {
            window.location.hash = hash = '#' + b64;
        } catch (e) {
            // fails with "Access Denied" on IE with URLs longer than ~2048 chars
            window.location.hash = hash = '#';
        }
        let endOffset = asn1.posEnd();
        if (endOffset < der.length) {
            let p = document.createElement('p');
            p.innerText = 'Input contains ' + (der.length - endOffset) + ' more bytes to decode.';
            let button = document.createElement('button');
            button.innerText = 'try to decode';
            button.onclick = function () {
                decode(der, endOffset);
            };
            p.appendChild(button);
            tree.insertBefore(p, tree.firstChild);
        }
    } catch (e) {
        text(tree, e);
    }
}
export function decodeText(val) {
    try {
        let der = reHex.test(val) ? Hex.decode(val) : Base64.unarmor(val);
        decode(der);
    } catch (e) {
        text(tree, e);
        dump.innerHTML = '';
    }
}
export function decodeBinaryString(str) {
    let der;
    try {
        if (reHex.test(str)) der = Hex.decode(str);
        else if (Base64.re.test(str)) der = Base64.unarmor(str);
        else der = str;
        decode(der);
    } catch (e) {
        text(tree, 'Cannot decode file.');
        dump.innerHTML = '';
    }
}
// set up buttons
const butClickHandlers = {
    butDecode: () => {
        decodeText(area.value);
    },
    butClear: () => {
        area.value = '';
        file.value = '';
        tree.innerHTML = '';
        dump.innerHTML = '';
        selectDefs.innerHTML = '';
        hash = window.location.hash = '';
    },
    butExample: () => {
        console.log('Loading example:', examples.value);
        let request = new XMLHttpRequest();
        request.open('GET', 'examples/' + examples.value, true);
        request.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            if (this.status >= 200 && this.status < 400) {
                area.value = this.responseText;
                decodeText(this.responseText);
            } else {
                console.log('Error loading example.');
            }
        };
        request.send();
    },
};
for (const [name, onClick] of Object.entries(butClickHandlers)) {
    let elem = id(name);
    if (elem)
        elem.onclick = onClick;
}
// this is only used if window.FileReader
function read(f) {
    area.value = ''; // clear text area, will get b64 content
    let r = new FileReader();
    r.onloadend = function () {
        if (r.error) alert("Your browser couldn't read the specified file (error code " + r.error.code + ').');
        else decodeBinaryString(r.result);
    };
    r.readAsBinaryString(f);
}
function load() {
    if (file.files.length === 0) alert('Select a file to load first.');
    else read(file.files[0]);
}
function loadFromHash() {
    if (window.location.hash && window.location.hash != hash) {
        hash = window.location.hash;
        // Firefox is not consistent with other browsers and returns an
        // already-decoded hash string so we risk double-decoding here,
        // but since % is not allowed in base64 nor hexadecimal, it's ok
        let val = decodeURIComponent(hash.substr(1));
        if (val.length) decodeText(val);
    }
}
function stop(e) {
    e.stopPropagation();
    e.preventDefault();
}
function dragAccept(e) {
    stop(e);
    if (e.dataTransfer.files.length > 0) read(e.dataTransfer.files[0]);
}
// main
if ('onhashchange' in window) window.onhashchange = loadFromHash;
loadFromHash();
document.ondragover = stop;
document.ondragleave = stop;
if ('FileReader' in window && 'readAsBinaryString' in new FileReader()) {
    file.style.display = 'block';
    file.onchange = load;
    document.ondrop = dragAccept;
}
for (let tag in tags) {
    let date = tags[tag];
    let el = document.createElement('option');
    el.value = tag;
    el.innerText = date + ' ' + tag;
    selectTag.appendChild(el);
}
selectTag.onchange = function (ev) {
    let tag = ev.target.selectedOptions[0].value;
    window.location.href = 'https://rawcdn.githack.com/lapo-luchini/asn1js/' + tag + '/index.html';
};

// zoom fix to have straight lines in treeview
if (window.devicePixelRatio >= 2  ) {
    let treecollapse = document.querySelector(':root');
    treecollapse.style.setProperty('--zoom-fix', '-0.8px');
} else if (window.devicePixelRatio >= 1.5  ) {
    let treecollapse = document.querySelector(':root');
    treecollapse.style.setProperty('--zoom-fix', '-0.5px');
} else if (window.devicePixelRatio <= 0.81  ) {
    let treecollapse = document.querySelector(':root');
    treecollapse.style.setProperty('--zoom-fix', '-1.4px');
} else if (window.devicePixelRatio <= 0.9  ) {
    let treecollapse = document.querySelector(':root');
    treecollapse.style.setProperty('--zoom-fix', '-1.5px');
}