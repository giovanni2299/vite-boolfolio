<template>
    <div class="container">
        <div class="row gap-4">
            
                <ProjectCard v-for="project in projects" :key="project.id" :item="project"/>
            
           
            
        </div>
    </div>
</template>

<script>

    import ProjectCard from './ProjectCard.vue';
    import axios from 'axios'

    export default {
        components:{
            ProjectCard
        },
        data(){
            return{
                projects:[],
            }
        },
        
        methods:{
            fetchProjects(){
            axios.get('http://127.0.0.1:8000/api/project',{

            })
            .then((res)=> {
                console.log(res.data.projects)
                this.projects = res.data.projects
                
            })
        },
        },
        
        created(){
            this.fetchProjects()
        }

    }
</script>

<style scoped>

</style>