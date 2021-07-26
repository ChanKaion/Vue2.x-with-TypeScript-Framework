<template>
  <div>
    <h1>{{msg}}</h1>
    d3-demo {{mydata}}
    <p @click="addOne">加1</p>
    computedMsg:{{computedMsg}}
    <hr/>
    <HelloWorld propMsg="This is prop msg"></HelloWorld>
    <hr/>
    <h2>更多关于TypeScript+Vue的使用方法，<a href="https://github.com/kaorun343/vue-property-decorator">可参考这儿</a></h2>
  </div>
</template>

<script lang="ts">

  import {Component, Provide, Vue, Watch} from "vue-property-decorator";

  import HelloWorld from "@/components/HelloWorld.vue";

  // 引入组件
  @Component({
    components: {
      HelloWorld
    }
  })
  export default class Home extends Vue {
    // data
    @Provide() mydata = 1;
    @Provide() msg = 'TypeScript + Vue';

    // methods
    addOne(): void {
      this.mydata += 1;
    }

    // computed
    get computedMsg(): string {
      return 'computed' + this.msg;
    }

    // watcher
    @Watch('mydata', {immediate: true, deep: true})
    onMydataChanged(val: number, oldValue: number): void {
      console.log("发生了改变", val, oldValue)
    }

    // 生命周期
    private mounted(): void {
      this.$nextTick(function (): void {
        console.log("Vue组件已经挂载好了")
      })
    }
  }
</script>

<style scoped>

</style>
