<template>
  <ion-app>
    <ion-router-outlet>
    </ion-router-outlet>
      <ion-page>
        test
      </ion-page>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonPage
  }
});
</script>