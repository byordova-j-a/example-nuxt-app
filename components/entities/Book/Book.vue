<template>
  <div class="book">
    <svg class="book__page-shape">
      <clipPath
        id="pathList"
        clipPathUnits="objectBoundingBox"
      >
        <path d="M0,0.017 C0,0.017,0.5,-0.017,1,0.017 V1 C1,1,0.5,0.967,0,1" />
      </clipPath>
    </svg>
    <div class="book__previous-side">
      <div
        class="cover cover_top book__cover"
        :class="{ 'cover-flipped': isOpened }"
      />
      <div
        class="shadow shadow_1 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[1] }"
      />
      <div
        class="list list_1 book__list"
        :class="{ 'list_flipped': clickedPageState[1] }"
      >
        <div class="list__content">
          <div class="list__content__header">
            главное - уникальность
          </div>
          <div class="list__content__paragraph">
            <p>
              В уникальном образе творить уникальную магию - залог уникального успеха. Если с первым, уверены,
              Вы успешно справитесь сами, то со вторым у многих возникают сложности.
            </p>
            <p>
              На самом деле всё просто. Для уникальной магии Вам
              просто нужна...
            </p>
          </div>
          <div class="list__content__header">
            уникальная
          </div>
          <div class="list__content__header">
            волшебная палочка
          </div>
          <div class="list__content__paragraph">
            <p>
              Следуйте указаниям на следующей странице - тогда
              Вы с лёгкостью найдёте уникальную волшебную
              палочку!
            </p>
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_2 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[2] }"
      />
      <div
        class="list list_2 book__list"
        :class="{ 'list_flipped': clickedPageState[2] }"
      >
        <div class="list__content">
          <div class="list__content__header">
            в разработке
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_3 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[3] }"
      />
      <div
        class="list list_3 book__list"
        :class="{ 'list_flipped': clickedPageState[3] }"
      >
        <div class="list__content">
          <div class="list__content__header">
            в разработке
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_4 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[4] }"
      />
      <div
        class="list list_4 book__list"
        :class="{ 'list_flipped': clickedPageState[4] }"
      >
        <div class="list__content">
          <div class="list__content__header">
            в разработке
          </div>
        </div>
      </div>
    </div>

    <div class="book__next-side">
      <div
        class="seam"
        :class="{'seam_moved': isOpened}"
      />
      <div
        class="cover cover_top book__cover"
        :class="{ 'cover-flipped': isOpened }"
        @click="openBook"
      >
        <div class="book__cover__ornament" />
      </div>
      <div
        class="list list_1 book__list"
        :class="{ 'list_flipped': clickedPageState[1] }"
      >
        <div class="list__content">
          <div class="list__content__header">
            самоучитель по магии
          </div>
          <div class="list__content__paragraph">
            <p>
              Если Вы всю жизнь мечтали научиться колдовать, Вы выбрали правильное пособие.
            </p>
            <p>
              Всего за 3 шага Вы овладеете всеми базовыми навыками, необходимыми начинающему волшебнику.
            </p>
            <p>Если Вы готовы к тому, чтобы сделать магию частью жизни - жмите на кота. Он перенесёт Вас к первому уроку.</p>
          </div>
          <div
            class="list__img-card"
            @click="clickPage(1)"
          >
            <div class="list__img-border" />
            <img
              src="~/assets/images/surprisedCat.png"
              alt="surprisedCat"
              class="list__img"
              draggable="false"
            >
          </div>
          <div class="list__content__paragraph">
            <p>*С Федей всё в порядке, он просто удивлён беспрецендентным предложением*</p>
            <p>
              <a
                class="list__content__link"
                href="https://vk.com/fedja_gruppa"
              >
                **Жмите сюда - Вас сразу перенесёт к котику Феде**
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_1 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[1] }"
      />
      <div
        class="list list_2 book__list"
        :class="{ 'list_flipped': clickedPageState[2] }"
      >
        <div class="list__content">
          <div class="list__content__header">
            найти - сложно
          </div>
          <div class="list__content__header">
            забыть - невозможно
          </div>
          <div class="list__content__paragraph">
            <p>
              Перед Вами будут разложены 9 карт рубашками
              вверх. Нажатие на карточку перевернёт её. На
              лицевой стороне каждой карты изображена волшебная
              палочка. Всего их 5. Все палочки, кроме одной,
              изображены на 2-х картах. Вы сможете отыскать свою
              уникальную палочку, если выкините все карты с
              повторным изображением. Если готовы - жмите на
              кота Вжуха!
            </p>
            <p>
              Подсказка: Отыскав пару одинаковых карт, Вы выкините эту пару. Всё как в игре "найди пару".
            </p>
          </div>
          <div
            class="list__img-card"
            @click="navigateTo('/wands')"
          >
            <div class="list__img-border" />
            <img
              src="~/assets/images/magicCat.png"
              alt="surprisedCat"
              class="list__img"
              draggable="false"
            >
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_2 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[2] }"
      />
      <div
        class="list list_3 book__list"
        :class="{ 'list_flipped': clickedPageState[3] }"
        @click="clickPage(3)"
      >
        <div class="list__content">
          <div class="list__content__header">
            в разработке
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_3 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[3] }"
      />
      <div
        class="list list_4 book__list"
        :class="{ 'list_flipped': clickedPageState[4] }"
        @click="clickPage(4)"
      >
        <div class="list__content">
          <div class="list__content__header">
            в разработке
          </div>
        </div>
      </div>
      <div
        class="shadow shadow_4 book__shadow"
        :class="{ 'shadow__moved': clickedPageState[4] }"
      />
      <div class="cover cover_bottom book__cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TComponentProps } from './models';

