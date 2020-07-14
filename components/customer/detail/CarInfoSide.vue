<template>
  <div class="ml20 mr20">
    <v-img :src="require('~/static/customer/car.png')" />

    <h3>
      マッチング情報
      <v-chip x-small text-color="white" color="#1E5199" class="ml5"
        >出品中</v-chip
      >
    </h3>
    <v-card outlined>
      <TextContent
        label="価格"
        content="¥1,600,000"
        custom-font-weight="normal"
      />
      <TextContent
        label="掲載期間"
        content="R2/4/1 - R2/4/15"
        custom-font-weight="normal"
      />
    </v-card>

    <h3>車両評価</h3>
    <v-card outlined>
      <TextContent
        label="評価"
        content="4.0 ★★★★☆"
        custom-font-weight="normal"
      />
      <HtmlContent
        label="修復歴"
        content="<span>有:</span><span>トランクフロア修復歴有</span>"
        custom-font-weight="normal"
      />
      <TextContent label="外装評価" content="A" custom-font-weight="normal" />
      <TextContent label="内装評価" content="B" custom-font-weight="normal" />
    </v-card>

    <h3>装備情報</h3>
    <v-card outlined>
      <h4>装備オプション</h4>
      <TextContent
        label="エアバック"
        content="サイド"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="ETC"
        content="有"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="ABS"
        content="有"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="サンルーフ"
        content="有"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="ホイール"
        content="純正/15inch"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="バックカメラ"
        content="有"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="ナビ"
        content="純正/SD"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="ヘッドライト"
        content="LED"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="TV"
        content="フルセグ"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="エアコン"
        content="オート/シングル"
        custom-font-weight="normal"
      ></TextContent>
      <TextContent
        label="キー"
        content="スマートキー"
        custom-font-weight="normal"
      ></TextContent>
    </v-card>

    <v-card outlined class="mt10">
      <h4>安全装置</h4>
      <TextContent
        label="対歩行者"
        content="○(10~80km/h)"
        custom-font-weight="normal"
      />
      <TextContent
        label="対車両"
        content="○(10km/h~)"
        custom-font-weight="normal"
      />
      <TextContent
        label="車線逸脱"
        content="○(ステアリング制御)"
        custom-font-weight="normal"
      />
      <TextContent label="AHB" content="○" custom-font-weight="normal" />
      <TextContent
        label="誤発進"
        content="◯(全周囲ソナー)"
        custom-font-weight="normal"
      />
      <TextContent
        label="クルコン"
        content="◯(追従式)"
        custom-font-weight="normal"
      />
    </v-card>
  </div>
</template>

<script>
import TextContent from '~/components/customer/TextContent.vue'
import HtmlContent from '~/components/customer/HtmlContent.vue'
export default {
  components: {
    TextContent,
    HtmlContent,
  },
}
</script>

<style scoped></style>
