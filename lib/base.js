(function (window) {

    'use strict';

    class Td {

        /**
         * Create a new JavaScript object and initialize it with the given HTML
         * @param tr - The table row that this cell belongs to.
         * @param html - The HTML to be added to the table.
         */

        constructor(tr, html) {
            this.tr = tr;
            this.elements = {};
            this.elements.contents = [];
            this.addHTML(html);
        }

        /**
         * Get the current row's TR element
         * @returns The `getTr()` method returns the `tr` property of the `Table` object.
         */

        getTr() {
            return this.tr;
        }

        /**
         * Get the contents of the element
         * @returns The contents of the elements.
         */

        getContents() {
            return this.elements.contents;
        }

        /**
         * Create a new HTML element and return it
         * @returns The main element of the table.
         */

        getMain() {
            if (this.elements.hasOwnProperty('td')) return this.elements.td;
            this.elements.td = document.createElement('td');
            this.elements.td.className = 'td';
            return this.elements.td;
        }

        /**
         * Add HTML to the main element of the page
         * @param html - The HTML to be added to the page.
         * @returns The current instance of the object.
         */

        addHTML(html) {
            if (null !== html) this.getMain().appendChild(html);
            this.getContents().push(html);
            return this;
        }

        /**
         * Set the class name of the main container
         * @param name - The name of the class to add.
         * @returns The `setClass` method returns the `this` object.
         */

        setClass(name) {
            let container = this.getMain();
            container.className = name;
            return this;
        }

        /**
         * Set the colspan attribute of the main element of the control
         * @param colspan - The number of columns to span.
         * @returns The current object.
         */

        setColspan(colspan) {
            let container = this.getMain();
            container.setAttribute('colspan', colspan);
            return this;
        }

        /**
         * Set the rowspan attribute of the main element
         * @param rowspan - The number of rows the cell spans.
         * @returns The current object.
         */

        setRowspan(rowspan) {
            let container = this.getMain();
            container.setAttribute('rowspan', rowspan);
            return this;
        }

        /**
         * It returns the classList of the main element.
         * @returns The classList property of the main element.
         */

        getClassList() {
            let main = this.getMain();
            return main.classList;
        }

        /**
         * Get the main function from the JavaScript file
         * @returns The main function.
         */

        out() {
            return this.getMain();
        }

        /**
         * Create a span element with a class name and append a text node to it
         * @param value - The value to be displayed.
         * @param classname - The classname of the element.
         * @returns a span element with a text node.
         */

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

        /**
         * *Filter* the arguments array, returning only those items that are null or HTMLElement
         * objects
         * @returns An array of DOM elements.
         */

        static parse() {
            arguments.__proto__ = Array.prototype;
            return arguments.filter(function (item) {
                return item === null
                    || item instanceof HTMLElement;
            });
        }
    }

    class Th extends Td {

        /**
         * Create a new element of type `th` and return it
         * @returns The main element of the table.
         */

        getMain() {
            if (this.elements.hasOwnProperty('th')) return this.elements.th;
            this.elements.th = document.createElement('th');
            this.elements.th.className = 'th';
            return this.elements.th;
        }
    }

    class Tr {

        /**
         * Create a new JavaScript object and assign it to the variable `table`.
         * @param table - The table object that the columns are associated with.
         */

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.columns = [];
        }

        /**
         * Get the table object
         * @returns The table object.
         */

        getTable() {
            return this.table;
        }

        /**
         * Get the columns of the current table
         * @returns The columns of the table.
         */

        getColumns() {
            return this.elements.columns;
        }

        /**
         * Get the column object for the column with the specified id
         * @param id - The id of the column to retrieve.
         * @returns The column object.
         */

        getColumn(id) {
            let columns = this.getColumns();
            if (columns.hasOwnProperty(id)) return columns[id];
            return null;
        }

        /**
         * Create a new table row element and return it
         * @returns The main table row.
         */

        getMain() {
            if (this.elements.hasOwnProperty('tr')) return this.elements.tr;
            this.elements.tr = document.createElement('tr');
            this.elements.tr.className = 'tr';
            return this.elements.tr;
        }

        /**
         * Set the class of the main container
         * @param name - The name of the class to add.
         * @returns The `setClass` method returns the `this` object.
         */

        setClass(name) {
            let container = this.getMain();
            container.className = name;
            return this;
        }

        /**
         * Add a column to the table
         * @param type - The type of the column. This is a class that extends the Column class.
         * @param element - The element to be added to the table.
         * @returns The table object.
         */

        addColumn(type, element) {
            let td = new type(this, element);
            this.getMain().appendChild(td.out());
            this.getColumns().push(td);
            return this;
        }

        /**
         * Get the classList property of the table row that contains the current cell
         * @returns The classList property of the table row.
         */

        getClassList() {
            let tr = this.getTr();
            return tr.classList;
        }

        /**
         * Get the main function
         * @returns The main function.
         */

        out() {
            return this.getMain();
        }
    }

    class Col {

        /**
         * Create a new colgroup element and add it to the document
         * @param colgroup - The colgroup element to be extended.
         */

        constructor(colgroup) {
            this.colgroup = colgroup;
            this.elements = {};
            this.elements.col = document.createElement('col');
        }

        /**
         * Get the colgroup of the table
         * @returns The colgroup element.
         */

        getColgroup() {
            return this.colgroup;
        }

        /**
         * Get the content of the column
         * @returns The content of the column.
         */

        getContent() {
            return this.elements.col;
        }

        /**
         * * Set the span attribute of the content of the element
         * @param value - The value of the attribute.
         * @returns The object itself
         */

        setSpan(value) {
            this.getContent().setAttribute('span', value);
            return this;
        }

        /**
         * Set the class name of the content
         * @param name - The name of the class to add.
         * @returns The `setClass` method returns the `this` object.
         */

        setClass(name) {
            let content = this.getContent();
            content.className = name;
            return this;
        }

        /**
         * Get the content of the current cell
         * @returns The getContent() method returns the content of the page.
         */

        out() {
            return this.getContent();
        }
    }

    class Colgroup {

        /**
         * Create a new JavaScript object and assign it to the variable `columns`
         * @param table - The table to which the column group belongs.
         */

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.content = document.createElement('colgroup');
            this.elements.columns = [];
        }

        /**
         * Get the table object
         * @returns The table that was created.
         */

        getTable() {
            return this.table;
        }

        /**
         * Get the content element of the page
         * @returns The content of the element.
         */

        getContent() {
            return this.elements.content;
        }

        /**
         * Get the columns of the current table
         * @returns The getClumns() method returns the elements.columns property.
         */

        getClumns() {
            return this.elements.columns;
        }

        /**
         * It adds a column to the table.
         * @returns The object itself.
         */

        addCol() {
            let column = new window.Table.Colgroup.Col(this);
            this.getClumns().push(column);
            this.getContent().appendChild(column.out());
            return column;
        }

        /**
         * Get the content of the current cell
         * @returns The getContent() method returns the content of the page.
         */

        out() {
            return this.getContent();
        }
    }

    class Thead {

        /**
         * Create a new JavaScript object and assign it to the variable `table`.
         * @param table - The table element that will be used to create the table.
         */

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.rows = [];
            this.elements.thead = document.createElement('thead');
        }

        /**
         * Get the table
         * @returns The table that was created.
         */

        getTable() {
            return this.table;
        }

        /**
         * Get all the rows in the table
         * @returns The rows of the table.
         */

        getRows() {
            return this.elements.rows;
        }

        /**
         * Get the table header
         * @returns The table header.
         */

        getThead() {
            return this.elements.thead;
        }

        /**
         * It adds a row to the table.
         * @returns The tr element.
         */

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

        /**
         * Get the class list of the table header
         * @returns The classList property of the table header.
         */

        getClassList() {
            let thead = this.getThead();
            return thead.classList;
        }

        /**
         * Returns the table header
         * @returns The table header.
         */

        out() {
            return this.getThead();
        }

        /**
         * Remove all rows from the table
         * @param all - If true, all rows will be removed. If false, only the selected rows will be
         * removed.
         * @returns The table object.
         */

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

        /**
         * Create a new JavaScript object and assign it to the variable table. 
         * @param table - The table element that will be used to create the table.
         */

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.rows = [];
            this.elements.tbody = document.createElement('tbody');
        }

        /**
         * Get the table from the database
         * @returns The table that was created.
         */

        getTable() {
            return this.table;
        }

        /**
         * Get all the rows in the table
         * @returns The rows of the table.
         */

        getRows() {
            return this.elements.rows;
        }

        /**
         * Get the tbody element of the table
         * @returns The tbody element.
         */

        getTbody() {
            return this.elements.tbody;
        }

        /**
         * It adds a row to the table.
         * @returns The new row.
         */

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

        /**
         * Get the classList property of the tbody element
         * @returns The classList property of the tbody element.
         */

        getClassList() {
            let tbosy = this.getTbody();
            return tbosy.classList;
        }

        /**
         * Returns the tbody element of the table
         * @returns The tbody element.
         */

        out() {
            return this.getTbody();
        }

        /**
         * Remove all rows from the table
         * @returns The object modified.
         */

        drop() {
            let rows = this.getRows();
            for (let item = 0; item < rows.length; item++)
                window.Table.removeElementDOM(rows[item].out());

            this.elements.rows = [];

            return this;
        }
    }

    class Tfoot {

        /**
         * Create a new table object
         * @param table - The table element that will be used to create the table.
         */

        constructor(table) {
            this.table = table;
            this.elements = {};
            this.elements.rows = [];
            this.elements.tfoot = document.createElement('tfoot');
        }

        /**
         * Get the table from the database
         * @returns The table that was created.
         */

        getTable() {
            return this.table;
        }

        /**
         * Get all the rows in the table
         * @returns The rows of the table.
         */

        getRows() {
            return this.elements.rows;
        }

        /**
         * Returns the tfoot element of the table
         * @returns The tfoot element.
         */

        getTfoot() {
            return this.elements.tbody;
        }

        /**
         * Add a row to the table
         * @returns The new row.
         */

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

        /**
         * Get the classList property of the tfoot element
         * @returns The classList property of the tfoot element.
         */

        getClassList() {
            let tfoot = this.getTfoot();
            return tfoot.classList;
        }

        /**
         * Get the tfoot element of the table
         * @returns The tfoot element.
         */

        out() {
            return this.getTfoot();
        }

        /**
         * Remove all rows from the table
         * @param all - If true, all rows will be removed. If false, only the selected rows will be
         * removed.
         * @returns The table footer.
         */

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

        /**
         * Create a table element and add it to the DOM
         */

        constructor() {
            this.elements = {};
            this.elements.table = document.createElement('table');
            this.elements.table.className = 'table';
        }

        /**
         * Get the table element from the DOM
         * @returns The table element.
         */

        getTable() {
            return this.elements.table;
        }

        /**
         * Get the colgroup element from the table element
         * @returns The colgroup element.
         */

        getColgroup() {
            if (this.elements.hasOwnProperty('colgroup')) return this.elements.colgroup;
            let table = this.getTable();
            this.elements.colgroup = new window.Table.Colgroup(this);
            table.insertBefore(this.elements.colgroup.out(), table.firstChild);
            return this.elements.colgroup;
        }

        /**
         * Get the table's thead element, if it exists, otherwise create it
         * @returns The Table.Thead object.
         */

        getThead() {
            if (this.elements.hasOwnProperty('thead')) return this.elements.thead;
            this.elements.thead = new window.Table.Thead(this);
            this.getTable().insertBefore(this.elements.thead.out(), this.getTbody().out());
            return this.elements.thead;
        }

        /**
         * Get the tbody element from the table
         * @returns The Table.Tbody object.
         */

        getTbody() {
            if (this.elements.hasOwnProperty('tbody')) return this.elements.tbody;
            this.elements.tbody = new window.Table.Tbody(this);
            this.getTable().appendChild(this.elements.tbody.out());
            return this.elements.tbody;
        }

        /**
         * Get the tfoot element if it exists, otherwise create it
         * @returns The tfoot element.
         */

        getTfoot() {
            if (this.elements.hasOwnProperty('tfoot')) return this.elements.tfoot;
            this.getTbody();
            this.elements.tfoot = new window.Table.Tfoot(this);
            this.getTable().insertBefore(this.elements.tfoot.out());
            return this.elements.tfoot;
        }

        /**
         * Get the classList property of the table element
         * @returns The classList property of the table element.
         */

        getClassList() {
            let table = this.getTable();
            return table.classList;
        }

        /**
         * Set the class name of the table
         * @param name - The name of the class to add.
         * @returns The table object.
         */

        setClass(name) {
            let table = this.getTable();
            table.className = name;
            return this;
        }

        /**
         * Drop all the elements in the collection
         * @param all - If true, all elements will be dropped. If false, only the current element will
         * be dropped.
         * @returns The object itself.
         */

        drop(all) {
            if (true === all) this.constructor.removeElementDOM(this.out());
            for (let item in this.elements) {
                if (typeof this.elements[item].drop !== 'function') continue;
                this.elements[item].drop(all);
            }
            return this;
        }

        /**
         * It returns the table.
         * @returns The getTable() method returns the table.
         */

        out() {
            return this.getTable();
        }

        /**
         * Remove the element from the DOM
         * @param element - The element to remove from the DOM.
         * @returns The return value is a boolean value.
         */

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