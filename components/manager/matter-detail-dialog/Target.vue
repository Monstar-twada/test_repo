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
          <div class="target-item car"></div>
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
      <button :disabled="!hasComment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28.605"
          height="27.745"
          viewBox="0 0 28.605 27.745"
        >
          <g transform="translate(-1.126 -2.127)">
            <path
              d="M1.911,16.179c-1.084.568-1.039,1.4.1,1.852l3.364,1.331a4.316,4.316,0,0,0,3.821-.55L23.806,7.289c.961-.757,1.064-.645.229.249L12.483,19.9a1.4,1.4,0,0,0,.55,2.425l.394.154c1.14.44,3,1.182,4.132,1.642l3.732,1.521c1.133.46,2.06.842,2.062.849s.006.028.012.03.273-.962.594-2.141L29.647,3.474c.321-1.18-.3-1.681-1.385-1.113Z"
              fill="currentColor"
            />
            <path
              d="M11.146,29.864c-.067.2,2.3-3.429,2.3-3.429a1.77,1.77,0,0,0-.842-2.7l-2.582-1.058c-1.132-.463-1.674.08-1.2,1.212C8.818,23.887,11.214,29.66,11.146,29.864Z"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Item from './common/Item'
export default {
  components: { Item },
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
@import './common/mixins';
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
      &:before {
        display: inline-block;
        margin: 10px 13px 0 0;
        content: '';
        background: url('./img/car.svg') no-repeat center center;
        width: 120px;
        height: 70px;
      }
      &:after {
        content: '未確定';
        font-size: 12px;
        color: $--color-border;
      }
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
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: $--color-white;
      border-radius: 50%;
      flex: 0 0 56px;
      margin-left: 14px;
      width: 56px;
      height: 56px;
      cursor: pointer;
      outline: none;
      &:active {
        svg {
          color: $--color-primary;
        }
      }
      svg {
        color: $--color-primary-active;
      }
      &[disabled] {
        cursor: not-allowed;
        svg {
          color: $--color-primary-placeholder;
        }
      }
    }
  }
}
</style>
