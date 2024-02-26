<template>
  <div>
    <sidebar-web />
    <sidebar-mobile />
  </div>
</template>

<script>
import SidebarWeb from "@/components/SidebarWeb.vue";
import SidebarMobile from "@/components/SidebarMobile.vue";
export default {
  components: { SidebarWeb,SidebarMobile },
};
</script>
