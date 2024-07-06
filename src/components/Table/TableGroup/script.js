export default {
  name: "TableGroup",
  props: {
    data: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    children: {
      type: Array,
      default: () => []
    },
    depth: {
      type: Number,
      default: 0
    },
    isHeaderRow: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    getCellStyle(index) {
      return index === 0 ? {'width': `calc(${100 / this.columns.length}% - ${this.depth * 16}px)`} : {'width': `calc(${100 / this.columns.length}%`}
    }
  }
}
