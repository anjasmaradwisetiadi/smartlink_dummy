export const mixinsAllModal = {
  data(){
    return{
        innerWidth: 0,
        innerHeight: 0,
        editModalState: '',  
        enableDelete: false,
        indexTo: null,
        idTo: null, 
    }
  },

  created() {
    window.addEventListener('resize', this.handleResize);
  },

  destroyed() {
    window.addEventListener('resize', this.handleResize);
  },

  methods: {
    modalEditGaji(data) {
      this.editModalState = data.variabel;
      this.idTo = data.id;

      this.handleResize();
    },

    handleResize() {
      this.innerWidthHeight({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      })

    },

    modalEditKehadiran(data) {
      this.editModalState = data.variabel;
      this.handleResize();
    },

    modalAddKomisi(data) {
      this.idTo = data.id;
      this.editModalState = data.variabel;
      this.enableDelete = data.enableDelete;
      this.handleResize();
    },

    modalEditKomisi(data) {
      this.idTo = data.id;
      this.editModalState = data.variabel;
      this.enableDelete = data.enableDelete;
      this.indexTo = data.index;
      this.handleResize();
    },

    modalAddTanggungan(data) {
      this.idTo = data.id;
      this.editModalState = data.variabel;
      this.enableDelete = data.enableDelete;
      this.handleResize();
    },

    modalEditTanggungan(data) {
      this.idTo = data.id;
      this.editModalState = data.variabel;
      this.enableDelete = data.enableDelete;
      this.indexTo = data.index;
      this.handleResize();
    },
  }
}
