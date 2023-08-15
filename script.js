const tableContent = document.getElementById("table-content");
const tableButtons = document.querySelectorAll("th button");

const createRow = (employee) => {
  const row = document.createElement("tr");
  
  const keys = ['Name', 'Position', 'Office', 'Age', 'Start Date'];
  
  keys.forEach((key) => {
    const cell = document.createElement("td");
    cell.innerHTML = employee[key];
    row.appendChild(cell);
  });
  
  return row;
};

const populateTable = (data) => {
  data.forEach((employee) => {
    const row = createRow(employee);
    tableContent.appendChild(row);
  });
};

const sortData = (data, param, direction = "asc") => {
  tableContent.innerHTML = '';
  const sortedData =
    direction === "asc"
      ? [...data].sort((a, b) => (a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0))
      : [...data].sort((a, b) => (b[param] < a[param] ? -1 : b[param] > a[param] ? 1 : 0));
  populateTable(sortedData);
};

const resetButtons = (event) => {
  [...tableButtons].forEach((button) => {
    if (button !== event.target) {
      button.removeAttribute("data-dir");
    }
  });
};

window.addEventListener("load", () => {
    fetch('MOCK_DATA.json')
    .then(response => response.json())
    .then(jsonData => {
      populateTable(jsonData);
  
      [...tableButtons].forEach((button) => {
        button.addEventListener("click", (e) => {
          resetButtons(e);
          if (e.target.getAttribute("data-dir") === "desc") {
            sortData(jsonData, e.target.id, "desc");
            e.target.setAttribute("data-dir", "asc");
          } else {
            sortData(jsonData, e.target.id, "asc");
            e.target.setAttribute("data-dir", "desc");
          }
        });
      });
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
});