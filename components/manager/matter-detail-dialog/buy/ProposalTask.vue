<template>
  <div class="mdd-tasks-item">
    <Border>
      <fg-checkbox label="売却車両あり" class="mr40"></fg-checkbox>
    </Border>

    <CustomerInfo class="mt25" />

    <h4 class="mt25">カーライフ</h4>
    <div class="checkbox-wrapper">
      <fg-checkbox
        v-for="(item, i) in CAR_LIVES"
        :key="i"
        :label="item.text"
        :value="item.active"
      ></fg-checkbox>
      <fg-checkbox label="その他">
        <fg-input class="ml10" placeholder="記入" size="small"></fg-input>
      </fg-checkbox>
    </div>

    <h4 class="mt25">選定ポイント</h4>
    <div class="checkbox-wrapper">
      <fg-checkbox
        v-for="(item, i) in SELECTION_POINTS"
        :key="i"
        :label="item.text"
        :value="item.active"
      ></fg-checkbox>
      <fg-checkbox label="その他">
        <fg-input class="ml10" placeholder="記入" size="small"></fg-input>
      </fg-checkbox>
    </div>

    <h4 class="mt40 pb10 bottom-dashed-line">希望する車両</h4>
    <div class="pb20 bottom-dashed-line">
      <div v-for="(item, i) in dvList" :key="i" class="add-and-del-group-item">
        <AddDesiredVehicle />
        <ButtonAdd
          v-if="(i === 0 && dvList.length === 1) || i === dvList.length - 1"
          @click="addDvItem"
        />
        <ButtonDel v-else @click="delDvItem(i)" />
      </div>
    </div>

    <div class="mt20">
      <Item label="予算 総額" inline>
        <fg-input placeholder="記入" width="80" size="small"></fg-input>
      </Item>
      <Item label="月々予算" inline class="ml30">
        <fg-select placeholder="選択" width="80" size="small"></fg-select>
      </Item>
      <Item label="支払方法" inline class="ml30">
        <fg-select placeholder="選択" width="80" size="small"></fg-select>
      </Item>
      <Item label="何年乗るか" inline class="ml30" right="20">
        <fg-input
          placeholder="記入"
          width="50"
          size="small"
          unit="年"
        ></fg-input>
      </Item>
    </div>

    <div class="mt20">
      <Item label="新中区分" inline>
        <fg-radio-group value="新車">
          <fg-radio label="新車"></fg-radio>
          <fg-radio label="中古車"></fg-radio>
        </fg-radio-group>
      </Item>
      <Item label="国産/輸入" inline class="ml30">
        <fg-radio-group value="国産">
          <fg-radio label="国産"></fg-radio>
          <fg-radio label="輸入"></fg-radio>
        </fg-radio-group>
      </Item>
      <Item label="普/軽" inline class="ml30">
        <fg-radio-group value="普通車">
          <fg-radio label="普通車"></fg-radio>
          <fg-radio label="軽自動車"></fg-radio>
        </fg-radio-group>
      </Item>
    </div>

    <Item class="mt20" label="ボディタイプ" label-top="-33">
      <div class="checkbox-wrapper">
        <fg-checkbox
          v-for="(item, i) in CAR_BODY_TYPES"
          :key="i"
          :label="item.text"
          :value="item.active"
        ></fg-checkbox>
        <fg-checkbox label="その他">
          <fg-input class="ml10" placeholder="記入" size="small"></fg-input>
        </fg-checkbox>
      </div>
    </Item>

    <ColorCheckboxGroup class="mt20" />

    <div class="mt20">
      <Item label="ハンドル" inline>
        <fg-select placeholder="右" width="50" size="small"></fg-select>
      </Item>
      <Item label="AT/MT" inline class="ml30">
        <fg-select placeholder="AT" width="50" size="small"></fg-select>
      </Item>
    </div>

    <!-- 商談情報 -->
    <h4 class="mt30 pb10 bottom-dashed-line">
      商談情報
      <fg-icon class="ml5" name="qm-circle"></fg-icon>
    </h4>

    <div class="pb20 bottom-dashed-line">
      <div v-for="(item, i) in oiList" :key="i" class="add-and-del-group-item">
        <AddOpportunityInfo />
        <ButtonAdd
          v-if="(i === 0 && oiList.length === 1) || i === oiList.length - 1"
          @click="addOiItem"
        />
        <ButtonDel v-else @click="delOiItem(i)" />
      </div>
    </div>

    <div class="mt20">
      <Item label="意思決定時期">
        <fg-select placeholder="年月日" size="small" width="120"></fg-select>
      </Item>
    </div>

    <CarMakerAndDateInfo class="mt30" title="確定車両">
      <dd class="mt10">
        <Item label="走行距離" inline right="30" label-width="73">
          <fg-input
            placeholder="記入"
            size="small"
            inline
            width="120"
            unit="km"
          ></fg-input>
        </Item>
      </dd>

      <dd class="mt10">
        <Item label="車両本体価格" inline right="30" label-width="73">
          <fg-input
            placeholder="記入"
            size="small"
            inline
            width="120"
            unit="円"
          ></fg-input>
        </Item>
        <Item label="総額価格" inline right="30" label-width="60">
          <fg-input
            placeholder="記入"
            size="small"
            inline
            width="120"
            unit="円"
          ></fg-input>
        </Item>
      </dd>
      <dd class="mt20">
        <Border>
          <fg-checkbox label="売買契約締結"> </fg-checkbox>
          <Item label="納車予定日" class="ml30">
            <fg-calendar
              placeholder="予定日"
              width="120"
              size="small"
            ></fg-calendar>
          </Item>
        </Border>
        <Item label="支払方法" class="ml30" inline>
          <fg-select placeholder="選択" size="small" width="120"></fg-select>
        </Item>
      </dd>
    </CarMakerAndDateInfo>

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
import ButtonDel from '../common/ButtonDel'
import ButtonAdd from '../common/ButtonAdd'
import ColorCheckboxGroup from '../common/color-checkbox-group/index'
import AddDesiredVehicle from '../common/tasks/AddDesiredVehicle'
import AddOpportunityInfo from '../common/tasks/AddOpportunityInfo'
import CustomerInfo from '../common/tasks/CustomerInfo'
import CarMakerAndDateInfo from '../common/tasks/CarMakerAndDateInfo'
import {
  CAR_BODY_TYPES,
  CAR_LIVES,
  SELECTION_POINTS,
} from '~/assets/constants/index'

export default {
  components: {
    ColorCheckboxGroup,
    ButtonComplete,
    ButtonSave,
    Border,
    Item,
    ButtonAdd,
    ButtonDel,
    AddDesiredVehicle,
    AddOpportunityInfo,
    CustomerInfo,
    CarMakerAndDateInfo,
  },
  data() {
    return {
      CAR_LIVES,
      SELECTION_POINTS,
      CAR_BODY_TYPES,
      dvList: [1],
      oiList: [1],
    }
  },
  methods: {
    addDvItem() {
      this.dvList.push(1)
    },
    delDvItem(index) {
      this.dvList.splice(index, 1)
    },
    addOiItem() {
      this.oiList.push(1)
    },
    delOiItem(index) {
      this.oiList.splice(index, 1)
    },
  },
}
</script>

<style lang="scss"></style>
