app.component('photo-view', {
    props: {
        show: Boolean,
        img: String
    },
    template:
        /*html*/
        `
        <div v-show="show"
            class="bg-black bg-opacity-80 w-full h-screen z-20 fixed top-0 flex content-center">
            <img :src=img class="m-auto h-3/4 ">
            <button @click="closeBigImage" class="material-icons text-white absolute top-4 right-4"> close </button>
            <button @click="forwardBigImage" class="material-icons absolute text-white top-1/2 right-6"> arrow_forward_ios </button>
            <button @click="backwardBigImage" class="material-icons absolute text-white top-1/2 left-6"> arrow_back_ios </button>
        </div>
    `,
    methods: {
        closeBigImage() {
            this.$emit('close-big-image')
        },
        forwardBigImage() {
            this.$emit('forward-big-image')
        },
        backwardBigImage() {
            this.$emit('backward-big-image')
        }
    }
})