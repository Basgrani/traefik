<template>
  <div class="table-wrapper">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      :pagination.sync="syncPagination"
      :rows-per-page-options="[10, 20, 40, 80, 100, 0]"
      :loading="loading"
      :filter="filter"
      @request="request"
      binary-state-sort
      :visible-columns="visibleColumns"
      color="primary"
      table-header-class="table-header">

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="status" :props="props">
            <avatar-state :state="props.row.status | status "/>
          </q-td>
          <q-td key="rule" :props="props">{{ props.row.rule }}</q-td>
          <q-td key="entryPoints" :props="props">{{ props.row.entryPoints }}</q-td>
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="provider" :props="props">
            <q-avatar class="provider-logo">
              <q-icon :name="`img:statics/providers/${props.row.provider}.svg`" />
            </q-avatar>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import AvatarState from './AvatarState'

export default {
  name: 'MainTable',
  props: ['data', 'request', 'loading', 'pagination', 'filter', 'type'],
  components: {
    AvatarState
  },
  data () {
    return {
      visibleColumns: ['status', 'rule', 'entryPoints', 'name', 'provider'],
      columns: [
        {
          name: 'status',
          required: true,
          label: 'Status',
          align: 'left',
          field: row => row.status
        },
        {
          name: 'rule',
          align: 'left',
          label: 'Rule',
          field: row => row.rule
        },
        {
          name: 'entryPoints',
          align: 'left',
          label: 'Entrypoints',
          field: row => row.entryPoints
        },
        {
          name: 'name',
          align: 'left',
          label: 'Name',
          field: row => row.name
        },
        {
          name: 'provider',
          align: 'right',
          label: 'Provider',
          field: row => row.provider
        }
      ]
    }
  },
  computed: {
    syncPagination: {
      get () {
        return this.pagination
      },
      set (newValue) {
        this.$emit('update:pagination', newValue)
      }
    }
  },
  methods: {

  },
  filters: {
    status (value) {
      let status = value
      if (value === 'enabled') {
        status = 'positive'
      }
      if (value === 'disabled') {
        status = 'negative'
      }
      return status
    }
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  @import "../../css/sass/variables";

  .table-wrapper {
    /deep/ .q-table__container{
      border-radius: 8px;
      .q-table {
        .table-header {
          th {
            font-size: 14px;
            font-weight: 700;
          }
        }
        tbody {
          tr:hover {
            background: rgba( $accent, 0.04 );
          }
        }
      }
    }
  }

  .provider-logo {
    width: 32px;
    height: 32px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
