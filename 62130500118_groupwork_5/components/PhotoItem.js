app.component('photo-item', {
    props: {
        images: Array
    },
    template:
        /*html*/
        `
        <div class="mb-8 max-w-6xl mx-auto">
        <h2
            class="font-semibold text-lg text-white p-3 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 rounded-md shadow-xl fixed bottom-20 right-6 z-10">
            Your Favoritec {{countFavorite}}</h2>
        <div class="space-y-7 z-0">
            <div v-for="(image,index) in images" class="flex space-x-6 bg-purple-50 p-4 shadow-md relative"
                v-show="image.show">
                <div class="relative">
                    <img :src=image.img class="max-w-lg shadow-lg cursor-pointer"
                        v-bind:class="[image.favorite ? 'ring ring-pink-600 ring-offset-4 ring-offset-purple-100' : ' ']"
                        @click="showBigImage(index)">
                    <span v-show="!image.favorite" @click="favorite(index)"
                        class="text-3xl absolute bottom-2 right-2 text-pink-400 material-icons transition duration-500 cursor-pointer">favorite_border</span>
                    <span v-show="image.favorite" @click="favorite(index)"
                        class="text-3xl absolute bottom-2 right-2 text-pink-400 material-icons transition duration-500 cursor-pointer">favorite</span>
                </div>
                <div class="flex flex-col space-y-6 tracking-wide leading-6 max-w-lg ">
                    <h2 class="text-xl font-semibold text-center text-blue-800">{{image.name}}</h2>
                    <p class="ml-8 text-blue-600">{{image.description}}</p>
                </div>
            </div>
        </div>
    `,
    methods: {
        favorite(index) {
            this.$emit('favorite-image', index)
        },
        showBigImage(index){
            this.$emit('show-big-image', index)
        }

    },
    computed: {
        countFavorite() {
            return this.images.filter(t => t.favorite).length
        }
    }
})