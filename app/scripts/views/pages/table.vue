<template>
  <div >
    <ui-table fullwidth  rowCheckbox :data="data" :thead="thead" :tbody="tbody"></ui-table>
  </div>
</template>

<script>


export default {
  name: 'hello',
  data() {
    return {
      data: [
       {
         id: 1,
         dessert: 'Frozen yogurt',
         calories: 159,
         fat: 6,
         carbs: 24,
         protein: 4
       },
       {
         id: 2,
         dessert: 'Ice cream sandwich',
         calories: 237,
         fat: 9,
         carbs: 37,
         protein: 4.3
       },
       {
         id: 3,
         dessert: 'Eclair',
         calories: 262,
         fat: 16,
         carbs: 24,
         protein: 6
       }
     ],
     thead: [
       'ID',
       'Dessert (100g serving)',
       'Calories',
       'Fat (g)',
       'Carbs (g)',
       'Protein (g)'
     ],
     tbody: ['id', 'dessert', 'calories', 'fat', 'carbs', 'protein']
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
