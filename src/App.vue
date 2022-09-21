<!--HTML-->
<template>
  <section class="board-info-bar">
    <Header />
  </section>
    <Board :data="data[0]" />
</template>


<!--script-->
<script>
import Header from './components/T-Header.vue'
import Board from './components/T-Board.vue'
import Dummydata from './assets/dummy.json';

export default {
  name: 'App',
  components: {
    Header,
    Board
  },
  data() {
    return {
      data: Dummydata.board
    }
  }
}
</script>


<!-- css -->
<style>
  :root {
    font-size: 10px;
  }

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #868e96;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
}

:focus {
    outline-color: #fa0;
}

.board-info-bar {
    flex-basis: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.8rem 0;
    padding: 0 1rem;
    color: #ffffff;
}
</style>
