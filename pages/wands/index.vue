<template>
  <div
    class="content content_centered"
    :class="{
      'content_animated': isCardAnimationStart,
      'content_animation-stopped': showFinalAnimation,
    }"
  >
    <div
      v-for="(type, idx) in typeList"
      :key="idx"
      class="content__card card-holder"
      :class="[`card-holder_type-${type}`,`card-holder_num-${idx}`]"
    >
      <div
        class="card-holder__inner"
        :class="{
          'card-holder__inner_disabled': isCardDisabled,
        }"
      >
        <UICard
          v-model:is-front-side-showed="selectedStateList[idx]"
          :type="type"
          @click="onCardClick(idx, $event)"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { EType } from '~/components/ui/Card/models';

const isCardAnimationStart = ref(false);
const showFinalAnimation = ref(false);
const isCardDisabled = computed(() => stateList.value.length > 1);

const pairAmount = ref(0);

const typeList = [
  EType.ONE,
  EType.THREE,
  EType.TWO,
  EType.FOUR,
  EType.ONE,
  EType.TWO,
  EType.THREE,
  EType.FOUR,
  EType.FIVE,
];

const selectedStateList = ref([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

const stateList = ref<{ id: number; type: EType }[]>([]);

const onCardClick = (id: number, type: EType) => {
  if (pairAmount.value === 4) {
    showFinalAnimation.value = true;

    setTimeout(() => {
      navigateTo({path: '/', query: { 'book-page': 3 }});
    }, 1500);

    return;
  }

  stateList.value.push({ id, type });
  if (stateList.value.length < 2) {
    return;
  }
  if (stateList.value[0].type === stateList.value[1].type) {


    setTimeout(() => {
      const list = document.getElementsByClassName(`card-holder_type-${stateList.value[1].type}`);

      Array.from(list).forEach(item => {
        item.classList.add('content__card-holder_disappeared');
      });

      stateList.value = [];
      pairAmount.value += 1;
    }, 500);

    return;
  }
  if (stateList.value[0].type !== stateList.value[1].type) {

    setTimeout(() => {
      selectedStateList.value[stateList.value[0].id] = false;
      selectedStateList.value[stateList.value[1].id] = false;

      stateList.value = [];
    }, 500);
  }

};

onMounted(() => {
  setTimeout(() => {
    isCardAnimationStart.value = true;
  }, 500);
});

</script>
<style scoped lang="scss">
@media (orientation: portrait) {
  // .content_centered {
  //   transform: rotate(-90deg);
  // }
}
@media (orientation: landscape) {
  .card-holder {
    animation: rotate 16s infinite linear forwards;
  }

  .card-holder_num {
  @for $n from 1 through 9 {
    &-#{$n} {
      animation-delay: calc($n * 860ms);
    }
  }
}
}

@media #{$mobile-breakpoint} {
  @keyframes stagger {
    0% {
      transform: rotate(90deg);
    }

    25% {
      transform: rotate(100deg);
    }
    50% {
      transform: rotate(90deg);
    }

    75% {
      transform: rotate(80deg);
    }
    100% {
      transform: rotate(90deg);
    }

  }
  .card-holder {
    width: auto;
    height: 0;
    transform: rotate(90deg);
    animation: stagger 3s infinite linear forwards;
  }

  // .card-holder_num-0 {
  //   bottom: get-mobile-size(200);
  //   right: get-mobile-size(70);
  // }

  // .card-holder_num-1 {
  //   bottom: get-mobile-size(200);
  //   right: get-mobile-size(-40);
  // }

  // .card-holder_num-2 {
  //   bottom: get-mobile-size(200);
  //   left: get-mobile-size(70);
  // }

  // .card-holder_num-3 {
  //   bottom: get-mobile-size(0);
  //   right: get-mobile-size(70);
  // }

  // .card-holder_num-4 {
  //   bottom: get-mobile-size(0);
  //   right: get-mobile-size(-40);
  // }

  // .card-holder_num-5 {
  //   bottom: get-mobile-size(0);
  //   left: get-mobile-size(70);
  // }

  // .card-holder_num-6 {
  //   top: get-mobile-size(200);
  //   right: get-mobile-size(70);
  // }

  // .card-holder_num-7 {
  //   top: get-mobile-size(200);
  //   right: get-mobile-size(-40);
  // }

  // .card-holder_num-8 {
  //   top: get-mobile-size(200);
  //   left: get-mobile-size(70);
  // }

  .card-holder_num {
    &-0,&-1,&-2 {
      bottom: get-mobile-size(200);
    }
    &-3,&-4,&-5 {
      bottom: get-mobile-size(0);
    }
    &-6,&-7,&-8 {
      top: get-mobile-size(200);
    }
    &-1,&-4,&-7 {
      right: get-mobile-size(-40);
    }
    &-2,&-5,&-8 {
      left: get-mobile-size(70);
    }
    &-0,&-3,&-6 {
      right: get-mobile-size(70);
    }

    @for $n from 3 through 8 {
      @if ($n <6) {
        &-#{$n} {
        animation-delay: 1500ms;
        }
      }
      @if ($n>=6) {
        &-#{$n} {
        animation-delay: 3000ms;
        }
      }
    }
  }
}

@media #{$tablet-breakpoint} {
  .card-holder {
    width: get-tablet-size(550);
    animation: rotate 16s infinite linear forwards;
  }

  .content_centered {
    transform: rotate(-90deg);
  }

  .card-holder_num {
  @for $n from 1 through 8 {
    &-#{$n} {
      animation-delay: calc($n * 860ms);
    }
  }
}
}

@media #{$laptop-breakpoint} {
  .card-holder {
    width: get-laptop-size(450);
  }
}

@media #{$desktop-breakpoint} {
  .card-holder {
    width: get-desktop-size(750);
  }
}

.content_animation-stopped .card-holder_type-5 {
  animation-play-state: paused !important;
}

.content.content_centered {
  position: absolute;
  width: 0%;
  height: 0%;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content__card {
  position: absolute;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 300ms;
}

.content__card-holder_disappeared {
  opacity: 0;
}

.content:not(.content_animated) .card-holder {
  cursor: default;
  pointer-events: none;
}

.content_animated .card-holder {
  animation-play-state: running;
}

.card-holder {
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  animation-play-state: paused;
}

// .card-holder_num {
//   @for $n from 1 through 9 {
//     &-#{$n} {
//       animation-delay: calc($n * 860ms);
//     }
//   }
// }

@keyframes rotate {
  0% {
   transform-origin: right;
  }
  25.5% {
    transform-origin: right;
    transform: rotate(180deg);
  }
  50% {
    transform-origin: right;
    transform: rotate(360deg);
  }
  50.1% {
    transform-origin: left;
    transform: rotate(359deg);
  }
  75.5% {
    transform-origin: left;
    transform: rotate(180deg);
  }
  100% {
    transform-origin: left;
    transform: rotate(0deg);
  }
}

.card-holder__inner {
  transform-origin: center;
  transform: rotate(-90deg);
}

.card-holder__inner_disabled {
  pointer-events: none;
}
</style>
