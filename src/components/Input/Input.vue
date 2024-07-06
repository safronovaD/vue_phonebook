<template>
  <div class="input">
    <div class="input__label bold"> {{ label }}</div>
    <input
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  input {
    padding: 8px;
    width: 70%;
    border-radius: 8px;
    border: 1px solid black;
    font-size: 16px;
    outline: none;

    @media (max-width: 480px) {
      font-size: 14px;
    }

    &:focus {
      border-color: #5D9B9B;
    }
  }
}
</style>
