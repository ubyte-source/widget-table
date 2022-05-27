# Documentation widget-table

Widget Javascript Table is a library used to create table in a web page.

## Structure

library:
- [window.Table](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtable-usable-methods)
- [window.Table.Colgroup](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtablecolgroup-usable-methods)
- [window.Table.Colgroup.Col](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtablecolgroupcol-usable-methods)
- [window.Table.Thead](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtablethead-usable-methods)
- [window.Table.Tbody](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtabletbody-usable-methods)
- [window.Table.Tfoot](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtabletfoot-usable-methods)
- [window.Table.Tr](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtabletr-usable-methods)
- [window.Table.Tr.Td](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtabletrtd-usable-methods)
- [window.Table.Tr.Th](https://github.com/energia-source/widget-table/tree/main/lib#class-windowtabletrth-usable-methods)

<br>

#### ***Class window.Table usable methods***

##### `constructor()`

Create a table element and add it to the DOM

##### `getTable()`

Get the table element from the DOM

 * **Returns:** The table element.

##### `getColgroup()`

Get the colgroup element from the table element

 * **Returns:** The colgroup element.

##### `getThead()`

Get the table's thead element, if it exists, otherwise create it

 * **Returns:** The Table.Thead object.

##### `getTbody()`

Get the tbody element from the table

 * **Returns:** The Table.Tbody object.

##### `getTfoot()`

Get the tfoot element if it exists, otherwise create it

 * **Returns:** The tfoot element.

##### `getClassList()`

Get the classList property of the table element

 * **Returns:** The classList property of the table element.

##### `setClass(name)`

Set the class name of the table

 * **Parameters:** `name` — The name of the class to add.
 * **Returns:** The table object.

##### `drop(all)`

Drop all the elements in the collection

 * **Parameters:** `all` — If true, all elements will be dropped. If false, only the current element will

     be dropped.
 * **Returns:** The object itself.

##### `out()`

It returns the table.

 * **Returns:** The getTable() method returns the table.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

<br>

#### ***Class window.Table.Colgroup usable methods***

##### `constructor(table)`

Create a new JavaScript object and assign it to the variable `columns`

 * **Parameters:** `table` — The table to which the column group belongs.

##### `getTable()`

Get the table object

 * **Returns:** The table that was created.

##### `getContent()`

Get the content element of the page

 * **Returns:** The content of the element.

##### `getClumns()`

Get the columns of the current table

 * **Returns:** The getClumns() method returns the elements.columns property.

##### `addCol()`

It adds a column to the table.

 * **Returns:** The object itself.

##### `out()`

Get the content of the current cell

 * **Returns:** The getContent() method returns the content of the page.

<br>

#### ***Class window.Table.Colgroup.Col usable methods***

##### `constructor(colgroup)`

Create a new colgroup element and add it to the document

 * **Parameters:** `colgroup` — The colgroup element to be extended.

##### `getColgroup()`

Get the colgroup of the table

 * **Returns:** The colgroup element.

##### `getContent()`

Get the content of the column

 * **Returns:** The content of the column.

##### `setSpan(value)`

* Set the span attribute of the content of the element

 * **Parameters:** `value` — The value of the attribute.
 * **Returns:** The object itself

##### `setClass(name)`

Set the class name of the content

 * **Parameters:** `name` — The name of the class to add.
 * **Returns:** The `setClass` method returns the `this` object.

##### `out()`

Get the content of the current cell

 * **Returns:** The getContent() method returns the content of the page.

<br>

#### ***Class window.Table.Thead usable methods***

##### `constructor(table)`

Create a new JavaScript object and assign it to the variable `table`.

 * **Parameters:** `table` — The table element that will be used to create the table.

##### `getTable()`

Get the table

 * **Returns:** The table that was created.

##### `getRows()`

Get all the rows in the table

 * **Returns:** The rows of the table.

##### `getThead()`

Get the table header

 * **Returns:** The table header.

##### `addRow()`

It adds a row to the table.

 * **Returns:** The tr element.

##### `getClassList()`

Get the class list of the table header

 * **Returns:** The classList property of the table header.

##### `out()`

Returns the table header

 * **Returns:** The table header.

##### `drop(all)`

Remove all rows from the table

 * **Parameters:** `all` — If true, all rows will be removed. If false, only the selected rows will be

     removed.
 * **Returns:** The table object.

<br>

#### ***Class window.Table.Tbody usable methods***

##### `constructor(table)`

Create a new JavaScript object and assign it to the variable table.

 * **Parameters:** `table` — The table element that will be used to create the table.

##### `getTable()`

Get the table from the database

 * **Returns:** The table that was created.

##### `getRows()`

Get all the rows in the table

 * **Returns:** The rows of the table.

##### `getTbody()`

Get the tbody element of the table

 * **Returns:** The tbody element.

##### `addRow()`

It adds a row to the table.

 * **Returns:** The new row.

##### `getClassList()`

Get the classList property of the tbody element

 * **Returns:** The classList property of the tbody element.

##### `out()`

Returns the tbody element of the table

 * **Returns:** The tbody element.

##### `drop()`

Remove all rows from the table

 * **Returns:** The object modified.

<br>

#### ***Class window.Table.Tfoot usable methods***

##### `constructor(table)`

Create a new table object

 * **Parameters:** `table` — The table element that will be used to create the table.

##### `getTable()`

Get the table from the database

 * **Returns:** The table that was created.

##### `getRows()`

Get all the rows in the table

 * **Returns:** The rows of the table.

##### `getTfoot()`

Returns the tfoot element of the table

 * **Returns:** The tfoot element.

##### `addRow()`

Add a row to the table

 * **Returns:** The new row.

##### `getClassList()`

Get the classList property of the tfoot element

 * **Returns:** The classList property of the tfoot element.

##### `out()`

Get the tfoot element of the table

 * **Returns:** The tfoot element.

##### `drop(all)`

Remove all rows from the table

 * **Parameters:** `all` — If true, all rows will be removed. If false, only the selected rows will be

     removed.
 * **Returns:** The table footer.

<br>

#### ***Class window.Table.Tr usable methods***

##### `constructor(table)`

Create a new JavaScript object and assign it to the variable `table`.

 * **Parameters:** `table` — The table object that the columns are associated with.

##### `getTable()`

Get the table object

 * **Returns:** The table object.

##### `getColumns()`

Get the columns of the current table

 * **Returns:** The columns of the table.

##### `getColumn(id)`

Get the column object for the column with the specified id

 * **Parameters:** `id` — The id of the column to retrieve.
 * **Returns:** The column object.

##### `getMain()`

Create a new table row element and return it

 * **Returns:** The main table row.

##### `setClass(name)`

Set the class of the main container

 * **Parameters:** `name` — The name of the class to add.
 * **Returns:** The `setClass` method returns the `this` object.

##### `addColumn(type, element)`

Add a column to the table

 * **Parameters:**
   * `type` — The type of the column. This is a class that extends the Column class.
   * `element` — The element to be added to the table.
 * **Returns:** The table object.

##### `getClassList()`

Get the classList property of the table row that contains the current cell

 * **Returns:** The classList property of the table row.

##### `out()`

Get the main function

 * **Returns:** The main function.

<br>

#### ***Class window.Table.Tr.Td usable methods***

##### `constructor(tr, html)`

Create a new JavaScript object and initialize it with the given HTML

 * **Parameters:**
   * `tr` — The table row that this cell belongs to.
   * `html` — The HTML to be added to the table.

##### `getTr()`

Get the current row's TR element

 * **Returns:** The `getTr()` method returns the `tr` property of the `Table` object.

##### `getContents()`

Get the contents of the element

 * **Returns:** The contents of the elements.

##### `getMain()`

Create a new HTML element and return it

 * **Returns:** The main element of the table.

##### `addHTML(html)`

Add HTML to the main element of the page

 * **Parameters:** `html` — The HTML to be added to the page.
 * **Returns:** The current instance of the object.

##### `setClass(name)`

Set the class name of the main container

 * **Parameters:** `name` — The name of the class to add.
 * **Returns:** The `setClass` method returns the `this` object.

##### `setColspan(colspan)`

Set the colspan attribute of the main element of the control

 * **Parameters:** `colspan` — The number of columns to span.
 * **Returns:** The current object.

##### `setRowspan(rowspan)`

Set the rowspan attribute of the main element

 * **Parameters:** `rowspan` — The number of rows the cell spans.
 * **Returns:** The current object.

##### `getClassList()`

It returns the classList of the main element.

 * **Returns:** The classList property of the main element.

##### `out()`

Get the main function from the JavaScript file

 * **Returns:** The main function.

##### `static content(value, classname)`

Create a span element with a class name and append a text node to it

 * **Parameters:**
   * `value` — The value to be displayed.
   * `classname` — The classname of the element.
 * **Returns:** A span element with a text node.

##### `static parse()`

*Filter* the arguments array, returning only those items that are null or HTMLElement objects

 * **Returns:** An array of DOM elements.

<br>

#### ***Class window.Table.Tr.Th usable methods***

##### `getMain()`

Create a new element of type `th` and return it

 * **Returns:** The main element of the table.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript
