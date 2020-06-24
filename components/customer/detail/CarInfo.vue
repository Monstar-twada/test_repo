<template>
  <v-row align="top" justify="center" class="customer-car ma-0 pa-0">
    <div class="title">
      <h2>顧客情報</h2>
      <p><v-img :src="require('~/static/customer/btn-plus.svg')" /></p>
    </div>
    <v-col cols="8" class="p20">
      <v-row align="top" justify="center" class="customer-car__owner ma-0">
        <SubTitle sub-title="プリウス" />
        <v-col cols="3" class="px-0">
          <h4>所有者</h4>
          <v-avatar size="30" class="ml10">
            <v-img :src="require('~/static/breadcrumbs/person.png')" />
          </v-avatar>
        </v-col>
        <v-col cols="3" class="px-0">
          <h4>意思決定者</h4>
          <v-avatar size="30" class="ml10">
            <v-img :src="require('~/static/breadcrumbs/person.png')" />
          </v-avatar>
        </v-col>
        <v-col cols="3" class="px-0">
          <h4>利用者</h4>
          <v-avatar size="30" class="ml10">
            <v-img :src="require('~/static/breadcrumbs/person.png')" />
          </v-avatar>
          <v-avatar size="30">
            <v-img :src="require('~/static/customer/profile-edit.svg')" />
          </v-avatar>
        </v-col>
        <v-col cols="3"></v-col>
        <v-col cols="2" class="px-0">
          <h4>主な利用目的</h4>
        </v-col>
        <v-col cols="10" class="px-0">
          <v-chip outlined>車出勤</v-chip>
          <v-chip outlined>買い物</v-chip>
          <v-chip outlined>部活送迎</v-chip>
          <v-chip outlined>習い事送迎</v-chip>
        </v-col>
        <v-col cols="2" class="px-0">
          <h4>取引種別</h4>
        </v-col>
        <v-col cols="10" class="px-0">
          <v-chip color="primary">車販</v-chip>
          <v-chip color="primary">整備</v-chip>
          <v-chip>車検</v-chip>
          <v-chip>鈑金</v-chip>
          <v-chip>保険</v-chip>
        </v-col>
        <SubTitle sub-title="車両基本情報" />
        <v-col cols="6" class="px-0">
          <TextContent label="メーカー" content="トヨタ" />
          <TextContent label="車種" content="プリウス" />
          <TextContent label="登録ナンバー" content="足立 310 あ 1234" />
          <TextContent label="登録年月日" content="H30/12/01" />
          <TextContent label="新中区分" content="中古車" />
          <HtmlContent label="保険情報有無" :content="tag" />
        </v-col>
        <v-col cols="6" class="px-0">
          <TextContent label="グレード" content="Sツーリングセレクション" />
          <TextContent label="初度登録年月" content="H29/02" />
          <TextContent label="車検満了日" content="R2/03/24" />
          <TextContent label="車検証有無" content="839294813493" />
          <TextContent label="代替対象" content="対象" />
          <TextContent label="代替反応" content="あり" />
        </v-col>
      </v-row>
      <v-row align="top" justify="top" class="ma-0">
        <SubTitle sub-title="売買情報" />
        <v-col cols="6" class="px-0">
          <TextContent label="小売価格" content="¥2,340,000（R1/1/1時点）" />
          <TextContent
            label="本査定額"
            content="¥910,000（H31/12/12時点）"
            customheight="35"
          />
          <TextContent label="支払区分" content="ローン" />
          <TextContent
            label="月々返済"
            content="¥30,000（ボーナス時 ¥100,000）"
          />
        </v-col>
        <v-col cols="6" class="px-0">
          <TextContent label="AI査定額" content="¥1,594,000（R1/1/1時点）" />
          <HtmlContent
            label="<h3>予想価格</h3><h4>(マッチング)</h4>"
            content="¥1,900,000（H31/12/12時点）"
            customheight="35"
          />
          <TextContent label="支払残債" content="¥510,000（H31/12/12時点）" />
        </v-col>
      </v-row>
      <v-row align="top" justify="center" class="ma-0">
        <v-col cols="6" class="px-0">
          <SubTitle sub-title="税金/諸費用" />
          <TextContent label="自動車税" content="¥36,000" />
          <TextContent label="自賠責保険" content="¥27,840" />
          <TextContent label="重量税" content="重量税" />
          <TextContent label="リサイクル" content="¥11,350" />
        </v-col>
        <v-col cols="6" class="px-0">
          <SubTitle sub-title="ランニングコスト/月" />
          <TextContent label="ガソリン代" content="¥10,000" />
          <TextContent label="保険料" content="¥8,540" />
          <TextContent label="駐車場代" content="¥12,000" />
          <TextContent label="月間コスト" content="¥30,540" />
        </v-col>
      </v-row>
      <v-row align="top" justify="center" class="ma-0">
        <SubTitle sub-title="車両基本情報" />
        <v-col cols="6" class="px-0">
          <TextContent label="メーカー" content="トヨタ" />
          <TextContent label="車種" content="プリウス" />
          <TextContent label="登録ナンバー" content="足立 310 あ 1234" />
          <TextContent label="登録年月日" content="H30/12/01" />
          <TextContent label="新中区分" content="中古車" />
          <TextContent label="保険情報有無" content="839294813493" />
        </v-col>
        <v-col cols="6" class="px-0">
          <TextContent label="グレード" content="Sツーリングセレクション" />
          <TextContent label="初度登録年月" content="H29/02" />
          <TextContent label="車検満了日" content="R2/03/24" />
          <TextContent label="車検証有無" content="839294813493" />
          <TextContent label="代替対象" content="対象" />
          <TextContent label="代替反応" content="あり" />
        </v-col>
      </v-row>
      <v-row align="top" justify="center" class="ma-0">
        <SubTitle sub-title="車両詳細情報" />
        <v-col cols="6" class="px-0">
          <TextContent label="車台番号" content="ZVW51-0123456" />
          <TextContent label="通称型式" content="ZVW51-AHXGB(T)" />
          <TextContent label="エンジン型式" content="2ZR-1NM" />
          <TextContent label="最大出力" content="72kW(98PS)" />
          <TextContent label="最大トルク" content="142N･m" />
          <TextContent label="タイヤサイズ" content="215/45R17" />
          <TextContent label="バッテリーサイズ" content="LN1" />
          <TextContent label="燃料タンク" content="43L" />
        </v-col>
        <v-col cols="6" class="px-0">
          <TextContent
            label="カラーコード"
            content="3T7(サーモテクトライムグリーン)"
          />
          <TextContent label="トリムコード" content="FA22(ブラック)" />
          <TextContent label="モデル" content="後期型" />
          <TextContent label="販売期間" content="2018/12~" />
          <TextContent label="保証期間" content="~R4/2/24" />
          <HtmlContent
            label="<h3>燃費</h3><h4>(JC08モード)</h4>"
            content="37.2km/L"
          />
          <TextContent label="車両重量" content="1,360Kg" />
          <HtmlContent
            label="車両寸法"
            content="全長 4,575mm<br />全幅 1,760mm<br />全高 1,470mm"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" class="customer-car__matching pa-0">
      <v-row class="ma-0 pa-0">
        <v-col cols="12" class="ma-0 py-0">
          <v-img
            class="float-right mt10 mb10"
            :src="require('~/static/customer/btn-edit.svg')"
            width="60"
          />
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-img :src="require('~/static/customer/car.png')" />
      </v-col>
      <v-col cols="12">
        <h3>
          マッチング情報<v-chip
            class="ml10"
            color="primary"
            style="height: 20px; font-size: 12px;"
            >出品中</v-chip
          >
        </h3>
        <v-card outlined>
          <TextContent
            label="価格"
            content="¥1,600,000"
            customfontweight="normal"
          />
          <TextContent
            label="掲載期間"
            content="R2/4/1 - R2/4/15"
            customfontweight="normal"
          />
        </v-card>
      </v-col>
      <v-col cols="12">
        <h3>車両評価</h3>
        <v-card outlined>
          <TextContent
            label="評価"
            content="4.0 ★★★★☆"
            customfontweight="normal"
          />
          <HtmlContent
            label="修復歴"
            content="<span>有:</span><span>トランクフロア修復歴有</span>"
            customfontweight="normal"
          />
          <TextContent label="外装評価" content="A" customfontweight="normal" />
          <TextContent label="内装評価" content="B" customfontweight="normal" />
        </v-card>
      </v-col>
      <v-col cols="12">
        <h3>装備情報</h3>
        <v-card outlined>
          <h4>装備オプション</h4>
          <TextContent
            label="エアバック"
            content="サイド"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="ETC"
            content="有"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="ABS"
            content="有"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="サンルーフ"
            content="有"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="ホイール"
            content="純正/15inch"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="バックカメラ"
            content="有"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="ナビ"
            content="純正/SD"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="ヘッドライト"
            content="LED"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="TV"
            content="フルセグ"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="エアコン"
            content="オート/シングル"
            customfontweight="normal"
          ></TextContent>
          <TextContent
            label="キー"
            content="スマートキー"
            customfontweight="normal"
          ></TextContent>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card outlined>
          <h4>安全装置</h4>
          <TextContent
            label="対歩行者"
            content="○(10~80km/h)"
            customfontweight="normal"
          />
          <TextContent
            label="対車両"
            content="○(10km/h~)"
            customfontweight="normal"
          />
          <TextContent
            label="車線逸脱"
            content="○(ステアリング制御)"
            customfontweight="normal"
          />
          <TextContent label="AHB" content="○" customfontweight="normal" />
          <TextContent
            label="誤発進"
            content="◯(全周囲ソナー)"
            customfontweight="normal"
          />
          <TextContent
            label="クルコン"
            content="◯(追従式)"
            customfontweight="normal"
          />
        </v-card>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import SubTitle from '~/components/customer/SubTitle.vue'
