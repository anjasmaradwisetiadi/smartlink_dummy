<template>
  <div class="form_banks text-left">
    <div class="relative">
      <input
        :value="value"
        @input="handleInput"
        :placeholder="placeholder"
        ref="input"
        tabindex="0"
      class="placeholder-gray-200"
      @click="showOptions = true"
        :class="inputClass"
        />
      <span v-if="value && showOptions" @click.prevent="reset()"
        class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
        x
      </span>
      <span v-if="!showOptions" class="material-icons text-gray-400 absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              expand_more
      </span>
      <div v-show="showOptions" @click.self="handleSelf()"
        @focusout="showOptions = false"
        tabindex="0" :class="dropdownClass">
        <ul class="py-1">
          <li
            v-for="(item, index) in searchResults" :key="index"
            @click="handleClick(item)"
            class=" px-1 py-2 cursor-pointer hover:bg-gray-200">
            {{ item.pemilik }}
          </li>
          <li v-if="!searchResults.length" class="px-1 py-2 text-center">
            No Matching Results
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        required: false,
      },
      placeholder: {
        type: String,
        required: false,
        default: "Enter text here.",
      },
      data: {
        type: Array,
        required: true,
      },
      inputClass: {
        type: String,
        required: false,
        default: "border-l border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:shadow-outline",
      },
      dropdownClass: {
        type: String,
        required: false,
        default: "absolute w-full z-50 bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md",
      },
    },

    data() {
      return {
        showOptions: false,
        chosenOption: "",
        searchTerm: "",
      };
    },

    computed: {
      searchResults() {
        return this.data.filter((item) => {
          return item.pemilik.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      },
    },

    methods: {
      reset() {
        this.$emit("input", "");
        this.chosenOption = "";
      },

      handleInput(evt) {
        this.$emit("input", evt.target.value);
        this.searchTerm = evt.target.value;
        this.showOptions = true;
      },

      handleClick(item) {
        this.$emit("input", item.pemilik);
        this.$emit("chosenBank", item);
        this.chosenOption = item.pemilik;
        this.showOptions = false;
        this.$refs.input.focus();
      },

      clickedOutside() {
        this.showOptions = false;
        if (!this.chosenOption) {
          this.$emit("input", "");
        }
      },
    },
  }

</script>
<style lang="scss" scoped>
  .mh-48 {
    max-height: 10rem;
  }

  .dropdownClass ul li:hover {
    background-color: #ddd;
  }

</style>
