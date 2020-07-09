# layouts

### Structure

```
/layouts
  |- default
    |- assess
    |- matter
    |- ...
    |- admin
  |- login
    |- forgot
    |- reset
```

### Usage

/pages/login/index.vue

```vue
<template>
  <div class="login-container">
    Login Page
  </div>
</template>

<script>
export default {
  layout: 'loggedin',
}
</script>
```

/pages/assess/index.vue

```vue
<template>
  <div class="assess-container">
    Assess Page
  </div>
</template>

<script>
export default {
  // layoutを指定する必要はない
  // layout: 'default',
}
</script>
```
