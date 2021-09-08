const app = new Vue({
  el: '.app',
  data: {
    notes: [],
    currentNote: null
  },
  methods: {
    createNote() {
      const newNote = {title: '', contents: ''};
      this.notes.push(newNote);
      this.currentNote = newNote;
      this.$nextTick(function() {
        this.$refs.noteTitle.focus();
      });
    },
    deleteNote() {
      for (var i = 0; i < this.notes.length; i++) {
        if (this.notes[i] === this.currentNote) {
          if (confirm("Are you sure?")) {
            this.notes.splice(i, 1);
            this.currentNote = null;
            this.$nextTick(function() {
              this.$refs.deleteButton.blur();
            });
          }
        }
      }
    }
    
  }
});
