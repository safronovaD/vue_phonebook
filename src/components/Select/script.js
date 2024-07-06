export default {
  name: "Select",
  props: {
    value: {
      type: Object
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    displayedField: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    onInput(e) {
      if(e.target.value)
        this.$emit('input', JSON.parse(e.target.value));
    }
  }
}
