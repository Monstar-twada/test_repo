<template>
  <div class="example-avatar-wrapper">
    <Doc />
    <TableAvatarData />
    <TextFlexDirectionColumn />
    <TextSummaryNoOffset />
    <AvatarOnly />
    <LongTextData />
  </div>
</template>

<script>
import { customMixin } from '../_app/mixins'
import Doc from './doc.md'
import TableAvatarData from './TableAvatarData.md'
import TextFlexDirectionColumn from './TextFlexDirectionColumn.md'
import TextSummaryNoOffset from './TextSummaryNoOffset.md'
import AvatarOnly from './AvatarOnly.md'
import LongTextData from './LongTextData.md'
export default {
  components: {
    Doc,
    TableAvatarData,
    TextFlexDirectionColumn,
    TextSummaryNoOffset,
    AvatarOnly,
    LongTextData,
  },
  mixins: [customMixin],
}
</script>

<style lang="scss"></style>
