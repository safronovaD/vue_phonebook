import Button from '../../components/Button/Button';
import ModalAddPhone from "./blocks/ModalAddPhone/ModalAddPhone";
import Table from "../../components/Table/Table";

export default {
  name: "Phones",
  components: {
    Button,
    ModalAddPhone,
    Table
  },
  data() {
    return {
      phonesList: JSON.parse(localStorage.getItem("phonesList")) || [],
      lastPhoneId: JSON.parse(localStorage.getItem("lastPhoneId")) || 0,
      isVisibleModalAddPhone: false
    }
  },
  methods: {
    addPhone(data) {
      const newPhone = {id: data.id, name: data.name, phone: data.phone, children: []};

      if(data.parent) {
        let parentFromList = this.getPhoneById(data.parent.id, this.phonesList);
        parentFromList.children.push(newPhone);
      } else {
        this.phonesList.push(newPhone);
      }

      this.lastPhoneId += 1;

      localStorage.setItem("phonesList", JSON.stringify(this.phonesList));
      localStorage.setItem("lastPhoneId", JSON.stringify(this.lastPhoneId));
    },
    getPhoneById(id, array) {
      for (let phone of array) {
        if (phone.id === id) {
          return phone;
        }
        else if (phone.children.length) {
          let result;

          result = this.getPhoneById(id, phone.children)

          if (result)
            return result;
        }
      }
    }
  }
}
