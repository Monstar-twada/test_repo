### view-mode

```html
<fg-image :src="src" width="100" height="100"></fg-image>
<fg-image view-mode="fill" :src="src" width="100" height="100"></fg-image>
<fg-image view-mode="crop" inline :src="src" width="100" height="100"></fg-image>
<script>
export default {
  data() {
    return {
      src:
        'https://i.pinimg.com/originals/b9/09/d7/b909d7450a19279f53fb2b86571dcbfe.jpg',
    }
  },
}
</script>
```
