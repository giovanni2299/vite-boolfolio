<template>
    <div class="col-3 ">
        <div class="card h-100 mb-4 p-3">
            <div>
                <strong class="text-primary">Title:</strong>
                <br>
                {{item.title}}

            </div>

            <div >
                <strong class="text-primary">Slug:</strong>
                <br>
                {{item.slug}}

            </div>

            <div >
                <strong class="text-primary">Git Link:</strong>
                <br>
                {{item.github_link}}

            </div>

            <div >
                <strong class="text-primary">Description:</strong>
                <br>
                {{item.description}}

            </div>
        </div>

    </div>

       
    
           
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            item:{
                type : Object
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>