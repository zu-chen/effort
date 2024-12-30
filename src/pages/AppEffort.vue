<template>
  <div class="container mx-auto my-5">
    <p class="text-xl mb-5">Effort 計算</p>

    <div class="grid grid-cols-2 gap-x-2">
      <BaseCount
        :title="'前端'"
        :typeList="frontTypeList"
        @updateTotalHours="updateFrontTotal"
      />
      <BaseCount
        :title="'後端'"
        :typeList="backTypeList"
        @updateTotalHours="updateBackTotal"
      />
    </div>

    <p class="text-end">總計: {{ total() }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from "vue";
import BaseCount from "@/components/BaseCount.vue";
import { frontTypeList, backTypeList } from "@/static/mockData";

export default defineComponent({
  name: "AppEffort",
  components: { BaseCount },
  setup() {
    const state = reactive({
      frontTotal: 0,
      backTotal: 0,
      frontTypeList,
      backTypeList,
    });

    /**
     * 更新前端總 effort
     * @param value
     */
    const updateFrontTotal = (value: number) => {
      state.frontTotal = value;
    };

    /**
     * 更新後端總 effort
     * @param value
     */
    const updateBackTotal = (value: number) => {
      state.backTotal = value;
    };

    /**
     * 前端與後端 effort 總計
     */
    const total = () => state.frontTotal + state.backTotal;

    return { ...toRefs(state), updateFrontTotal, updateBackTotal, total };
  },
});
</script>
