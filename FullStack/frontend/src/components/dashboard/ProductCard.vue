<template>
  
<v-card>
        <v-card-title> Nombre{{item.name}}</v-card-title>
         <v-card-title> <b>Id: </b>{{item.id}}</v-card-title>
         <v-card-title> <b>Descripción: </b>{{item.description}}</v-card-title>
            <v-card-title> <b>Cantidad: </b>{{item.stock}}</v-card-title>
        <v-card-subtitle> <b>Price:</b>{{item.price}} </v-card-subtitle>
         <v-card-title> <b>Cantidad: </b>{{item.path_image}}</v-card-title>
           <v-card-title> <b>Marca: </b>{{item.mark}}</v-card-title>
        <div class="categories">

           <v-chip v-for ="category in item.categories" :key="category">{{category }} </v-chip>

        {{item.category}}
    </div>
    </v-card>

    

</template>

<script>
export default {
    props: ["item"],
};
</script>

<style scope>
.categories {
   display:  flex;
   padding: 10px;
   justify-content: center !important;
   gap: 8px;

}

</style>