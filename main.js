Vue.component('message', {
    props: ['title', 'body'],
    template: `
    <article class="message is-info" v-show="show">
        <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="show = false"></button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,
    data() {
        return {
            show: true
        }
    }
})

new Vue({
    el: '#app'
})