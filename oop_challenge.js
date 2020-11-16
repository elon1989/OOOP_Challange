/* create a data structure to store 9 users name starting "starting user1 up to user9"
   create the list items (li) class in javascript
   create the list (ul) class in javascript
   use object oriend pattern to create ul from a class of ul
   use object oriend pattern to create lis from a class of Lis
   and finally show the result in the DOM
*/

/* Andra försöket */

const container = document.querySelector('.card');
container.innerHTML = `
   <ul class="list"></ul>
`;
const ul = document.querySelector('.list');

function user(name, lastname, age){

   this.name = name,
   this.lastname = lastname,
   this.age = age;
   
   ul.innerHTML += `
      <li class="list-item" style="text-transform: capitalize;">
         ${this.name} ${this.lastname}. Age ${this.age}
      </li>
   `
};

new user('loke', 'almgren', '25');
new user('elon', 'månsson', '31');
new user('Anton', 'Ahlström', '25');
new user('frank', 'mårtensson', '61');
new user('rolf', 'Fransson', '231');
new user('mirwas', 'Lärarsson', '21');
new user('jörgen', 'Andersson', '41');
new user('Rut', 'torstensson', '73');
new user('Emma', 'Svensson', '36');



/* FÖRSTA FÖRSÖKET! */

/* 
const user1 = new user('elon', 'månsson', '31');
const user2 = new user('loke', 'almgren', '25');
const user3 = new user('Anton', 'Ahlström', '25');
const user4 = new user('frank', 'mårtensson', '61');
const user5 = new user('rolf', 'Fransson', '231');
const user6 = new user('mirwas', 'Lärarsson', '21');
const user7 = new user('jörgen', 'Andersson', '41');
const user8 = new user('Rut', 'torstensson', '73');
const user9 = new user('Emma', 'Svensson', '36');

container.innerHTML = `
   <ul class="list">
      <li class="list-item">${user1.name} ${user1.lastname} ${user1.age}</li>
      <li class="list-item">${user2.name} ${user2.lastname} ${user2.age}</li>
      <li class="list-item">${user3.name} ${user3.lastname} ${user3.age}</li>
      <li class="list-item">${user4.name} ${user4.lastname} ${user4.age}</li>
      <li class="list-item">${user5.name} ${user5.lastname} ${user5.age}</li>
      <li class="list-item">${user6.name} ${user6.lastname} ${user6.age}</li>
      <li class="list-item">${user7.name} ${user7.lastname} ${user7.age}</li>
      <li class="list-item">${user8.name} ${user8.lastname} ${user8.age}</li>

   </ul>
`;
 */
