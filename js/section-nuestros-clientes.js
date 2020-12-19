Vue.component('section-nuestros-cliente', {
    data: function () {
        return {
            clients: [
                { name: 'Marco Ford', buy: '- compro casa en la nieve', text: 'Me encanta lo acogedora que es'},
                { name: 'Camila Gates', buy: '- compro casa en la montaña', text: 'Sin dudarlo este era el cambio que necesitaba'},
                { name: 'Julia Musk', buy: '- compro casa en la isla', text: 'Esta casa me cambio mi vida, la amo!!!' }
            ]
        }
    },
    template: `
    <div>
        <a name="nuestros_cliente" >
            <div class="nuestros_clientes">
            <h2>Nuestros Clientes </h2>
                <div class="clientes" v-for="client of clients">
                    <p><span><b>{{client.name}}</b> </span> {{client.buy}}</p>
                    <p> <em>{{client.text}}<em></p>
                </div>    
            </div>
        </a>
    </div>
    `
})

new Vue({
    el: '#app',
    data: {},
});