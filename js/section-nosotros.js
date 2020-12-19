Vue.component('section-nosotros', {
    data: function () {
        return {
            we: [
                {
                    id: 'item_nosotros_1', id2: 'svg_nosotros_3', id3: 'texto_nosotros_2',
                svg: 'fas fa-lock', tittle: 'Seguridad', text: 'Somos la empresa con mas segura en el mercado de bienes raices, con nosotros vas a poder comprar sin miedo ni riesgo' },
                { id: 'item_nosotros_2', id2: 'svg_nosotros_3', id3: 'texto_nosotros_2', 
                    svg: 'far fa-money-bill-alt', tittle: 'El mejor precio', text: 'Contamos con bienes raices de todo tipo de precios para que cualquier persona pueda acceder a ellos, no tengas miedo y pregunta por la casa de tus sueños' },
                { id: 'item_nosotros_3', id2: 'svg_nosotros_3', id3: 'texto_nosotros_2', 
                    svg: 'far fa-clock', tittle: 'Servicio al cliente', text: 'Contamos con el mejor equipo de latino america para que te saquen todas tus dudas las 24 hrs y con la mejor amabilidad' }
            ]
        }
    },
    template: `
    <div>
    <a name="nosotross">
    <div class="nosotros">
        <h2>Nosotros</h2>
        <div class="row-nosotros">
        <div v-for="w of we" :id = "w.id" class="item-nosotros" onmouseover="nosotros_hover('w.id', 'w.id2' , 'w.id3')" onmouseout="nosotros_no_hover('w.id', 'w.id2' , 'w.id3')">
            <div :id="w.id2" class="svg-nosotros"><i :class="w.svg"></i></div>
            <div :id="w.id3" class="texto-nosotros">
            <h3>{{w.tittle}}</h3>
            <p>{{w.text}}</p>
            </div>
        </div>
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