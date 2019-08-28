<template>
  <q-toolbar class="row no-wrap items-center">
    <q-btn-toggle
      v-model="getStatus"
      toggle-color="primary"
      flat
      :options="[
          {label: 'All Status', value: ''},
          {label: 'Success', value: 'enabled'},
          {label: 'Warnings', value: 'warning'},
          {label: 'Errors', value: 'disabled'}
        ]"
    />
    <q-space />
    <q-input v-model="getFilter" filled type="search" debounce="500" placeholder="Search">
      <template v-slot:append>
        <q-icon name="eva-search-outline" />
      </template>
    </q-input>
  </q-toolbar>
</template>

<script>
export default {
  name: 'ToolBarTable',
  props: ['status', 'filter'],
  components: {

  },
  data () {
    return {
    }
  },
  computed: {
    getStatus: {
      get () {
        return this.status
      },
      set (newValue) {
        this.$emit('update:status', newValue)
      }
    },
    getFilter: {
      get () {
        return this.filter
      },
      set (newValue) {
        this.$emit('update:filter', newValue)
      }
    }
  },
  methods: {

  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  @import "../../css/sass/variables";

</style>
