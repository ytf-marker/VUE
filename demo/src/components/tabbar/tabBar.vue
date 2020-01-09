<template>
  <div>
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color:#f6f6f6; 
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>