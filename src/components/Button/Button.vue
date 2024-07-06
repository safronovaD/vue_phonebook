<template>
  <button class="button bold" @click="$emit('click')" :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 12px 20px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  background-color: #7FB5B5;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s linear;

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  &:disabled {
    background-color: #DEDEDE;
    cursor: default;
  }

  &:not(:disabled):hover {
    background-color: #5D9B9B;
  }
}
</style>
