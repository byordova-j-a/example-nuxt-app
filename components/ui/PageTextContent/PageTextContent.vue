<template>
  <svg
    width="100%"
    :viewBox="viewBox"
    class="page-text-content"
  >
    <defs>
      <linearGradient
        id="TitleGradient"
      >
        <stop
          offset="5%"
          stop-color="#3c2d92"
        />
        <stop
          offset="50%"
          stop-color="#6050b7"
        />
        <stop
          offset="95%"
          stop-color="#3c2d92"
        />
      </linearGradient>
      <linearGradient
        id="TextGradient"
        gradientTransform="rotate(90)"
      >
        <stop
          offset="15%"
          stop-color="#6f3e11"
        />
        <stop
          offset="85%"
          stop-color="#181816"
        />
      </linearGradient>
      <template
        v-for="{ landscapePath, portraitPath, landscapeId, portraitId } in contentConfig"

        :key="landscapeId"
      >
        <path
          :id="landscapeId"
          :d="landscapePath"
        />
        <path
          :id="portraitId"
          :d="portraitPath"
        />
      </template>
    </defs>
    <template
      v-for="{ text, landscapeId, landscapeHref, portraitHref, entityClass, startXCoordinate, textAnchor } in contentConfig"
      :key="landscapeId"
    >
      <text
        v-for="{ textPathClass, href } in [
          { textPathClass: 'portrait', href: portraitHref },
          { textPathClass:'landscape', href: landscapeHref }
        ]"
        :key="textPathClass"
        :x="startXCoordinate"
        :text-anchor="textAnchor"
        class="page-text-content__line"
        :class="entityClass"
      >
        <textPath
          :href="href"
          :class="textPathClass"
        >
          {{ text }}
        </textPath>


      </text></template>
  </svg>
</template>

<script setup lang="ts">
import {
  defaultProps,

  createContentConfig,

  type TComponentProps,
} from './models';

const componentProps = withDefaults(defineProps<TComponentProps>(), defaultProps);

const componentId = useId();

const viewBox = computed(()=>`0 0 100 ${Math.round(10000 / componentProps.aspectRatio) / 100}`);

const contentConfig = computed(() => createContentConfig(componentProps.titleList, componentProps.paragraphList, componentId));

</script>

<style scoped lang="scss">
.page-text-content {
  font-family: prose-antique, serif;
  user-select: none;
  position: relative;
}
.page-text-content__line_text {
  font-size: 3.8px;
  fill: url(#TextGradient);
}
.page-text-content__line_title {
  font-size: 6px;
  text-transform: uppercase;
  fill: url(#TitleGradient);
}
.portrait,
.landscape {
  position: absolute;
}
@media (orientation: landscape) {
  .portrait {
    display: none;
  }
}
@media (orientation: portrait) {
  .landscape {
    display: none;
  }
}

</style>
