<!--HTML-->
<template>
  <section class="board-container">
    <List :board="data.board_item" />
    {{data.board_item}}
    <button class="add-list-btn btn" @click="listAdd()">&#43;Add a list</button>
  </section>
</template>


<!--script-->
<script>
import List from '../components/Board/T-List.vue'
import { listAdd } from '../js/common'

export default {
  name: 'T-Board',
  components: {
    List
  },
    props: {
    data: {type:Array, default: () => []}
    },
    methods: {
      listAdd
    }
}
</script>


<!-- css -->
<style scoped>
    
.board-container::-webkit-scrollbar {
    height: 2.4rem;
}

.board-container::-webkit-scrollbar-thumb {
    background-color: #c4c4cc;
    border: 0.3rem solid #888888;
    border-top-width: 0;
}

.board-container {
    display: flex;
    align-items: start;
    padding: 0 0.8rem 0.8rem;
    overflow-x: auto;
    height: calc(100vh - 8.6rem);
}

.add-list-btn {
    flex: 0 0 27rem;
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    background-color: #495057;
    opacity:0.3; 
    color: #ffffff;
    padding: 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: background-color 150ms;
    text-align: left;
    box-shadow: 0px 5px 5px #000000;
}

.add-list-btn:hover {
    background-color: #d3d3d3;
}

.add-list-btn::after {
    content: '...';
}
</style>