const componentProps = defineProps<TComponentProps>();

const isOpened = ref (false);
let timerId: NodeJS.Timeout | null = null;

const clickedPageState = ref<{[key in number]: boolean}>({
  1: false,
  2: false,
  3: false,
});


const openBook = () => {
  if (isOpened.value) {
    return;
  }
  if (timerId) {
    clearTimeout(timerId);
  }
  isOpened.value = true;
};


const clickPage = (page: number) => {
  clickedPageState.value[`${page}`] = true;
};

onMounted(() => {
  if (componentProps.initialPage <= 1) {
    timerId = setTimeout(() => {
      isOpened.value = true;
    }, 3000);

    return;
  }

  isOpened.value = true;

  Array.from({ length: componentProps.initialPage - 1 }).forEach((item, key) => {
    setTimeout(() => {
      clickedPageState.value[key + 1] = true;
    }, 600 * (key + 1));
  });
});

</script>
<style scoped lang="scss">
@media (orientation: portrait) {
  @keyframes seam-moving {
    0% {
      transform: scaleY(35%);
    }
    100% {
      transform: scaleY(100%);
    }
  }
  .book {
    flex-direction: column;
  }

  .list {
    height: 98%;
  }

  .seam {
    width: 100%;
    transform: scaleY(35%);
    transform-origin: bottom;
  }

  .seam_moved {
   animation: seam-moving 0.5s 0.5s forwards;
  }

  .book__previous-side,
  .book__next-side {
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  .book__previous-side .list {
    bottom: 0;
    background: linear-gradient(180deg, transparent 96%, rgba(61, 21, 5, 0.128) 100%), no-repeat url(~/assets/images/page.png);
  }

  .book__next-side .list {
    top: 0;
    background: linear-gradient(0deg, transparent 96%, rgba(61, 21, 5, 0.128) 100%), no-repeat url(~/assets/images/page.png);
  }

  .shadow {
    width: 95%;
  }

  .list_1 .list__img-card {
    height: 20%;
    width: 35%;
  }

  .list_2 .list__img-card {
    height: 31.7%;
    width: 32%;
  }

  .list__img {
    height: 100%;
  }

  .book__previous-side {
    .seam {
      transform: scaleY(0);
      transform-origin: bottom;
      bottom: 0;
    }
    .cover {
      background: linear-gradient(180deg,  #6050b7 0%,  #2d2170 100%);
    }

    .cover_top {
      transform-origin: bottom;
      transform: perspective(var(--perspective-distance)) rotateX(-90deg);
    }

    .book__list {
      width: 95%;
      bottom: 0;
      transform-origin: bottom;
      transform: perspective(var(--perspective-distance)) rotateX(-90deg);
    }

    .list {
      &_1 {
        height: 95%;
      }

      &_2 {
        height: 94%;
      }

      &_3 {
        height: 93%;
      }

      &_4 {
        height: 92%;
      }
    }

    .shadow {
      bottom: 0;
      transform: perspective(var(--perspective-distance)) rotateX(-90deg);
      transform-origin: bottom;

      &_1 {
        height: 95.7%;
      }

      &_2 {
       height: 94.7%;
      }

      &_3 {
       height: 93.7%;
      }

      &_4 {
       height: 92.7%;
      }
    }
  }

  .book__next-side {
    .seam {
      top: 0;
    }
    .cover {
      background: linear-gradient(0deg,  #6050b7 0%,  #2d2170 100%);
    }

    .cover_top {
      transform-origin: top;
    }

    .book__list {
      top: 0;
      transform-origin: top;
      width: 95%;
    }

    .list {
      &_1 {
        height: 92%;
      }

      &_2 {
        height: 93%;
      }

      &_3 {
        height: 94%;
      }

      &_4 {
        height: 95%;
      }
    }

    .shadow {
      top: 0;
      transform-origin: top;

      &_1 {
        height: 92.7%;
      }

      &_2 {
        height: 93.7%;
      }

      &_3 {
        height: 94.7%;
      }

      &_4 {
        height: 95.7%;
      }
    }
  }

  @keyframes hide-page {

    0% {
      transform: perspective(var(--perspective-distance)) rotateX(0deg);
    }
    100% {
      transform: perspective(var(--perspective-distance))  rotateX(90deg);
    }
  }

  @keyframes show-page {
    0% {
      transform: perspective(var(--perspective-distance)) rotateX(-90deg);
    }
    100% {
      transform: perspective(var(--perspective-distance)) rotateX(0deg);
    }
  }
}

@media (orientation: landscape) {
  @keyframes seam-moving {
    0% {
      transform: scaleX(100%);
    }
    100% {
      transform: scaleX(200%);
    }
  }

  .book {
    flex-direction: row;
  }

  .list {
    top: 0.7%;
    height: 98%;
    clip-path: url(#pathList);
  }

  .seam {
    height: 100%;
  }

  .seam_moved {
    animation: seam-moving 0.5s 0.5s forwards;
  }

  .shadow {
    top: 0.7%;
    height: 98%;
    clip-path: url(#pathList);
  }

  .list_1 .list__img-card {
    height: 17%;
    width: 32.5%;
  }

  .list_2 .list__img-card {
    height: 23%;
    width: 25%;
  }

  .list__img {
    clip-path: url(#pathList);
  }

  .list__img-border {
    clip-path: url(#pathList);
  }

  .list__img {
    height: 100%;
  }

  .book__previous-side {
    .seam {
      transform-origin: right;
      transform: scaleX(0%);
      right: 0;
    }

    .cover {
      background: linear-gradient(90deg,  #6050b7 0%,  #2d2170 100%);
    }

    .cover_top {
      transform-origin: right;
      transform: rotateY(90deg);
    }

    .book__list {
      right: 0;
      transform-origin: right;
      transform: scale(0%, 100%);
    }

    .list {
      background: linear-gradient(90deg, transparent 90%, rgba(61, 21, 5, 0.454) 100%), no-repeat url(~/assets/images/page.png);

      &_1 {
        width: 95%;
      }

      &_2 {
        width: 94%;
      }

      &_3 {
        width: 93%;
      }

      &_4 {
        width: 92%;
      }
    }
    .shadow {
      right: 0;
      transform: scale(0%, 100%);
      transform-origin: right bottom;

      &_1 {
        width: 95.7%;
      }

      &_2 {
        width: 94.7%;
      }

      &_3 {
        width: 93.7%;
      }

      &_4 {
        width: 92.7%;
      }
    }
  }

  .book__next-side {
    .seam {
      left: 0;
      transform-origin: right;
    }

    .cover {
      background: linear-gradient(-90deg,  #6050b7 0%,  #2d2170 100%);
    }

    .cover_top {
      transform-origin: left;
    }

    .book__list {
      left: 0;
      transform-origin: left;
    }

    .list {
      background: linear-gradient(-90deg, transparent 90%, rgba(61, 21, 5, 0.454) 100%), no-repeat url(~/assets/images/page.png);

      &_1 {
        width: 92%;
      }

      &_2 {
        width: 93%;
      }

      &_3 {
        width: 94%;
      }

      &_4 {
        width: 95%;
      }
    }

    .shadow {
      left: 0;
      transform: scale(100%, 100%);
      transform-origin: left bottom;

      &_1 {
        width: 92.7%;
      }

      &_2 {
        width: 93.7%;
      }

      &_3 {
        width: 94.7%;
      }

      &_4 {
        width: 95.7%;
      }
    }
  }

  @keyframes hide-page {
    0% {
      transform: scale(100%, 100%)  skew(0, 0deg)
    }
    100% {
      transform: scale(0%, 100%)  skew(0, -10deg);
    }
  }

  @keyframes show-page {
    0% {
      transform: scale(0%, 100%) skew(0, 10deg)
    }
    100% {
      transform: scale(100%, 100%) skew(0, 0deg)
    }
  }
}

@media #{$mobile-breakpoint} {
  .book {
    --perspective-distance: 7000px;
    width: get-mobile-size(300);
    height: get-mobile-size(700);
  }

  .book__cover__ornament {
    border-width: get-mobile-size(15)
   }

  .book__cover__ornament {
    mask-size:
      get-mobile-size(150),
      get-mobile-size(100),
      get-mobile-size(100),
      get-mobile-size(100),
      get-mobile-size(100),
      get-mobile-size(171.5),
      get-mobile-size(175),
      get-mobile-size(161),
      get-mobile-size(164.5);
  }

  .seam {
    height: get-mobile-size(2);
  }

  .list__content {
    padding: get-mobile-size(7) get-mobile-size(5);

    &__header {
      font-size: get-mobile-size(18);
      line-height: get-mobile-size(24);
    }

    &__paragraph {
      font-size: get-mobile-size(11);
      line-height: get-mobile-size(15);

      & p {
        margin: get-mobile-size(4) 0;
      }
    }

    &__link:link {
      text-decoration-thickness: get-mobile-size(1);
    }
  }

  .book__previous-side  .cover {
    border-top-left-radius: get-mobile-size(10);
    border-top-right-radius: get-mobile-size(10);
  }

  .book__next-side .cover {
    border-bottom-left-radius: get-mobile-size(10);
    border-bottom-right-radius: get-mobile-size(10);
  }
}

@media #{$tablet-breakpoint} {
  .book {
    --perspective-distance: 7000px;
    width: get-tablet-size(540);
    height: get-tablet-size(1260);
  }

  .book__cover__ornament {
    border-width: get-tablet-size(27)
   }

  .book__cover__ornament {
    mask-size:
      get-tablet-size(270),
      get-tablet-size(180),
      get-tablet-size(180),
      get-tablet-size(180),
      get-tablet-size(180),
      get-tablet-size(307),
      get-tablet-size(315),
      get-tablet-size(290),
      get-tablet-size(296);
  }

  .seam {
    height: get-tablet-size(3.6);
  }

  .list__content {
    padding: get-tablet-size(9) get-tablet-size(3.6);

    &__header {
      font-size: get-tablet-size(30);
      line-height: get-tablet-size(36);
    }

    &__paragraph {
      font-size: get-tablet-size(20);
      line-height: get-tablet-size(25);

      & p {
        margin: get-tablet-size(15) 0;
      }
    }

    &__link:link {
      text-decoration-thickness: get-tablet-size(3);
    }
  }

  .book__previous-side  .cover {
    border-top-left-radius: get-tablet-size(18);
    border-top-right-radius: get-tablet-size(18);
  }

  .book__next-side .cover {
    border-bottom-left-radius: get-tablet-size(18);
    border-bottom-right-radius: get-tablet-size(18);
  }
}

@media #{$desktop-breakpoint} {
  .book {
    width: get-desktop-size(1200);
    height: get-desktop-size(700);
  }

  .book__cover__ornament {
    border-width: get-desktop-size(30)
   }

  .book__cover__ornament {
    mask-size:
      get-desktop-size(300),
      get-desktop-size(200),
      get-desktop-size(200),
      get-desktop-size(200),
      get-desktop-size(200),
      get-desktop-size(343),
      get-desktop-size(350),
      get-desktop-size(322),
      get-desktop-size(329);
  }

  .seam {
    width: get-desktop-size(2);
  }

  .list__content {
    padding: get-desktop-size(17) get-desktop-size(10);

    &__header {
      font-size: get-desktop-size(34);
      line-height: get-desktop-size(40);
    }

    &__paragraph {
      font-size: get-desktop-size(25);
      line-height: get-desktop-size(30);

      & p {
        margin: get-desktop-size(20) 0;
      }
    }

    &__link:link {
      text-decoration-thickness: get-desktop-size(3);
    }
  }

  .book__previous-side  .cover {
    border-top-left-radius: get-desktop-size(10);
    border-bottom-left-radius: get-desktop-size(10);
  }

  .book__next-side .cover {
    border-top-right-radius: get-desktop-size(10);
    border-bottom-right-radius: get-desktop-size(10);
  }
}

@media #{$laptop-breakpoint} {
  .book {
    width: get-laptop-size(1000);
    height: get-laptop-size(583);
  }

  .book__cover__ornament {
    border-width: get-laptop-size(25)
   }

  .book__cover__ornament {
    mask-size:
      get-laptop-size(250),
      get-laptop-size(166.7),
      get-laptop-size(166.7),
      get-laptop-size(166.7),
      get-laptop-size(166.7),
      get-laptop-size(285.5),
      get-laptop-size(291.7),
      get-laptop-size(268),
      get-laptop-size(274.2);
  }

  .seam {
    width: get-laptop-size(1.67);
  }

  .list__content {
    padding: get-laptop-size(15) get-laptop-size(6);

    &__header {
      font-size: get-laptop-size(28);
      line-height: get-laptop-size(34);
    }

    &__paragraph {
      font-size: get-laptop-size(21);
      line-height: get-laptop-size(26);

      & p {
        margin: get-laptop-size(12) 0;
      }
    }

    &__link:link {
      text-decoration-thickness: get-desktop-size(3);
    }
  }

  .book__previous-side  .cover {
    border-top-left-radius: get-laptop-size(8.3);
    border-bottom-left-radius: get-laptop-size(8.3);
  }

  .book__next-side .cover {
    border-top-right-radius: get-laptop-size(8.3);
    border-bottom-right-radius: get-laptop-size(8.3);
  }
}

.book {
  position: absolute;
  display: flex;
  top: 0;
  transform: translate(-50%, -50%);
}

.book__page-shape {
  height: 0;
  width: 0;
  position: absolute;
  top: 0;
}

.cover {
  position: absolute;
  height: 100%;
  width: 100%;
}

.cover_bottom {
  z-index: 1;
}

.book__cover__ornament {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-style: solid;
  border-color: #07031c;
  background:
    radial-gradient(circle at 20% 80%, #07031c 2%, transparent 7%),
    radial-gradient(circle at 80% 20%, #07031c 2%, transparent 7%),
    radial-gradient(circle at 70% 60%, #07031c 3%, transparent 8%),
    radial-gradient(circle at 35% 37%, #07031c 3%, transparent 8%),
    linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) ;
  -webkit-mask-image:
    url(~/assets/images/hat.png),
    url(~/assets/images/corner1_1.png),
    url(~/assets/images/corner2_1.png),
    url(~/assets/images/corner3_1.png),
    url(~/assets/images/corner4_1.png),
    linear-gradient(0deg, transparent 20.4%, white 20.5%, white 79.5%, transparent 79.6%),
    linear-gradient(0deg, transparent 19.9%, white 20%, white 80%, transparent 80.1%),
    linear-gradient(0deg, transparent 21.9%, white 22%, white 78%, transparent 78.1%),
    linear-gradient(0deg, transparent 21.4%, white 21.5%, white 78.5%, transparent 78.6%);
  mask-image:
    url(~/assets/images/hat.png),
    url(~/assets/images/corner1_1.png),
    url(~/assets/images/corner2_1.png),
    url(~/assets/images/corner3_1.png),
    url(~/assets/images/corner4_1.png),
    linear-gradient(0deg, transparent 20.4%, white 20.5%, white 79.5%, transparent 79.6%),
    linear-gradient(0deg, transparent 19.9%, white 20%, white 80%, transparent 80.1%),
    linear-gradient(0deg, transparent 21.9%, white 22%, white 78%, transparent 78.1%),
    linear-gradient(0deg, transparent 21.4%, white 21.5%, white 78.5%, transparent 78.6%);
  mask-repeat: no-repeat;
  mask-position:
    50% 50%,
    2% 98%,
    98% 98%,
    2% 2%,
    98% 2%,
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%;
  mask-composite:
    add,
    add,
    add,
    add,
    add,
    exclude,
    exclude,
    exclude,
    add;
}

.seam {
  position: absolute;
  z-index: 2;
  background: #716aa0;
}

.shadow {
  position: absolute;
}

.book__previous-side,
.book__next-side {
  position: relative;
  height: 100%;
  flex-grow: 1;
}

.list {
  background-size: cover !important;
  position: absolute;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    font-family: prose-antique, serif;
    user-select: none;

    &__header {
      width: 100%;
      color: #3c2d92;
      text-transform: uppercase;
      text-align: center;
    }

    &__paragraph {
      width: 100%;
      color: #6f3e11;
      text-indent: 6%;
    }

    &__link:link {
      color: #6f3e11;
    }

    &__link:visited {
      color:  #3c2d92;
    }

    &__link:link:hover {
      color: #2c1602;
    }

    &__link:visited:hover {
       color: #5442bc;
    }
  }

  &__img {
    position: relative;
    object-fit: contain;
  }

  .list__img-border {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(ellipse at 50% 50%, #2d2170 60%, #6050b7  80%);
  }
}

.list__img-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor: pointer;
  padding: 0.5%;
  box-sizing: border-box;
}


.book__previous-side {
  .cover_top {
    z-index: 1;
  }

  .list {
    &_1 {
      z-index: 3;
    }

    &_2 {
      z-index: 5;
    }

    &_3 {
      z-index: 7;
    }

    &_4 {
      z-index: 9;
    }

    &_flipped {
      animation: show-page 0.5s 0.5s linear forwards;
    }
  }

  .shadow {
    &_1 {
      z-index: 2;
      background-color: rgba(11, 6, 48, 0.407);
    }

    &:not(.shadow_1) {
      background-color: rgba(133, 74, 37, 0.407);
    }

    &_2 {
      z-index: 4;
    }

    &_3 {
      z-index: 6;
    }

    &_4 {
      z-index: 8;
    }

    &__moved {
      animation: show-page 0.5s 0.47s linear forwards;
    }
  }

  .cover-flipped.cover_top {
    animation: show-page 0.5s 0.5s linear forwards;
  }
}

.book__next-side {
  .cover_top {
    z-index: 10;
    cursor: pointer;
  }

  .cover-flipped {
    cursor: default;
  }

  .shadow__moved {
    animation: hide-page 0.52s 0s linear forwards;
  }

  .cover-flipped {
    animation: hide-page 0.5s 0s linear forwards;
    }

  .list {
    &_flipped {
      animation: hide-page 0.5s 0s linear forwards;
    }

    &_1 {
      z-index: 9;
    }

    &_2 {
      z-index: 7;
    }

    &_3 {
      z-index: 5;
      cursor: pointer;
    }

    &_4 {
      z-index: 3;
      cursor: pointer;
    }
  }

  .shadow {
    &_1 {
      z-index: 8;
    }

    &_2 {
      z-index: 6;
    }

    &_3 {
      z-index: 4;
    }

    &_4 {
      z-index: 2;
      background-color: rgba(11, 6, 48, 0.407);
    }

    &:not(.shadow_4) {
      background-color: rgba(133, 74, 37, 0.407);
    }
  }
}
</style>
