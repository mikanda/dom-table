function init() {
  var domTable = require('dom-table');
  var domify = require('component-domify');

  var table = document.querySelector('table');
  domTable(table);

  var rowElement = table.addRow(null,0);
  rowElement.addCell(domify('<h1>Cell2</h1>')[0], 0);
  rowElement.addCell(domify('<h1>Cell3</h1>')[0]);
  rowElement.addCell(domify('<h1>Cell1</h1>')[0], 0);

  table.addRow();
  rowElement = document.querySelectorAll('table tr')[1];
  rowElement.addCell('Entry3');
  rowElement.addCell('Entry2', 0);
  rowElement.addCell('Entry1', 0);
};