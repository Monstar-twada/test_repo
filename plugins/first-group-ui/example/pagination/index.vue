<template>
  <div class="example-pagination-wrapper">
    <dl>
      <dt>blue</dt>
      <dd>
        <fg-pagination
          :value="currentPage"
          :total="total"
          :page-size="pageSize"
          theme="blue"
          @change="pageChange"
        ></fg-pagination>
      </dd>
    </dl>
    <dl class="normal-item">
      <dt>normal, show-number="5"</dt>
      <dd>
        <fg-pagination
          v-model="currentPage2"
          :total="total"
          :page-size="pageSize"
          :show-number="5"
        ></fg-pagination>
      </dd>
    </dl>
    <dl class="normal-item">
      <dt>total le pageSize</dt>
      <dd>
        <fg-pagination
          v-model="currentPage4"
          :total="total4"
          :page-size="pageSize"
          :show-number="5"
        ></fg-pagination>
      </dd>
    </dl>
    <dl>
      <dt>total le pageSize theme="blue"</dt>
      <dd>
        <fg-pagination
          v-model="currentPage5"
          :total="total5"
          :page-size="pageSize"
          :show-number="5"
          theme="blue"
        ></fg-pagination>
      </dd>
    </dl>
    <dl>
      <dt>hide-page-info</dt>
      <dd>
        <fg-pagination
          v-model="currentPage3"
          :total="total"
          :page-size="pageSize"
          theme="blue"
          hide-page-info
        ></fg-pagination>
      </dd>
    </dl>
    <dl>
      <dt>beforeChange()</dt>
      <dd>
        <fg-pagination
          v-model="currentPage3"
          :total="total"
          :page-size="pageSize"
          theme="blue"
          :before-change="beforeChange"
        ></fg-pagination>
      </dd>
    </dl>
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'

export default {
  mixins: [customMixin],
  data() {
    return {
      total: 234342,
      pageSize: 10,
      currentPage: 3,
      currentPage2: 6,
      currentPage3: 6,
      currentPage4: 1,
      total4: 9,
      currentPage5: 1,
      total5: 10,
    }
  },
  created() {
    setTimeout(() => {
      this.currentPage5 = 1
      this.total5 = 97
    }, 3000)
  },
  methods: {
    pageChange(newPage) {
      if (this.isChange) {
        return
      }
      this.currentPage = newPage
    },
    beforeChange(next, newPage, oldPage) {
      this.$confirm(`page ${oldPage} to ${newPage} ?`)
        .then(() => {
          next()
        })
        .catch(() => {
          console.log('cancel')
        })
    },
  },
}
</script>

<style lang="scss">
.example-pagination-wrapper {
  * {
    padding: 0;
    margin: 0;
  }
  dl {
    padding-bottom: 20px;
    dd {
      padding: 20px 0;
    }
  }
  .normal-item {
    dd {
      padding: 20px;
      background: $--color-primary-active;
    }
  }
}
</style>
