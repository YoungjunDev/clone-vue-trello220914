import { createApp } from 'vue'
import App from './App.vue'
import { cardAdd } from './js/common'

createApp(App).mount('#app')

window.addEventListener("click", function(e){
    console.log(e);
    console.log(e.path[0].className);
    if(e.path[0].className === "add-card-btn btn"){
        cardAdd()
    }
})

