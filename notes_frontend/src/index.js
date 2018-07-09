/* src/index.js */
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchNotes().then(app.createNotes);
});


//Pre OO code:
//
//
// document.addEventListener('DOMContentLoaded', () => {
//   const endPoint = 'http://localhost:3000/api/v1/notes';
//   fetch(endPoint)
//     .then(res => res.json())
//     .then(json =>
//       json.forEach(note => {
//         const markup = `
//         <li>
//           <h3>${note.title}
//             <button>edit</button>
//           </h3>
//         </li>`;
//         document.getElementById('notes-list').innerHTML += markup;
//       })
//     );
// });
