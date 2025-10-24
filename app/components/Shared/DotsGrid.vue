<script
  setup
  lang="ts"
>
const gridSize = 9;
const dotRadius = 4;
const gap = 16;
const svgSize = (gridSize - 1) * gap + dotRadius * 2;

function getOpacity(x: number, y: number) {
  // Fade out towards edges
  const center = (gridSize - 1) / 2;
  const dist = Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));
  // Opacity: 1 at center, 0.2 at corners
  return 1 - (dist / center) * 0.8;
}
</script>

<template>
  <div class="absolute inset-0 z-0 pointer-events-none">
    <svg
      :width="svgSize"
      :height="svgSize"
      viewBox="0 0 144 144"
      fill="none"
      class="mx-auto"
    >
      <g>
        <template
          v-for="y in gridSize"
          :key="y"
        >
          <template v-for="x in gridSize">
            <circle
              :cx="(x - 1) * gap + dotRadius"
              :cy="(y - 1) * gap + dotRadius"
              :r="dotRadius"
              fill="#fff"
              :fill-opacity="getOpacity(x - 1, y - 1)"
            />
          </template>
        </template>
      </g>
    </svg>
  </div>
</template>

<style scoped></style>
