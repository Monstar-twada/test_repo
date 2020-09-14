<template>
  <button class="comment-textarea__btn" :disabled="disabled">
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
</template>

<script>
export default {
  name: 'ButtonComment',
  props: {
    disabled: Boolean,
  },
}
</script>

<style lang="scss">
.comment-textarea__btn {
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
</style>
