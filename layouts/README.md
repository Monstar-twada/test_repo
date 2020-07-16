# layouts

### Structure

```
/layouts
  |- dashboard
    |- assess
    |- matching
    |- ...
    |- admin
  |- manager
    |- bi
    |- ma
    |- ...
    |- admin
  |- login
    |- forgot
    |- reset
```

### Usage

/pages/**/login/index.vue

```vue
<template>
  <div class="login-container">
    Login Page
  </div>
</template>

<script>
export default {
  layout: 'login',
}
</script>
```

/pages/dashboard/assess/index.vue

```vue
<template>
  <div class="assess-container">
    Assess Page
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>
```
