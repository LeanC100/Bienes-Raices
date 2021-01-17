Vue.component('section-contacto', {
    data: function () {
        return {

        }
    },
    template: `
    <div>
        <a name="contacto">
        <div  class="contacto">
            <h3> ¿Te gusto alguna de nuestras casas?</h3>
            <p> ¡¡Contanos cual es tu casa favorita!!</p>
            <div class="button"><button> Contar</button></div>
        </div>
        </a>
    </div>
    `
})

new Vue({
    el: '#app',
    data: {},
});