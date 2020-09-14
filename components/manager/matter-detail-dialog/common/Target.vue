<template>
  <div class="matter-detail-dialog__target">
    <Item
      bold
      left="30"
      right="56"
      label-width="66"
      label="対象顧客"
      class="mt20"
    >
      <fg-row gutter="20">
        <fg-col span="12">
          <div class="target-item">
            <fg-avatar
              size="60"
              :data="user"
              text-flex-direction-column
              text-summary-no-offset
            />
          </div>
        </fg-col>
        <fg-col span="12">
          <div v-if="carItem.disabled" class="target-item car disabled">
            <fg-image></fg-image>
            <div class="info">
              <h4>未確定</h4>
            </div>
          </div>
          <div v-else class="target-item car">
            <fg-image :src="carItem.url"></fg-image>
            <div class="info">
              <h4>{{ carItem.text }}</h4>
              <h4>{{ carItem.remark }}</h4>
            </div>
          </div>
        </fg-col>
      </fg-row>
    </Item>
    <Item
      bold
      left="30"
      right="56"
      label-width="66"
      label="コメント"
      class="mt30"
      align="baseline"
    >
      <div v-for="(item, i) in commentList" :key="i" class="comment-item">
        <fg-avatar :src="item.avatar" size="24"></fg-avatar>
        <dl>
          <dt>{{ item.name }}</dt>
          <dd>{{ item.date }}</dd>
        </dl>
        <div class="comment-content">
          <p v-for="(p, j) in item.content" :key="j">{{ p }}</p>
        </div>
      </div>
    </Item>
    <div class="comment-textarea">
      <fg-input
        v-model="comment"
        type="textarea"
        placeholder="コメントを入力"
        :rows="3"
      ></fg-input>
      <ButtonComment :disabled="!hasComment" />
    </div>
  </div>
</template>

<script>
import Item from '../common/Item'
import ButtonComment from '../common/ButtonComment'
export default {
  components: { Item, ButtonComment },
  data() {
    return {
      user: {
        url: '/common/person_default.svg',
        name: '米田 道春',
        subName: '（31歳）',
        summary: 'ヨネダ ミチハル',
      },
      commentList: [
        {
          avatar: '/common/person_default.svg',
          name: '岡田俊平',
          date: '2020/02/10 14:24',
          content: [
            '乗り換えを希望していて、コンパクトカーまたはSUVを考えています。',
            '最寄りのcars杉並には来店出来るそうです。（土日）',
          ],
        },
        {
          avatar: '/common/person_default.svg',
          name: '浅井健太',
          date: '2020/02/10 14:24',
          content: [
            '乗り換えを希望していて、コンパクトカーまたはSUVを考えています。',
            '最寄りのcars杉並には来店出来るそうです。（土日）',
          ],
        },
        {
          avatar: '/common/person_default.svg',
          name: '谷口広大',
          date: '2020/02/10 14:24',
          content: [
            '乗り換えを希望していて、コンパクトカーまたはSUVを考えています。',
            '最寄りのcars杉並には来店出来るそうです。（土日）',
          ],
        },
      ],
      comment: '',
      carItem: {
        disabled: true,
        url: '/manager/temp/car-red@2x.png',
        text: 'ランボルギーニ',
        remark: 'ウラカン',
      },
    }
  },
  computed: {
    hasComment() {
      return !!this.comment
    },
  },
}
</script>

<style lang="scss">
@import '../common/mixins';
.matter-detail-dialog__target {
  position: relative;
  background: $--color-background;
  overflow: hidden;
  .target-item {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 90px;
    background: $--color-white;
    border-radius: 8px;
    &.car {
      position: relative;
      .fg-image {
        margin-right: 10px;
        width: 120px;
        height: 70px;
        background: url('../common/img/car.svg') no-repeat center center;
      }
      .info {
      }
    }
    &.disabled {
      color: $--color-border;
    }
  }
  .fg-avatar {
    .text-wrapper {
      justify-content: center;
      .__summary {
        font-weight: normal;
        margin-top: 5px;
      }
    }
  }
  .comment-item {
    background: $--color-white;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px 20px;
    display: flex;
    &:last-child {
      margin-bottom: 0;
    }
    .fg-avatar {
      flex: 0 0 24px;
    }
    dl {
      dt {
        font-weight: bold;
        font-size: 14px;
      }
      dd {
        font-size: 10px;
      }
    }
    .comment-content {
      margin-left: 20px;
    }
  }
  .comment-textarea {
    position: relative;
    margin-top: 20px;
    padding: 20px 45px;
    background: rgba(255, 255, 255, 0.51);
    display: flex;
    align-items: center;
    @include borderTop();
    .fg-input {
      flex: 1;
      textarea {
        border: 0 !important;
        border-radius: 8px;
        background: $--color-white;
      }
    }
  }
}
</style>
