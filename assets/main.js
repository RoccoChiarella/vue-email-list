Vue.config.devtools = true;

var app = new Vue(
    {
        el: '#root',
        data: {
            emails: []
        },
        mounted() {
            const self = this;
            for (var i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function(risposta) {
                        self.emails.push(risposta.data.response);
                });
            }
        }
    }
);
