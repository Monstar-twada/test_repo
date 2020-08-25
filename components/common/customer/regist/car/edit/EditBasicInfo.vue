<template>
  <div class="bodyContainer__carInfo carBasicInfoContainer">
    <h3 class="mb20">所有者情報</h3>
    <div class="form-inner-wrapper">
      <fg-form label-width="120px">
        <fg-form-item label="所有者">
          <fg-avatar :data="avatarData" />
          <fg-button prefix-icon="change" border size="mini">変更</fg-button>
          <fg-button icon="trash" border circle size="mini"></fg-button>
        </fg-form-item>
        <fg-form-item label="意思決定者">
          <fg-avatar :data="avatarData" />
          <fg-button prefix-icon="change" border size="mini">変更</fg-button>
          <fg-button icon="trash" border circle size="mini"></fg-button>
        </fg-form-item>
        <fg-form-item label="利用者">
          <fg-row gutter="20">
            <fg-col span="40">
              <fg-avatar :data="avatarData" />
              <fg-button prefix-icon="change" border size="mini"
                >変更</fg-button
              >
              <fg-button icon="trash" border circle size="mini"></fg-button>
            </fg-col>
            <fg-col span="20">
              <fg-avatar :data="avatarData" />
              <fg-button prefix-icon="change" border size="mini"
                >変更</fg-button
              >
              <fg-button icon="trash" border circle size="mini"></fg-button>
              <fg-button icon="plus" border circle size="small"></fg-button>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="主な利用目的">
          <fg-tag size="medium" fillet>車出勤</fg-tag>
          <fg-tag size="medium" fillet>買い物</fg-tag>
          <fg-tag size="medium" fillet>部活送迎</fg-tag>
          <fg-tag size="medium" fillet>習い事送迎</fg-tag>
        </fg-form-item>
      </fg-form>
    </div>
  </div>
</template>

<script>
function toDouble(n) {
  return n.toString()[1] ? n : '0' + n
}
export default {
  name: 'CarBasicInfoContainer',
  components: {},
  data() {
    const months = []
    for (let i = 1; i <= 12; i++) {
      months.push({
        text: toDouble(i),
        value: i,
      })
    }
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push({
        text: toDouble(i),
        value: i,
      })
    }
    return {
      avatarData: {
        url:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1305069542,2938692060&fm=26&gp=0.jpg',
        name: '米田 道春',
        summary: '（31歳）',
      },
      years: [
        {
          text: '1990',
          value: 1990,
        },
      ],
      months,
      days,
      form: {
        userName: 'Jock',
        year: 1990,
        month: 5,
        day: 12,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.carBasicInfoContainer {
  width: 715px;
  height: auto;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
}
</style>
