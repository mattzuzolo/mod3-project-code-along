/* create a file src/note.js and link to it from your index.html */
class Note {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    Note.all.push(this);
  }

  renderListItem() {
    return `
    <li>
      <h3>${this.title}
        <button data-id=${this.id}>edit</button>
      </h3>
    </li>`;
  }

  static findById(id) {
    return this.all.find(note => note.id === id);
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Title</label>
      <p>
        <input type="text" value="${this.title}" />
      </p>
      <label>Content</label>
      <p>
        <textarea>${this.content}</textarea>
      </p>
      <button type='submit'>Save Note</button>
    </form>
  `;
  }

  update({ title, content }) {
    this.title = title;
    this.content = content;
  }
  
}

Note.all = [];
