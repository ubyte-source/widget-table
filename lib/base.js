(function (window) {

    'use strict';

    class Td {

        constructor(tr, html) {
            this.tr = tr;
            this.elements = {};
            this.elements.contents = [];
            this.addHTML(html);
        }

        getTr() {
            return this.tr;
        }
        getContents() {
            return this.elements.contents;
        }
        getMain() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            this.elements.td = document.createElement('td');
            this.elements.td.className = 'td';
            return this.elements.td;
        }
        addHTML(html) {
            if (null !== html) this.getMain().appendChild(html);
            this.getContents().push(html);
            return this;
        }
        setClass(name) {
            let container = this.getMain();
            container.className = name;
            return this;
        }
        setColspan(colspan) {
            let container = this.getMain();
            container.setAttribute('colspan', colspan);
            return this;
        }
        setRowspan(rowspan) {
            let container = this.getMain();
            container.setAttribute('rowspan', rowspan);
            return this;
        }
        getClassList() {
            let main = this.getMain();
            return main.classList;
        }
        out() {
            return this.getMain();
        }
        static content(value, classname) {
            let element = document.createElement('span');
            if (typeof classname === 'string'
                && classname.length > 0) element.className = classname;

            let contnet_value = value === null ? String.fromCharCode(32) : value,
                content = contnet_value instanceof HTMLElement
                    ? contnet_value
                    : document.createTextNode(contnet_value.toString());

            element.appendChild(content);

            return element;
        }
        static parse() {
            arguments.__proto__ = Array.prototype;
            return arguments.filter(function (item) {
                return item === null
                    || item instanceof HTMLElement;
            });
        }
    }

    class Th extends Td {

        getMain() {
            if (this.elements.hasOwnProperty('th')) return this.elements.th;
            this.elements.th = document.createElement('th');
            this.elements.th.className = 'th';
            return this.elements.th;
        }
    }

    class Tr {

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.columns = [];
        }

        getTable() {
            return this.table;
        }
        getColumns() {
            return this.elements.columns;
        }
        getColumn(id) {
            let columns = this.getColumns();
            if (columns.hasOwnProperty(id)) return columns[id];
            return null;
        }
        getMain() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            this.elements.tr = document.createElement('tr');
            this.elements.tr.className = 'tr';
            return this.elements.tr;
        }
        setClass(name) {
            let container = this.getMain();
            container.className = name;
            return this;
        }
        addColumn(type, element) {
            let td = new type(this, element);
            this.getMain().appendChild(td.out());
            this.getColumns().push(td);
            return this;
        }
        getClassList() {
            let tr = this.getTr();
            return tr.classList;
        }
        out() {
            return this.getMain();
        }
    }

    class Col {

        constructor(colgroup) {
            this.colgroup = colgroup;
            this.elements = {};
            this.elements.col = document.createElement('col');
        }

        getColgroup() {
            return this.colgroup;
        }
        getContent() {
            return this.elements.col;
        }
        setSpan(value) {
            this.getContent().setAttribute('span', value);
            return this;
        }
        setClass(name) {
            let content = this.getContent();
            content.className = name;
            return this;
        }
        out() {
            return this.getContent();
        }
    }

    class Colgroup {

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.content = document.createElement('colgroup');
            this.elements.columns = [];
        }

        getTable() {
            return this.table;
        }
        getContent() {
            return this.elements.content;
        }
        getClumns() {
            return this.elements.columns;
        }
        addCol() {
            let column = new window.Table.Colgroup.Col(this);
            this.getClumns().push(column);
            this.getContent().appendChild(column.out());
            return column;
        }
        out() {
            return this.getContent();
        }
    }

    class Thead {

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.rows = [];
            this.elements.thead = document.createElement('thead');
        }

        getTable() {
            return this.table;
        }
        getRows() {
            return this.elements.rows;
        }
        getThead() {
            return this.elements.thead;
        }
        addRow() {
            arguments.__proto__ = Array.prototype;
            let elements = window.Table.Tr.Td.parse.apply(this, arguments);
            if (elements.length === 0) return null;

            let tr = new window.Table.Tr(this);
            for (let item = 0; item < elements.length; item++)
                tr.addColumn(window.Table.Tr.Th, elements[item]);

            this.getThead().appendChild(tr.out());
            this.getRows().push(tr);

            return tr;
        }
        getClassList() {
            let thead = this.getThead();
            return thead.classList;
        }
        out() {
            return this.getThead();
        }
        drop(all) {
            let rows = this.getRows();
            for (let item = 0; item < rows.length; item++)
                window.Table.removeElementDOM(rows[item].out());

            this.elements.rows = [];

            if (true !== all) return this;

            let table = this.getTable();
            window.Table.removeElementDOM(this.out());
            delete table.thead;

            return this;
        }
    }

    class Tbody {

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.rows = [];
            this.elements.tbody = document.createElement('tbody');
        }

        getTable() {
            return this.table;
        }
        getRows() {
            return this.elements.rows;
        }
        getTbody() {
            return this.elements.tbody;
        }
        addRow() {
            arguments.__proto__ = Array.prototype;
            let elements = window.Table.Tr.Td.parse.apply(this, arguments);
            if (elements.length === 0) return null;

            let tr = new window.Table.Tr(this);
            for (let item = 0; item < elements.length; item++)
                tr.addColumn(window.Table.Tr.Td, elements[item]);

            this.getTbody().appendChild(tr.out());
            this.getRows().push(tr);

            return tr;
        }
        getClassList() {
            let tbosy = this.getTbody();
            return tbosy.classList;
        }
        out() {
            return this.getTbody();
        }
        drop() {
            let rows = this.getRows();
            for (let item = 0; item < rows.length; item++)
                window.Table.removeElementDOM(rows[item].out());

            this.elements.rows = [];

            return this;
        }
    }

    class Tfoot {

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.rows = [];
            this.elements.tfoot = document.createElement('tfoot');
        }

        getTable() {
            return this.table;
        }
        getRows() {
            return this.elements.rows;
        }
        getTfoot() {
            return this.elements.tbody;
        }
        addRow() {
            arguments.__proto__ = Array.prototype;
            let elements = window.Table.Tr.Td.parse.apply(this, arguments);
            if (elements.length === 0) return null;

            let tr = new window.Table.Tr(this);
            for (let item = 0; item < elements.length; item++)
                tr.addColumn(window.Table.Tr.Td, elements[item]);

            this.getTfoot().appendChild(tr.out());
            this.getRows().push(tr);

            return tr;
        }
        getClassList() {
            let tfoot = this.getTfoot();
            return tfoot.classList;
        }
        out() {
            return this.getTfoot();
        }
        drop(all) {
            let rows = this.getRows();
            for (let item = 0; item < rows.length; item++)
                window.Table.removeElementDOM(rows[item].out());

            this.elements.rows = [];

            if (true !== all) return this;

            let table = this.getTable();
            window.Table.removeElementDOM(this.out());
            delete table.tfoot;

            return this;
        }
    }

    class Table {

        constructor() {
            this.elements = {};
            this.elements.table = document.createElement('table');
            this.elements.table.className = 'table';
        }

        getTable() {
            return this.elements.table;
        }
        getColgroup() {
            if (this.elements.hasOwnProperty('colgroup')) return this.elements.colgroup;
            let table = this.getTable();
            this.elements.colgroup = new window.Table.Colgroup(this);
            table.insertBefore(this.elements.colgroup.out(), table.firstChild);
            return this.elements.colgroup;
        }
        getThead() {
            if (this.elements.hasOwnProperty('thead')) return this.elements.thead;
            this.elements.thead = new window.Table.Thead(this);
            this.getTable().insertBefore(this.elements.thead.out(), this.getTbody().out());
            return this.elements.thead;
        }
        getTbody() {
            if (this.elements.hasOwnProperty('tbody')) return this.elements.tbody;
            this.elements.tbody = new window.Table.Tbody(this);
            this.getTable().appendChild(this.elements.tbody.out());
            return this.elements.tbody;
        }
        getTfoot() {
            if (this.elements.hasOwnProperty('tfoot')) return this.elements.tfoot;
            this.getTbody();
            this.elements.tfoot = new window.Table.Tfoot(this);
            this.getTable().insertBefore(this.elements.tfoot.out());
            return this.elements.tfoot;
        }
        getClassList() {
            let table = this.getTable();
            return table.classList;
        }
        setClass(name) {
            let table = this.getTable();
            table.className = name;
            return this;
        }
        drop(all) {
            if (true === all) this.constructor.removeElementDOM(this.out());
            for (let item in this.elements) {
                if (typeof this.elements[item].drop !== 'function') continue;
                this.elements[item].drop(all);
            }
            return this;
        }
        out() {
            return this.getTable();
        }
        static removeElementDOM(element) {
            let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
            if (parent === null) return false;
            parent.removeChild(element);
            return true;
        }
    }

    window.Table = Table;
    window.Table.Colgroup = Colgroup;
    window.Table.Colgroup.Col = Col;
    window.Table.Thead = Thead;
    window.Table.Tbody = Tbody;
    window.Table.Tfoot = Tfoot;
    window.Table.Tr = Tr;
    window.Table.Tr.Td = Td;
    window.Table.Tr.Th = Th;

})(window);