<template>
  <div class="table">
    <TableGroup
      :data="getHeaderData()"
      :columns="columns"
      :is-header-row="true"
    />
    <TableGroup
      v-for="item in data"
      :key="item.id"
      :data="item"
      :columns="columns"
      :children="item.children"
    />
  </div>
</template>

<script>
import TableGroup from "./TableGroup/TableGroup";

export default {
  name: "Table",
  components: {
    TableGroup
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  methods: {
    getHeaderData() {
      let data = {};

      this.columns.forEach((column) => data[column.alias] = column.title)

      return data;
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-radius: 8px;
}
</style>
