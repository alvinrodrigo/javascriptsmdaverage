let Math = 95;
let Science = 96;
let English = 99;
let Filipino = 97;
let AP = 90;
let WebDev = 96;
let ComProg = 95;
let ave = ((Math + Science + English + Filipino + AP + WebDev + ComProg) / 7);
const grade = [
    { id: 'Math' , first: Math, second: '', total: '' },
    { id: 'Science', first: Science, second: '', total: '' },
    { id: 'English', first: English, second: '', total: '' },
    { id: 'Filipino', first: Filipino, second: '', total: '' },
    { id: 'AP', first: AP, second: '', total: '' },
    { id: 'WebDev', first: WebDev, second: '', total: '' },
    { id: 'ComProg', first: ComProg, second: '', total: '' },
    { id: '', first: '', second: '', total: '' },
    { id: '<b>Average Grade:', first: '', second: '', total: ave },
];
function populateTable() {
    const tableBody = document.getElementById('grades1');

    grade.forEach(grades => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${grades.id}</td>
        <td>${grades.first}</td>
        <td>${grades.second}</td>
        <td>${grades.total}</td>
      `;
      tableBody.appendChild(row);
    });
}

window.onload = populateTable;