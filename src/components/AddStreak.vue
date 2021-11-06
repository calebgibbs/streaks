<template>
  <div class="outer" :class="{ activeBorder: creatingStreak }">
    <div v-if="!creatingStreak" class="number">New</div> 
    <div v-else class="activeNumber">0</div> 
    <div class="title">
      <input type="text" v-model="streakName" @blur=" creatingStreak = !creatingStreak " @focus=" creatingStreak = !creatingStreak " :class="{ activeBorder: creatingStreak }">
    </div> 
    <div class="buttons">
      <div class="changeButton">
        <button class="green">Add</button>
      </div>
      <div class="changeButton">
        <button class="red">Cancel</button>
      </div> 
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
  export default {
    setup(props) { 
      const creatingStreak = ref(false)  
      const streakName = ref('')  

      return {creatingStreak, streakName}
    }
  }
</script>

<style lang="scss" scoped> 
.outer { 
  border: 3px solid rgba(#2d4157, .5);  
  border-style: dashed;
  width: 80%; 
  border-radius: 15px; 
  padding: .5rem; 
  margin: 1rem;
}  

.activeBorder { 
  border-color: #2d4157 !important;
}

.number { 
  text-align: center; 
  padding: 1rem;   
  font-size: 1.4rem;
  width: 2.5rem;
  height: 2.5rem; 
  border-radius: 50%;
  border: 2px solid rgba(#2d4157, .5); 
  margin: 0 auto; 
  display: flex; /* or inline-flex */
  align-items: center; 
  justify-content: center;
} 

.activeNumber { 
  text-align: center; 
  padding: 1rem;   
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem; 
  border-radius: 50%;
  border: 2px solid #000; 
  margin: 0 auto;
}

.title { 
  margin: .3rem; 
  input { 
    font-size: 1.5rem; 
    font-weight: bolder; 
    width: 60%; 
    margin: 0 auto; 
    display: block; 
    background: none; 
    border: none; 
    border-bottom: 2px solid rgba(#2d4157, .5); 
    outline: none; 
    text-align: center;
  }
} 

.changeButton { 
  display: inline-block; 
  width: calc(100% / 2); 
  padding-top: 1rem;   
} 

button { 
  width: 95%; 
  margin: 0 auto; 
  display: block; 
  padding: .5rem; 
  border-radius: 10px; 
  font-size: 1.1rem;
} 

.red { 
  border: 2px solid #d9534f; 
  background: rgba( #d9534f, .15)
} 

.green {  
  border: 2px solid #5cb85c; 
  background: rgba( #5cb85c, .15)
}

</style>