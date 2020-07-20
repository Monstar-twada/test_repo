<template>
  <div class="bodyContainer__userInfo userInfoContainer">
    <h3>基本情報</h3>
    <div class="userInfoContainer__content">
      <ConfirmRowContainer :title="'あなたの写真'">
        <template>
          <div class="row--body--pic">
            <div class="pic--right">
              <v-img
                :max-width="80"
                :max-height="80"
                :src="require(`~/static/customer/person_img.png`)"
              ></v-img>
            </div>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer
        :title="'氏名'"
        :kind="'base'"
        :value="'米田 道春'"
      />
      <ConfirmRowContainer
        :title="'道春'"
        :kind="'base'"
        :value="'ヨネダ ミチハル'"
      />
      <ConfirmRowContainer
        :title="'ユーザー名'"
        :kind="'base'"
        :value="'miche_yone'"
      />
      <ConfirmRowContainer :title="'性別'" :kind="'base'" :value="'男性'" />
      <ConfirmRowContainer
        :title="'電話番号1'"
        :kind="'base'"
        :value="'000-0000-0000'"
      />
      <ConfirmRowContainer
        :title="'電話番号2'"
        :kind="'base'"
        :value="'000-0000-0000'"
      />
      <ConfirmRowContainer
        :title="'メールアドレス'"
        :kind="'base'"
        :value="'user@cars-enjoy.com'"
      />
      <ConfirmRowContainer
        :title="'郵便番号'"
        :kind="'base'"
        :value="'1234567'"
      />
      <ConfirmRowContainer
        :title="'都道府県'"
        :kind="'base'"
        :value="'東京都'"
      />
      <ConfirmRowContainer
        :title="'市区町村'"
        :kind="'base'"
        :value="'渋谷区'"
      />
      <ConfirmRowContainer
        :title="'番地など'"
        :kind="'base'"
        :value="'2丁目'"
      />
      <ConfirmRowContainer
        :title="'建物名・部屋番号など'"
        :kind="'base'"
        :value="'カーズマンション'"
      />
      <ConfirmRowContainer
        :title="'生年月日'"
        :kind="'base'"
        :value="'昭和63年1月1日'"
      />
      <ConfirmRowContainer
        :title="'勤務先'"
        :kind="'base'"
        :value="'カーズ株式会社(03-1234-1234)'"
      />
      <ConfirmRowContainer :title="'勤続年数'" :kind="'base'" :value="'3年'" />
      <ConfirmRowContainer :title="'年収'" :kind="'base'" :value="'500万円'" />
      <ConfirmRowContainer
        :title="'住宅'"
        :kind="'base'"
        :value="'持家（家族所有） 11年'"
      />
      <ConfirmRowContainer :title="'免許証'">
        <template>
          <div class="row--body--pic">
            <div class="pic--right">
              <v-img
                :max-width="151"
                :max-height="100"
                :src="require(`~/static/customer/user_card_img.png`)"
              ></v-img>
            </div>
          </div>
        </template>
      </ConfirmRowContainer>
      <ConfirmRowContainer
        :title="'銀行口座'"
        :kind="'base'"
        :value="'みずほ銀行(001)  渋谷支店(210) 普通 0123456'"
      />
      <ConfirmRowContainer :title="'保険情報有無'">
        <template>
          <div class="row--body--family">
            <div class="row--body--family--part">
              <div class="row--body--family--part--title"><p>配偶者</p></div>
              <div class="row--body--family--part--items">
                <div>
                  <v-img
                    :max-width="16"
                    :max-height="16"
                    :src="require(`~/static/customer/person_default.svg`)"
                  ></v-img>
                  <p>米田直子（30歳）</p>
                </div>
              </div>
            </div>
            <div class="row--body--family--part">
              <div class="row--body--family--part--title"><p>子供</p></div>
              <div class="row--body--family--part--items">
                <div>
                  <v-img
                    :max-width="16"
                    :max-height="16"
                    :src="require(`~/static/customer/person_default.svg`)"
                  ></v-img>
                  <p>米田 拓実（11歳）</p>
                </div>
                <div>
                  <v-img
                    :max-width="16"
                    :max-height="16"
                    :src="require(`~/static/customer/person_default.svg`)"
                  ></v-img>
                  <p>米田 咲（8歳）</p>
                </div>
                <div>
                  <v-img
                    :max-width="16"
                    :max-height="16"
                    :src="require(`~/static/customer/person_default.svg`)"
                  ></v-img>
                  <p>米田あや（2歳）</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ConfirmRowContainer>
    </div>
  </div>
</template>

<script>
import ConfirmRowContainer from '~/components/customer/regist/common/ConfirmRowContainer'

export default {
  name: 'UserInfoContainer',
  components: {
    ConfirmRowContainer,
  },
}
</script>
<style lang="scss" scoped>
.userInfoContainer {
  width: 100%;
  border-radius: 6px;
  background-color: $white-300;
  padding: 24px 23.5px;
  margin-bottom: 30px;
  h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .row--body--pic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: max-content;
    height: 100px;
    border-radius: 4px;
    & > div {
      width: max-content;
      justify-self: center;
    }
    .pic--left {
      p {
        font-size: 12px;
        color: $blue-500;
      }
    }
  }
  .row--body--family {
    width: 440px;
    font-size: 12px;
    color: $blue-200;
    &--part {
      display: grid;
      grid-template-columns: 60px 1fr;
      &--title {
        p {
          padding-bottom: 0;
        }
      }
      &--items {
        & > div {
          display: flex;
          align-items: center;
          padding-bottom: 28px;
          .v-image {
            margin-right: 2px;
          }
          p {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
