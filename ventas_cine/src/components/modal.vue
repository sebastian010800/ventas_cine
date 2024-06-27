<template>
    <transition name="modal" @click.self="$emit('close')">
      <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div class="bg-white rounded-lg p-8 max-w-sm w-full">
          <slot></slot>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'Modal',
  }
  </script>
  
  <style scoped>
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s;
  }
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
  </style>
  