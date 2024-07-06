<template>
  <div class="modal">
    <div class="modal__overlay" @click="$emit('close')"/>
    <div class="modal__container">
      <div class="modal__header">
        <slot name="header"/>
        <img
          src="../../assets/images/icons/close.png" alt=""
          class="modal__close"
          @click="$emit('close')"
        >
      </div>
      <div class="modal__content">
        <slot name="content"/>
      </div>
      <div class="modal__footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
