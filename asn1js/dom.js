// ASN.1 JavaScript decoder
// Copyright (c) 2008-2024 Lapo Luchini <lapo@lapo.it>

// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// 
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

import { ASN1 } from './asn1.js';
import { oids } from './oids.js';
import { bindContextMenu } from './context.js';

const
    lineLength = 80,
    contentLength = 8 * lineLength,
    DOM = {
        ellipsis: '\u2026',
        tag: function (tagName, className, text) {
            let t = document.createElement(tagName);
            t.className = className;
            if (text) t.innerText = text;
            return t;
        },
        text: function (str) {
            return document.createTextNode(str);
        },
        space: function () {
            return DOM.tag('span', 'spaces', ' ');
        },
        breakLines: function (str, length) {
            let lines = str.split(/\r?\n/),
                o = '';
            for (let i = 0; i < lines.length; ++i) {
                let line = lines[i];
                if (i > 0) o += '\n';
                while (line.length > length) {
                    o += line.substring(0, length);
                    o += '\n';
                    line = line.substring(length);
                }
                o += line;
            }
            return o;
        },
    };

export class ASN1DOM extends ASN1 {

    buf2hex(buffer) {
        return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join(' ');
    }

    toDOM(spaces) {
        spaces = spaces || '';
        let isOID = (typeof oids === 'object') && (this.tag.isUniversal() && (this.tag.tagNumber == 0x06) || (this.tag.tagNumber == 0x0D));
        let node;
        node = document.createElement('li');
        node.asn1 = this;        
        let head = DOM.tag('span', 'head');
        const typeName = this.typeName().replace(/_/g, ' ');
        if (this.def) {
            if (this.def.id) {
                head.appendChild(DOM.tag('span', 'name id', this.def.id));
                head.appendChild(DOM.space());
            }
            if (this.def.name && this.def.name != typeName) {
                head.appendChild(DOM.tag('span', 'name type', this.def.name));
                head.appendChild(DOM.space());
            }
            if (this.def.mismatch) {
                head.appendChild(DOM.tag('span', 'name type', '[?]'));
                head.appendChild(DOM.space());
            }
        }
        head.setAttribute('pos', this.posStart());
        head.setAttribute('end', this.posEnd());    
        head.appendChild(DOM.text(typeName));
        let content;
        try {
            content = this.content(contentLength);
        } catch (e) {
            content = 'Cannot decode: ' + e;
        }
        let oid;
        if (content !== null) {
            let preview = DOM.tag('span', 'preview'),
                shortContent;
            if (isOID)
                content = content.split('\n', 1)[0];
            shortContent = (content.length > lineLength) ? content.substring(0, lineLength) + DOM.ellipsis : content;
            preview.appendChild(DOM.space());
            preview.appendChild(DOM.text(shortContent));
            if (isOID) {
                oid = oids[content];
                if (oid) {
                    if (oid.d) {
                        preview.appendChild(DOM.space());
                        let oidd = DOM.tag('span', 'oid description', oid.d);
                        preview.appendChild(oidd);
                    }
                    if (oid.c) {
                        preview.appendChild(DOM.space());
                        let oidc = DOM.tag('span', 'oid comment', '(' + oid.c + ')');
                        preview.appendChild(oidc);
                    }
                }
            }
            head.appendChild(preview);
            content = DOM.breakLines(content, lineLength);
            content = content.replace(/</g, '&lt;');
            content = content.replace(/\n/g, '<br>');
        }
        // add the li and details section for this node
        let contentNode;
        let childNode;
        if (this.sub !== null) {
            let details = document.createElement('details');
            details.setAttribute('open', '');
            node.appendChild(details);
            let summary = document.createElement('summary');
            summary.setAttribute('class', 'node');
            details.appendChild(summary);
            summary.appendChild(head);
            // summary.setAttribute('class', 'node');
            contentNode = summary;
            childNode = details;
        }        
        else {
            contentNode = node;
            contentNode.setAttribute('class', 'node');
            contentNode.appendChild(head);
        }

        this.node = contentNode;
        this.head = head;
        let value = DOM.tag('div', 'value');
        let s = 'Offset: ' + this.stream.pos + '<br>';
        s += 'Length: ' + this.header + '+';
        if (this.length >= 0)
            s += this.length;
        else
            s += (-this.length) + ' (undefined)';
        if (this.tag.tagConstructed)
            s += '<br>(constructed)';
        else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null))
            s += '<br>(encapsulates)';
        //TODO if (this.tag.isUniversal() && this.tag.tagNumber == 0x03) s += "Unused bits: "
        if (content !== null) {
            s += '<br>Value:<br><b>' + content + '</b>';
            if (isOID && oid) {
                if (oid.d) s += '<br>' + oid.d;
                if (oid.c) s += '<br>' + oid.c;
                if (oid.w) s += '<br>(warning!)';
            }
        }
        value.innerHTML = s;
        contentNode.appendChild(value);
        let sub = DOM.tag('div', 'sub');
        if (this.sub !== null) {
            let ul = document.createElement('ul');
            childNode.appendChild(ul);

            spaces += '\xA0 ';
            for (let i = 0, max = this.sub.length; i < max; ++i)
                ul.appendChild(this.sub[i].toDOM(spaces));
        }
        bindContextMenu(node);
        return node;
    }
    fakeHover(current) {
        this.node.classList.add('hover');
        if (current)
            this.head.classList.add('hover');
    }
    fakeOut(current) {
        this.node.classList.remove('hover');
        if (current)
            this.head.classList.remove('hover');
    }
    toHexDOM_sub(node, className, stream, start, end) {
        if (start >= end)
            return;
        let sub = DOM.tag('span', className, stream.hexDump(start, end));
        node.appendChild(sub);
    }
    toHexDOM(root, trim=true) {
        let node = DOM.tag('span', 'hex');
        if (root === undefined) root = node;
        this.head.hexNode = node;
        this.head.onmouseover = function () { this.hexNode.className = 'hexCurrent'; };
        this.head.onmouseout  = function () { this.hexNode.className = 'hex'; };
        node.asn1 = this;
        node.onmouseover = function (event) {
            let current = !root.selected;
            if (current) {
                root.selected = this.asn1;
                this.className = 'hexCurrent';
            }
            this.asn1.fakeHover(current);
            event.stopPropagation();
        };
        node.onmouseout = function () {
            let current = (root.selected == this.asn1);
            this.asn1.fakeOut(current);
            if (current) {
                root.selected = null;
                this.className = 'hex';
            }
        };
        bindContextMenu(node);
        if (root == node) {
            let lineStart = this.posStart() & 0xF;
            if (lineStart != 0) {
                let skip = DOM.tag('span', 'skip');
                let skipStr = '';
                for (let j = lineStart; j > 0; --j)
                    skipStr += '   ';
                if (lineStart >= 8)
                    skipStr += ' ';
                skip.innerText = skipStr;
                node.appendChild(skip);
            }
        }
        // set the current start and end position as an attribute at the node to know the selected area
        node.setAttribute('pos', this.posStart());
        node.setAttribute('end', this.posEnd());    
        this.toHexDOM_sub(node, 'tag', this.stream, this.posStart(), this.posLen());
        this.toHexDOM_sub(node, (this.length >= 0) ? 'dlen' : 'ulen', this.stream, this.posLen(), this.posContent());
        if (this.sub === null) {
            let start = this.posContent();
            let end = this.posEnd();
            if (!trim || end - start < 10 * 16)
                node.appendChild(DOM.text(
                    this.stream.hexDump(start, end)));
            else {
                let end1 = start + 5 * 16 - (start & 0xF);
                let start2 = end - 16 - (end & 0xF);
                node.appendChild(DOM.text(this.stream.hexDump(start, end1)));
                node.appendChild(DOM.tag('span', 'skip', '\u2026 skipping ' + (start2 - end1) + ' bytes \u2026\n'));
                node.appendChild(DOM.text(this.stream.hexDump(start2, end)));
            }
        } else if (this.sub.length > 0) {
            let first = this.sub[0];
            let last = this.sub[this.sub.length - 1];
            this.toHexDOM_sub(node, 'intro', this.stream, this.posContent(), first.posStart());
            for (let i = 0, max = this.sub.length; i < max; ++i)
                node.appendChild(this.sub[i].toHexDOM(root, trim));
            this.toHexDOM_sub(node, 'outro', this.stream, last.posEnd(), this.posEnd());
        } else
            this.toHexDOM_sub(node, 'outro', this.stream, this.posContent(), this.posEnd());
        return node;
    }
    static decode(stream, offset) {
        return ASN1.decode(stream, offset, ASN1DOM);
    }

}
