<template>
  <div class="table-group">
    <div class="table-group__row">
      <div
        v-for="(column, index) in columns"
        :key="index"
        :class="['table-group__cell', {'table-group__cell--header': isHeaderRow}]"
        :style="getCellStyle(index)"
      >
        <img
          v-if="depth > 0 && index === 0"
          src="../../../assets/images/icons/close.png" alt="plus"
          class="table-group__icon"
        />
        {{ data[column.alias] }}
      </div>
    </div>
    <TableGroup
      v-for="item in children"
      :key="item.id"
      :data="item"
      :columns="columns"
      :depth="depth + 1"
      :children="item.children"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss" scoped></style>
