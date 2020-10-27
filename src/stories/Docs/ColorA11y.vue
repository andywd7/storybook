<template>
  <table class="table">
    <thead>
      <tr>
        <th>-</th>
        <th v-for="(v, k) in textColor" :key="k">
          {{ v.name }}
          <br />
          {{ v.value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, key) in backgroudColor" :key="key">
        <td>
          {{ val.name }}
          <br />
          {{ val.value }}
        </td>
        <td v-for="(v, k) in textColor" :key="k">
          <div
            v-if="isAccessible(v.value, val.value)"
            :class="val.attributes.item"
            :style="{ backgroundColor: val.value, color: v.value }"
            class="ids-swatch"
          >
            <div class="ids-swatch__row">
              <code :style="{ color: v.value }">
                {{ v.attributes.item }} on
                <br />
                {{ val.attributes.item }}
              </code>
            </div>
            <div class="ids-swatch__row">
              <span>{{ score(val.value, v.value) }}</span>
              <span>{{ ratio(val.value, v.value) }}</span>
            </div>
          </div>
          <div v-else>NA</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { store } from "../../components/store"
const contrast = require("get-contrast")
export default {
  name: "ColorA11y",
  props: {
    txtColor: {
      type: String,
      default: "cyan"
    },
    bgColor: {
      type: String,
      default: "blue"
    },
    view: {
      type: String,
      default: "AA"
    }
  },
  data() {
    return {
      tokens: store.state.tokens.color
    }
  },
  computed: {
    textColor() {
      return this.tokens.filter(col => col.attributes.type === this.txtColor)
    },
    backgroudColor() {
      return this.tokens.filter(col => col.attributes.type === this.bgColor)
    }
  },
  methods: {
    isAccessible(bg, txt) {
      if (this.view === "Passed") {
        return contrast.isAccessible(bg, txt)
      } else if (this.view === "Failed") {
        return !contrast.isAccessible(bg, txt)
      } else if (this.view === "AA") {
        return contrast.score(bg, txt) === "AA"
      } else if (this.view === "AAA") {
        return contrast.score(bg, txt) === "AAA"
      } else {
        return true
      }
    },
    score(bg, txt) {
      if (contrast.score(bg, txt) === "AA") {
        return "AA"
      } else if (contrast.score(bg, txt) === "AAA") {
        return "AAA"
      } else {
        return "F"
      }
    },
    ratio(bg, txt) {
      return contrast.ratio(bg, txt).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
// .ids-grey-80 {
//   border: 1px solid $grey-50;
// }

.ids-swatch {
  min-height: 3rem;
  min-width: 3rem;
  padding: 0.5rem;
}

.ids-swatch__row {
  display: flex;
  justify-content: space-between;
}
</style>
