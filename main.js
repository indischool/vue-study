Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks" v-text="task.description"></task>
        </div>
    `,

    data() {
        return {
            tasks: [{
                    description: 'Go to the store',
                    completed: true
                },
                {
                    description: 'Go to the email',
                    completed: false
                },
                {
                    description: 'Go to the farm',
                    completed: true
                },
                {
                    description: 'Go to work',
                    completed: false
                },
            ]
        }
    }
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#app'
})