//vue component example
var app = {
    message: "Hello Wordld!!",
    name: "Ramesh",
    lists:[
        "Ramesh",
        "Suresj",
        "Priya",
        "Ranjit"
    ]
}
Vue.component("greeting",{
    template: '<h1>Hello World. Welcome to vue component example {{name}}.<button v-on:click="changeName">Change Message</button></h1>',
    data: function(){
        return app
    },
    methods:{
        changeName: function() {
            this.name = "Richa"
        }
    }
})

new Vue({
    el: "#root",
    data: app,
    methods: {
        readRef: function(){
            console.log(this.refs)
        }
    },
    mounted() {
        document.querySelector("#addNewList").addEventListener("click", () => {
            let newList = document.querySelector("#newList");
            app.lists.push(newList.value);
            newList.value = '';
        })
    }
})

new Vue({
    el: "#root2",
    data: app,
    methods: {
        readRef: function(){
            console.log(this.$refs)
        }
    },
    
})




