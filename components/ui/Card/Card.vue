<template>
  <div
    class="card"
    :class="{'card_opened': isFrontSideShowed}"
    @click="onClick"
  >
    <div
      class="card__content"
    >
      <img
        class="card__wand"
        :class=" wandProperties.class"
        :src="wandProperties.image"
        alt="wand"
        draggable="false"
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TComponentProps, TEmits } from './models';

const isFrontSideShowed = defineModel<boolean>('isFrontSideShowed', { required: true });
const componentProps = defineProps<TComponentProps>();
const emits = defineEmits<TEmits>();

const onClick = () => {
  if (isFrontSideShowed.value) {
    return;
  }
  isFrontSideShowed.value = true;
  emits('click', componentProps.type);
};

const wandProperties = computed(() => {
  return {
    class: `card__wand_${componentProps.type}`,
    image: `/example-nuxt-app/wand${componentProps.type}.png`,
  };
});

</script>
<style scoped lang="scss">
@media #{$mobile-breakpoint} {
  .card {
    width: get-mobile-size(80);
    height: get-mobile-size(145);
    border-radius: get-mobile-size(24);
  }

  .card__content {
    width: get-mobile-size(73);
    height: get-mobile-size(139);
    border-radius: get-mobile-size(20);
  }
}

@media #{$tablet-breakpoint} {
  .card {
    width: get-tablet-size(120);
    height: get-tablet-size(230);
    border-radius: get-tablet-size(40);
  }

  .card__content {
    width: get-tablet-size(110);
    height: get-tablet-size(220);
    border-radius: get-tablet-size(33);
  }
}

@media #{$laptop-breakpoint} {
  .card {
    width: get-laptop-size(100);
    height: get-laptop-size(188);
    border-radius: get-laptop-size(33.3);
  }

  .card__content {
    width: get-laptop-size(93);
    height: get-laptop-size(182);
    border-radius: get-laptop-size(30);
  }

}

@media #{$desktop-breakpoint} {
  .card {
    width: get-desktop-size(160);
    height: get-desktop-size(300);
    border-radius: get-desktop-size(50);
  }

  .card__content {
    width: get-desktop-size(150);
    height: get-desktop-size(290);
    border-radius: get-desktop-size(40);
  }
}

.card {
  background: radial-gradient(ellipse at 50% 50%, #2d2170 60%, #6050b7  80%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: transform;
  transition-duration: 400ms;
}

.card:not(.card_opened) {
  cursor: pointer;
}

.card__content {
  background: url(../card.jpg);
  background-size: 120%;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card_opened {
  transform: scale(-100%, 100%);
}

.card__wand {
  opacity: 0;
  transition-delay: 80ms;
  transition-property: opacity;
  user-select: none;
}
.card__wand_1 {
  width: 64%;
  height: 33%;
}

.card__wand_2 {
  width: 56%;
  height: 60%;
}

.card__wand_3 {
  height: 70%;
  width: 76%;
  transform: rotate(20deg);
}
.card__wand_4 {
  height: 50%;
  width: 72%;
}

.card__wand_5 {
  height: 70%;
  transform: rotate(-30deg);
}

.card_opened .card__wand {
  opacity: 1;
}
</style>
