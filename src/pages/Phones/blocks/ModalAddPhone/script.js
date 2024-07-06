import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import Input from '../../../../components/Input/Input';
import Select from '../../../../components/Select/Select';

export default {
  name: "ModalAddPhone",
  components: {
    Button,
    Modal,
    Input,
    Select
  },
  props: {
    phonesList: {
      type: Array,
      required: true
    },
    lastPhoneId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      form: {
        name: '',
        phone: '',
        parent: null
      },
      currentPhoneId: this.lastPhoneId + 1,
      flatPhonesList: []
    }
  },
  methods: {
    save() {
      this.$emit('add-phone', {id: this.currentPhoneId, ...this.form});
      this.$emit('close');
    },
    getFlatPhonesList(array) {
      let result = [];

      array.forEach(item => {
        result.push(item);

        if (item.children)
          result.push(...this.getFlatPhonesList(item.children));
      });

      return result;
    },
  },
  beforeMount() {
    this.flatPhonesList = this.getFlatPhonesList(this.phonesList);
  }
}
