'use strict';

// write code here
const tbody = document.querySelector('.field tbody');

const appendRow = document.querySelector('.append-row');

// +ROW handler
appendRow.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && appendRow.disabled === false) {
    ev.preventDefault();

    if (removeRow.disabled === true) {
      removeRow.disabled = false;
    }

    if (tbody.children.length >= 9) {
      appendRow.disabled = true;
    } else {
      appendRow.disabled = false;
    }

    const columsPerRow = tbody.children[0].children.length;

    const newRow = document.createElement('tr');

    for (let i = 0; i < columsPerRow; i++) {
      const item = document.createElement('td');

      newRow.appendChild(item);
    }

    tbody.append(newRow);
  }
});

const removeRow = document.querySelector('.remove-row');

// -ROW handler
removeRow.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && removeRow.disabled === false) {
    ev.preventDefault();

    if (appendRow.disabled === true) {
      appendRow.disabled = false;
    }

    if (tbody.children.length <= 3) {
      removeRow.disabled = true;
    } else {
      removeRow.disabled = false;
    }

    tbody.removeChild(tbody.lastElementChild);
  }
});

const appendColumn = document.querySelector('.append-column');

// +COLUMN handler
appendColumn.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && appendColumn.disabled === false) {
    ev.preventDefault();

    if (removeColumn.disabled === true) {
      removeColumn.disabled = false;
    }

    const rows = Array.from(tbody.children);

    // iterating each row
    for (const row of rows) {
      if (row.children.length >= 9) {
        appendColumn.disabled = true;
      } else {
        appendColumn.disabled = false;
      }

      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    }
  }
});

// -COLUMN handler
const removeColumn = document.querySelector('.remove-column');

removeColumn.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && removeColumn.disabled === false) {
    ev.preventDefault();

    if (appendColumn.disabled === true) {
      appendColumn.disabled = false;
    }

    const rows = Array.from(tbody.children);

    // iterating each row
    for (const row of rows) {
      if (row.children.length <= 3) {
        removeColumn.disabled = true;
      } else {
        removeColumn.disabled = false;
      }

      row.removeChild(row.lastElementChild);
    }
  }
});
