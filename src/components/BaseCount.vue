<template>
  <div class="grid gap-2 mb-2">
    <p>{{ title }}</p>
    <div class="grid grid-cols-8 items-center text-center">
      <div class="col-span-2">
        <el-select
          v-model="type"
          placeholder="請選擇"
          @change="emitTotalHours()"
        >
          <el-option
            v-for="item in typeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <p>*</p>
      <div class="col-span-2">
        <el-input v-model="unit" @input="emitTotalHours()" />
      </div>
      <p>=</p>
      <p>{{ totalHours() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";
export default defineComponent({
  name: "BaseSelect",
  props: {
    title: {
      default: "",
      type: String,
      required: true,
    },
    typeList: {
      default: () => [],
      type: Array as PropType<{ value: string | number; label: string }[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      type: "",
      unit: "1",
    });

    /**
     * 計算effort
     */
    const totalHours = () => {
      return (Number(state.type) * Number(state.unit)) | 0;
    };

    /**
     * emit effort
     */
    const emitTotalHours = () => {
      emit("updateTotalHours", totalHours());
    };

    return {
      ...toRefs(state),
      totalHours,
      emitTotalHours,
    };
  },
});
</script>
