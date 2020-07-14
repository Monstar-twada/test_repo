<template>
  <div class="one-point-advice-wrapper">
    <i
      class="icon-person"
      @mouseenter="detailVisible = true"
      @mouseleave="detailVisible = false"
    ></i>
    <dl v-show="detailVisible">
      <dt>
        <i></i>
        <h4>ワンポイントアドバイス</h4>
      </dt>
      <dd>
        車検で来ているお客さんを取りこぼしています。まだ車検は伸ばせるはずですので、基盤顧客の６月無料オイルの販促強化を行ってください。
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailVisible: false,
    }
  },
}
</script>

<style lang="scss">
/**
 * *******************************************
 * mixin
 * *******************************************
 */
@mixin bgImage($url) {
  //background-image: url('#{$url}@1x.png');
  background-image: url('#{$url}.png');
  @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
    background-image: url('#{$url}@2x.png');
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url('#{$url}@3x.png');
  }
}

.one-point-advice-wrapper {
  position: fixed;
  z-index: 11;
  right: 194px;
  bottom: 10px;
  transition: right 0.3s ease-in-out;
  .icon-person {
    display: inline-block;
    width: 80px;
    height: 86px;
    @include bgImage('./img/person');
    background-size: 100% auto;
    cursor: pointer;
  }
  dl {
    position: absolute;
    bottom: 98px;
    right: 5px;
    width: 210px;
    background: $white-300;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(7, 134, 189, 0.3);
    &:before {
      content: '';
      position: absolute;
      bottom: -5px;
      right: 50px;
      width: 8px;
      border-right: 8px solid $white-300;
      border-top: 8px solid transparent;
      border-bottom: 5px solid transparent;
    }
    dt {
      display: flex;
      align-items: center;
      padding: 14px 15px 10px;
      h4 {
        color: $pink-100;
      }
      i {
        display: inline-block;
        margin-right: 5px;
        width: 16px;
        height: 16px;
        background: url('./img/warn.svg') no-repeat 0 0;
        background-size: cover;
      }
    }
    dd {
      padding: 0 15px 15px;
      font-size: 12px;
      color: #284c7f;
      line-height: 18px;
    }
  }
}
.next-action-is-collapsed {
  .one-point-advice-wrapper {
    right: 0;
  }
}
</style>
