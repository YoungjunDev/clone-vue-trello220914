<!--HTML-->
<template>
  <ul class="list-items">
    <li v-for="(card, idx) in card" :key="idx">{{ card.card_title }}</li>
	</ul>
    <div class="toggle-box">
        <textarea name="text-area" class="textbox" cols="30" rows="5" placeholder=" Enter a title for this card..."></textarea>
        <button class="update-btn">Add card</button>
        <button type="button" class="btn-close" @click="cardReset()"><img src="../../assets/images/cancel.png"></button>
    </div>
</template>

<!--script-->
<script>
import { cardReset } from '../../js/common'

export default {
  name: 'T-List',
   props: {
        card: {type:Array, default: () => []}
    },
    methods: {
        cardReset
    }
}
</script>


<!-- css -->
<style scoped>
  .list-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: start;
    padding: 0 0.6rem 0.5rem;
    overflow-y: auto;
    margin-bottom: 0.3rem;
}

.list-items::-webkit-scrollbar {
    width: 1.6rem;
}

.list-items::-webkit-scrollbar-thumb {
    background-color: #c4c9cc;
    border-right: 0.6rem solid #e2e4e6;
}

.list-items li {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.3;
    background-color: #fff;
    padding: 0.65rem 0.6rem;
    color: #4d4d4d;
    border-bottom: 0.1rem solid #ccc;
    border-radius: 0.3rem;
    margin-bottom: 0.6rem;
    word-wrap: break-word;
    cursor: pointer;
}

.list-items li:last-of-type {
    margin-bottom: 0;
}

.list-items li:hover {
    background-color: #eee;
}

.add-card-btn::after {
  content: '...';
}

.toggle-box {
        display: none;        
    } 

.textbox {
    resize : vertical;
    border-radius: 0.3rem;
    font-family: Arial; color: #333;
    box-shadow: 1px 1px 1px #999;
     line-height: 1.5;
     padding: 0.6rem 0.6rem;
}

.update-btn {
    margin: 10px;
    padding: 10px;
    background-color: #4B89DC;
    border: none;
    border-radius: 0.5rem;
    color: white;
}

.update-btn:hover {
    background-color: #4682b4;
    color: white;
    text-decoration:none;
}

.btn-close {
    border: none;
    opacity: 1;
    background-color: #e2e4e6;
}

.btn-close:hover {
    background-color: #e2e4e6;
    opacity: 0.5;
    color: #c4c9cc;
}



</style>
