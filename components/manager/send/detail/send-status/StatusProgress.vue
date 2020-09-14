<template>
  <div class="send-status-progress">
    <ul class="send-status-progress-wrapper">
      <li
        v-for="(item, i) in newsList"
        :key="i"
        class="send-status-progress-item"
      >
        <div class="send-status-progress-item-info">
          <img :src="require(`./img/${item.iconSrc}.svg`)" />
          <h4>{{ item.name }}</h4>
          <span>{{ item.date }}</span>
        </div>
        <div class="send-status-progress-item-content">
          <p>{{ item.content }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailContainer',
  components: {},
  data: () => ({
    profile: {
      lastName: '米田',
      firstName: '道春',
      lastNameKana: 'ヨネダ',
      firstNameKana: 'ミチハル',
      age: 31,
    },
    newsList: [
      {
        iconSrc: 'person1',
        name: '岡田俊平',
        date: '2020/02/10 14:24',
        content: '担当が決まりました！',
      },
      {
        iconSrc: 'person2',
        name: '岡田俊平',
        date: '2020/02/10 14:24',
        content: '初回面談日が「2020/03/12」に確定しました！',
      },
      {
        iconSrc: 'person2',
        name: '浅井健太',
        date: '2020/02/10 14:24',
        content: '入庫日が「2020/04/28」に確定しました！',
      },
      {
        iconSrc: 'person2',
        name: '浅井健太',
        date: '2020/02/10 14:24',
        content: '残念ながら成約に至りませんでしたので、ご報告いたします。！',
      },
      {
        iconSrc: 'person2',
        name: '浅井健太',
        date: '2020/02/10 14:24',
        content:
          '車検作業が完了しました！車検証を車両詳細ページからダウンロードできます！',
      },
      {
        iconSrc: 'person2',
        name: '浅井健太',
        date: '2020/02/10 14:24',
        content: '紹介料のお支払いは、「2020/06/30」となります！',
      },
      {
        iconSrc: 'person1',
        name: '岡田俊平',
        date: '2020/02/10 14:24',
        content: '紹介料のお支払いが完了しましたのでご報告いたします！',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.send-status-progress-item {
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  margin: 10px 0;
  border-radius: 6px;
  justify-content: flex-start;
  align-items: top;
  background-color: $--color-white;
  color: $--color-primary;

  &-info {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h4 {
      margin: 0 30px 0 10px;
    }
    span {
      font-size: 9px;
      color: $--color-primary-placeholder;
    }
  }

  &-content {
    display: flex;
    align-items: center;
    font-size: 14px;
    p {
      margin-bottom: 0;
    }
  }
}
</style>
