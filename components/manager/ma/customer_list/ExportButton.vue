<template>
  <button class="import-button" @click="$emit('click')">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13.946"
      viewBox="0 0 14 13.946"
    >
      <g
        id="グループ_3527"
        data-name="グループ 3527"
        transform="translate(0 -0.118)"
      >
        <path
          id="パス_2177"
          data-name="パス 2177"
          d="M11.393,16.464H10.069v1.379h1.324c.691,0,1.228.353,1.228.657v6.116c0,.3-.536.657-1.228.657H2.607c-.691,0-1.228-.353-1.228-.657V18.5c0-.3.536-.657,1.228-.657H3.931V16.464H2.607C1.145,16.464,0,17.359,0,18.5v6.116c0,1.142,1.145,2.036,2.607,2.036h8.786c1.461,0,2.607-.894,2.607-2.036V18.5C14,17.358,12.855,16.464,11.393,16.464Z"
          transform="translate(0 -12.589)"
          fill="#0786BD"
        />
        <path
          id="パス_2178"
          data-name="パス 2178"
          d="M23.389,6.757a.687.687,0,0,0-.488.2l-.863.863V1.807a.69.69,0,0,0-1.379,0V7.869l-.91-.91a.689.689,0,0,0-.975.975l2.059,2.059a.687.687,0,0,0,.487.2h.01a.686.686,0,0,0,.487-.2l2.059-2.059a.69.69,0,0,0-.488-1.177Z"
          transform="translate(28.348 10.313) rotate(180)"
          fill="#0786BD"
        />
      </g>
    </svg>

    <span>エクスポート</span>
  </button>
</template>

<script>
export default {
  name: 'ImportButton',
};
</script>

<style lang="scss" scoped>
.import-button {
  height: 30px;
  border-radius: 15px;
  background: $--color-white;
  padding: 0 15px;
  outline: none;
  svg {
    vertical-align: middle;
    margin-right: 4px;
  }
  span {
    font-size: 10px;
    color: $--color-primary-active;
    line-height: 30px;
  }
}
</style>
