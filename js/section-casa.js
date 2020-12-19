Vue.component('section-house', {
    data: function () {
        return {
            houses: [
                { img: 'img/house-1.jpg', name: 'Casa en playa', description: 'A 2 kmr de la playa y con una hermosa vista al mar para que disfrute', value: '$1.000.000', href: 'https://www.google.com' },
                { img: 'img/house-2.jpg', name: 'Casa en playa', description: 'A 2 kmr de la playa y con una hermosa vista al mar para que disfrute', value: '$1.000.000', href: 'https://www.google.com' },
                { img: 'img/house-3.jpg', name: 'Casa en playa', description: 'A 2 kmr de la playa y con una hermosa vista al mar para que disfrute', value: '$1.000.000', href: 'https://www.google.com' }
            ]
        }
    },
    template: `
    <div>
        <a name="casa" >
        <div class="casas">
        <h2>Casas disponibles</h2>
        <div class="row-item-casas" >
            <div class="item_casas" v-for="house of houses">
                <div class="img_casa"><img v-bind:src="house.img" alt=""></div>
                <div class="texto_casas">
                    <h3>{{house.name}}</h3>
                    <p>{{house.description}}</p>
                    <span>{{house.value}}</span>
                </div>     
                <div class="button_casas"><button :href="house.href" >VER CASA</button></div>
            </div>
        </div>
        </div>
        </a>
    </div>
    `
})

new Vue({
     el: '#app',
     data:{ },
    });