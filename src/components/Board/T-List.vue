<!--HTML-->
<template>
    <div class="list" v-for="(board, idx) in board" :key="idx">
        <div class="title-menu">   
            <h3 class="list-title" @click="Rewrite()">{{ board.list_title }}</h3>
            <input class="list-title-input" :value="board.list_title">

            <button class="action-menu">···</button>

        </div>
        
        <Card :card="board.list_item" />

		<button class="add-card-btn btn">&#43;Add a card</button>
	</div>
</template>


<!--script-->
<script>

import Card from '../Board/T-Card.vue'
import { Rewrite } from '../../js/common'

export default {
  name: 'T-List',
  components: {
    Card
  },
   props: {
        board: {type:Array, default: () => []}
    },
    methods: {
        Rewrite
    }
}
</script>


<!-- css -->
<style scoped>
    .list {
        flex: 0 0 27rem;
        display: flex;
        flex-direction: column;
        background-color: #e2e4e6;
        max-height: calc(100vh - 11.8rem);
        border-radius: 0.5rem;
        margin-right: 1rem;
        box-shadow: 0px 0px 10px #000000;
    }

    /* .list:last-of-type {
        margin-right: 0;
    } */

    .title-menu {
        display: flex;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
        margin-right: 1rem;
        margin-left: 0.1rem;
        justify-content: space-between
    }

    .action-menu {
        height: 100%;
        margin: auto 0;
        border: none;
        background-color: #e2e4e6;
    }  
    
    .action-menu:hover {
        background-color: #cdd2d4;
        color: #4d4d4d;
        text-decoration:none;
    }

    .list-title, .list-title-input {
        font-size: 1.4rem;
        font-weight: 700;
        color: #333;
        padding: 1rem;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
    }

    .list-title-input {
        border: none;
        border-radius: 0.8rem;
        display: none;
    }

    .add-card-btn {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    color: #838c91;
    padding: 1rem;
    text-align: left;
    cursor: pointer;
}

    .add-card-btn:hover {
        background-color: #cdd2d4;
        color: #4d4d4d;
        text-decoration:none;
    }
</style>
