
# dom-table

A simple component to enhance building html tables.

## Installation

    $ component install mikanda/dom-table

## Example
    see example/ and run ``make test``

## API

### domTable(el)

Returns ``el``.

#### el#addRow([rowContent, index])

Add a new row to el at given index (default = end).
If rowContent is given, append to new row.
Returns the rowEl;

#### el#removeAllRows()

Removes all rows.

#### rowEl#addCell([cellContent, index])

Same as el#addRow.


## License

  LGPL
