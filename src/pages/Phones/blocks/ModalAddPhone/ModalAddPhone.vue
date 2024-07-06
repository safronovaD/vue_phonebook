<template>
  <Modal @close="$emit('close')">
    <template #header>
      <h2>Добавить пользователя</h2>
    </template>
    <template #content>
      <Input
        v-model="form.name"
        :label="'Имя'"
        :placeholder="'Имя'"
      />
      <Input
        v-model="form.phone"
        :label="'Телефон'"
        :placeholder="'Телефон'"
      />
      <Select
        v-model="form.parent"
        :options="flatPhonesList"
        :label="'Начальник'"
        :displayed-field="'name'"
      />
    </template>
    <template #footer>
      <Button :text="'Сохранить'" :disabled="!(form.name && form.phone)" @click="save"/>
    </template>
  </Modal>
</template>

<script src="./script.js"></script>
