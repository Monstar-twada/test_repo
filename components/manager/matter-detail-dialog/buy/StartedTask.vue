<template>
  <div class="mdd-tasks-item">
    <div class="mt10">
      <fg-checkbox label="車庫証明"></fg-checkbox>
      <fg-select
        class="ml10 mr15"
        placeholder="申請日"
        inline
        width="120"
        size="small"
      ></fg-select>
      <fg-select
        placeholder="取得日"
        inline
        width="120"
        size="small"
      ></fg-select>
    </div>

    <div class="mt10">
      <fg-checkbox label="名義変更"></fg-checkbox>
      <fg-select
        class="ml10 mr15"
        placeholder="名義変更日"
        inline
        width="120"
        size="small"
      ></fg-select>
      <Item label="ナンバー" inline>
        <fg-input placeholder="地名" width="50" inline size="small"></fg-input>
        <fg-input placeholder="数字" width="50" inline size="small"></fg-input>
        <fg-input placeholder="かな" width="50" inline size="small"></fg-input>
        <fg-input placeholder="数字" width="50" inline size="small"></fg-input>
      </Item>
      <fg-checkbox class="ml30" label="任意自動車保険加入手続き"></fg-checkbox>
    </div>

    <div class="mt10">
      <fg-checkbox label="陸送手配"></fg-checkbox>
      <fg-input
        class="ml10 mr15"
        placeholder="メモ"
        inline
        width="120"
        size="small"
      ></fg-input>
      <Item label="納車日時" inline>
        <fg-date-picker
          format="yyyy/MM/dd (W) hh:mm"
          placeholder="選択"
          width="180"
          size="small"
        ></fg-date-picker>
      </Item>
      <Item label="納車場所" inline class="ml30">
        <fg-select placeholder="選択" width="100" size="small"></fg-select>
      </Item>
    </div>

    <!--    決済情報    -->
    <h4 class="mt25">決済情報</h4>

    <dl class="payment-information-wrapper mt15">
      <dd class="payment-information__item">
        <fg-radio label="現金" value="現金"></fg-radio>
      </dd>
      <dd class="payment-information__item">
        <fg-radio label="ローン" value="ローン"></fg-radio>
        <div>
          <div>
            <Item label="種別" inline>
              <fg-select
                size="small"
                placeholder="選択"
                width="100"
              ></fg-select>
            </Item>
            <Item label="頭金" inline class="ml10 mr10">
              <fg-input size="small" placeholder="記入" width="70"></fg-input>
            </Item>
            <Item label="元金" inline>
              <fg-input size="small" placeholder="記入" width="70"></fg-input>
            </Item>
            <Item label="金利" inline class="ml10 mr10">
              <fg-input size="small" placeholder="%" width="60"></fg-input>
            </Item>
            <Item label="手数料" inline>
              <fg-input size="small" placeholder="記入" width="60"></fg-input>
            </Item>
          </div>
          <div class="mt10">
            <Item label="支払総額" inline>
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
            <Item label="支払回数" inline class="ml10 mr10">
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
            <Item label="ボーナス払い/回" inline>
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
          </div>
          <div class="mt10">
            <Item label="承認番号" inline>
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
            <Item label="信販会社" inline class="ml10">
              <fg-select
                size="small"
                placeholder="選択"
                width="100"
                inline
                class="mr10"
              ></fg-select>
              <fg-input
                size="small"
                placeholder="その他の場合"
                width="100"
                inline
              ></fg-input>
            </Item>
          </div>
        </div>
      </dd>
      <dd class="payment-information__item">
        <fg-radio label="リース" value="リース"></fg-radio>
        <div>
          <div>
            <Item label="種別" inline>
              <fg-select
                size="small"
                placeholder="選択"
                width="100"
              ></fg-select>
            </Item>
            <Item label="頭金" inline class="ml10 mr10">
              <fg-input size="small" placeholder="記入" width="70"></fg-input>
            </Item>
            <Item label="元金" inline>
              <fg-input size="small" placeholder="記入" width="70"></fg-input>
            </Item>
            <Item label="金利" inline class="ml10 mr10">
              <fg-input size="small" placeholder="%" width="60"></fg-input>
            </Item>
            <Item label="手数料" inline>
              <fg-input size="small" placeholder="記入" width="60"></fg-input>
            </Item>
          </div>
          <div class="mt10">
            <Item label="支払総額" inline>
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
            <Item label="支払回数" inline class="ml10 mr10">
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
            <Item label="ボーナス払い/回" inline>
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
          </div>
          <div class="mt10">
            <Item label="承認番号" inline>
              <fg-input size="small" placeholder="記入" width="100"></fg-input>
            </Item>
            <Item label="リース会社" inline class="ml10">
              <fg-select
                size="small"
                placeholder="選択"
                width="100"
                inline
                class="mr10"
              ></fg-select>
              <fg-input
                size="small"
                placeholder="その他の場合"
                width="100"
                inline
              ></fg-input>
            </Item>
          </div>
        </div>
      </dd>
      <dd class="payment-information__item mt10">
        <fg-radio label="その他" value="その他"></fg-radio>
        <div>
          <fg-input size="small" placeholder="記入" width="570"></fg-input>
        </div>
      </dd>
    </dl>

    <Border class="mt20" column align="flex-start">
      <Item label="車検証" align="flex-start" class="mt10">
        <fg-image-processor icon="license-front"></fg-image-processor>
      </Item>
      <div class="mt20 pb10">
        <fg-checkbox label="納車完了"></fg-checkbox>
      </div>
    </Border>

    <div class="status-item__footer">
      <ButtonSave />
      <ButtonComplete />
    </div>
  </div>
</template>

<script>
import Border from '../common/Border'
import Item from '../common/Item'
import ButtonComplete from '../common/ButtonComplete'
import ButtonSave from '../common/ButtonSave'
export default {
  components: {
    ButtonComplete,
    ButtonSave,
    Border,
    Item,
  },
}
</script>

<style lang="scss"></style>