import TextContent from '~/components/customer/TextContent.vue'
import HtmlContent from '~/components/customer/HtmlContent.vue'
export default {
  name: 'CarInfo',
  components: {
    SubTitle,
    TextContent,
    HtmlContent,
  },
  data: () => ({
    tag:
      '839294813493' +
      '<a href=""><img class="ml5 mr10" src="/customer/link.svg" width="10"></a>' +
      '<span style="display: inline-block; background: #1e5199; color: #ffffff; width: 40px; height: 18px; border-radius: 9px; font-size: 12px; text-align: center;">自社</span>',
  }),
}
</script>
<style lang="scss" scoped>
.customer-car {
  margin-left: 0 !important;
  .title {
    width: 100%;
    height: 60px;
    border-bottom: 1px $gray-100 solid;
    color: $blue-200;

    h2 {
      float: left;
      line-height: 20px;
      margin: 20px auto 20px 20px;
    }

    p {
      float: right;
      margin: 20px;

      img {
        width: 30px;
      }
    }
  }

  &__owner {
    h4 {
      display: inline-block;
      color: $blue-200;
    }
  }
  &__matching {
    h3 {
      color: $blue-200;
      margin: 10px 0;
    }
    h4 {
      color: $blue-200;
      margin: 10px 0;
      font-weight: normal;
    }
    .v-card {
      padding: 10px;
      background: $white-100;
      border: none !important;
      font-weight: normal;
    }
  }
}
.profile {
  color: $blue-200;
}
.questionary {
  font-size: 12px;
  color: $blue-200;
}
</style>
