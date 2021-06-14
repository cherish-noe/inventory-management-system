var arrHead1 = new Array();
    arrHead1 = ['', 'Title', 'Author', 'Publication Date', 'Edition', 'Publisher Name', 'Author Contact', 'Publisher Phone', 'Publisher Email', 'Publisher Address', 'Publisher Postal Code'];      // SIMPLY ADD OR REMOVE VALUES IN THE ARRAY FOR TABLE HEADERS.

    // FIRST CREATE A TABLE STRUCTURE BY ADDING A FEW HEADERS AND
    // ADD THE TABLE TO YOUR WEB PAGE.
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable');            // SET THE TABLE ID.

        var tr = empTable.insertRow(-1);

        for (var h = 0; h < arrHead1.length; h++) {
            var th = document.createElement('th');          // TABLE HEADER.
            th.innerHTML = arrHead1[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont1');
        div.appendChild(empTable);    // ADD THE TABLE TO YOUR WEB PAGE.
    }

    // ADD A NEW ROW TO THE TABLE.s
    function addRow1() {
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;        // GET TABLE ROW COUNT.
        var tr = empTab.insertRow(rowCnt);      // TABLE ROW.
        tr = empTab.insertRow(rowCnt);

        for (var c = 0; c < arrHead1.length; c++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(c);

            if (c == 0) {           // FIRST COLUMN.
                // ADD A BUTTON.
                var button1 = document.createElement('input');

                // SET INPUT ATTRIBUTE.
                button1.setAttribute('type', 'button');
                button1.setAttribute('value', 'Remove');

                // ADD THE BUTTON's 'onclick' EVENT.
                button1.setAttribute('onclick', 'removeRow1(this)');

                td.appendChild(button1);
            }
            else {
                // CREATE AND ADD TEXTBOX IN EACH CELL.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');

                td.appendChild(ele);
            }
        }
    }

    // DELETE TABLE ROW.
    function removeRow1(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);       // BUTTON -> TD -> TR.
    }

    // EXTRACT AND SUBMIT TABLE DATA.
    function submit1() {
        var myTab = document.getElementById('empTable');
        var values = new Array();

        // LOOP THROUGH EACH ROW OF THE TABLE.
        for (row = 1; row < myTab.rows.length - 1; row++) {
            for (c = 0; c < myTab.rows[row].cells.length; c++) {   // EACH CELL IN A ROW.

                var element = myTab.rows.item(row).cells[c];
                if (element.childNodes[0].getAttribute('type') == 'text') {
                    values.push("'" + element.childNodes[0].value + "'");
                }
            }
        }
     
    }