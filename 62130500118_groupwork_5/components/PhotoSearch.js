app.component('photo-search', {
    props: {
        has: Boolean
    },
    template:
        /*html*/
        `
        <div class="fixed bottom-6 right-6 flex flex-col z-10">
            <button class="material-icons mt-4 text-4xl text-right text-blue-500 fixed bottom-6 right-6 z-10"
                    v-show="!searchActive" @click="switchToSearch">search</button>
            <div v-show="searchActive ">
                <input type="text" v-model="searchInputText" placeholder="What you want?"
                        class="py-2 px-2 bg-white rounded border-b-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        @keyup.enter="search">
                <button @click="switchToSearch"
                        class="ml-2 bg-blue-400 text-white py-2 px-2 rounded hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">Cancel</button>
            </div>
        </div>
        <p class="text-center text-2xl font-bold text-blue-300 mt-16" v-show="!has">No information</p>
    `,
    data() {
        return {
            searchActive: false,
            searchInputText: '',
        }
    },
    methods: {
        search() {
            this.$emit('search-images', this.searchInputText)
        },
        switchToSearch() {
            this.searchActive = !this.searchActive
            this.searchInputText = ''
            this.$emit('switch-to-search')
        }
    }
})