<template>
  <div>
    <TextContent
      v-for="(arr, key) in list"
      :key="key"
      :label="key"
      label-font-weight="normal"
      label-width="60px"
      style="padding: 2px 0 !important;"
    >
      <div v-for="(item, i) in arr" :key="key + i">
        {{ item.text }}
      </div>
    </TextContent>
  </div>
</template>

<script>
import TextContent from '../../common/TextContent'
export default {
  components: {
    TextContent,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    list() {
      const data = this.$ui.getBasicData('family_relationship', true)
      const temp = {}
      this.items.forEach((item) => {
        const type = (data[item.familyRelationship] || '').replace('・', '')
        if (!temp[type]) {
          temp[type] = []
        }
        temp[type].push({
          ...item,
          text: [
            item.lastName,
            item.firstName,
            ` (${item.age ? item.age : ' - '}歳)`,
          ].join(''),
        })
      })
      return temp
    },
  },
}
</script>

<style></style>
