const app = new Vue({
  el: '.app',
  data: {
    notes: [],
    currentNote: null
  },
  // load notes when Vue app is mounted
  mounted() {
    if (localStorage.notes) {
      this.notes = JSON.parse(localStorage.notes);
    }
  },
  // save notes when they're modified
  watch: {
    notes: {
      handler(newNotes) {
        localStorage.notes = JSON.stringify(newNotes);
      },
      deep: true
    }
  },
  methods: {
    createNote() {
      const newNote = {title: '', contents: ''};
      this.notes.push(newNote);
      this.currentNote = newNote;
      this.$nextTick(function() {
        this.$refs.noteTitle.focus();
      });
    }
  }
});