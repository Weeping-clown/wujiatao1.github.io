<template>
  <ion-page>
    <ion-tabs ref="tabs" @ionTabsDidChange="afterTabChange">
      <!-- <ion-tab-bar slot="bottom"> -->
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1" @click="select(0)">
          <!-- <ion-icon :icon="selectedTab == 0 ? bowlingBall : bowlingBallOutline"/> -->
          <ion-icon v-if="selectIndex == 0" :icon="bowlingBall"/>
          <ion-icon v-if="selectIndex != 0" :icon="bowlingBallOutline"/>
          <ion-label>小柚子</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2" @click="select(1)">
          <!-- <ion-icon :icon="heart" /> -->
          <ion-icon v-if="selectIndex == 1" :icon="heart"/>
          <ion-icon v-if="selectIndex != 1" :icon="heartOutline"/>
          <ion-label>柚子最爱</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3" @click="select(2)">
          <!-- <ion-icon :icon="fitness" /> -->
          <ion-icon v-if="selectIndex == 2" :icon="fitness"/>
          <ion-icon v-if="selectIndex != 2" :icon="fitnessOutline"/>
          <ion-label>关于柚子</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle, bowlingBall, heart, heartOutline, fitness, fitnessOutline, bowlingBallOutline } from 'ionicons/icons';

let that: any
export default {
  name: 'Tabs',
  // select: (tab: string) => {
  //     console.log(tab)
  // },
  // that: null,
  data() {
    return {
      // selectedTab: 0,
      selectIndex: 0,
    }
  },
  mounted() {
    that = this
    console.log(that)
  },
  methods: {
    select : (tabIndex: number): any => {
      // console.log(tab, this, (this as any).$refs, (this as any).$ionic)
      // console.log(tab, (this as any).$ref.tabs)
      // this.selectedTab = this.$ref.tabs.getSelected();
      // console.log(selectedTab)
      that.selectIndex = tabIndex
      console.log(that.selectIndex, that)
    }
  },
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    // let selectedTab = 0
    // const select = (tabIndex: number) => {
    //   selectedTab = tabIndex
    //   console.log(selectedTab)
    // }
    const afterTabChange = () => {
      // do something after tab change
      // this.selectedTab = this.$ref.tabs.getSelected();
      // console.log(this.selectedTab)
      // console.log(selectedTab)
      console.log(this)

    }
    return {
      ellipse, 
      square, 
      triangle,
      bowlingBall,
      heart,
      heartOutline,
      fitness,
      fitnessOutline,
      bowlingBallOutline,
      // select,
      afterTabChange,
      // selectIndex
    }
  }
}
</script>

<style>
/* ion-icon {
  font-size: 64px;
  color: blue;
} */
</style>
