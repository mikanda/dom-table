/*
 * require dependencies
 */
var template = require('./template'),
    domify = require('domify'),
    child = require('child');

/*
 * create new instance of DomTable
 * if no element is given use template as root el
 */
function DomTable (el) {
  this.el = el;
  if (arguments.length === 0)
    this.el = domify(template)[0];
  this.el.__proto__.addRow = this._addRow;
  this.el.__proto__.removeAllRows = this._removeAllRows;
  return this.el;
};
DomTable.prototype._addRow = function (element, rowIndex) {
  var rowEl;
  /*
   * add a new row to the table at given index
   * if index is undefined, add it to the end
   */
  rowEl = domify('<tr></tr>')[0];
  if (element !== null && element !== undefined)
    if (typeof element === "object")
      rowEl.appendChild(element);
    else
      rowEl.innerHTML = element;
  /*
   * append Row to table at rowIndex
   */
  child(this)
    .add(rowEl, rowIndex);
  
  /*
   * add addCell function to row
   */
  rowEl.__proto__.addCell = function (element, cellIndex) {
    var cellEl = domify('<td></td>')[0];
    if (element !== null)
      if (typeof element === "object")
        cellEl.appendChild(element);
      else
        cellEl.innerHTML = element;
    child(rowEl)
      .add(cellEl, cellIndex);
    return cellEl;
  };
  return rowEl;
};
DomTable.prototype._removeAllRows = function() {
  if (this.el !== undefined)
    child(this.el)
      .removeAll();
};

module.exports = function (table) {  
  return new DomTable(table);
};