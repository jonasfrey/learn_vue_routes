import {
    f_o_html_from_o_js,
} from "https://deno.land/x/handyhelpers@5.4.2/mod.js"

let f_add_css = function(s_css){
    let o_style = document.createElement("style");
    o_style.innerHTML = s_css;
    document.head.appendChild(o_style);
}

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const o_component__home = { template: 
    (await f_o_html_from_o_js({innerText: "Home page"})).outerHTML
 };
const o_component__about = { template: 
    (await f_o_html_from_o_js({innerText: "About page"})).outerHTML
 };

const a_o_route = [
    { path: '/home', component: o_component__home },
    { path: '/about', component: o_component__about },
];

f_add_css(
    `
    .router-link-exact-active{
        color: red;
        background: blue;
    }`
)
const router = createRouter({
    history: createWebHashHistory(),
    routes: a_o_route,
});

const app = createApp({
    data: ()=>{
        return {
            a_o_route
        }
    },
    template: 
    (await f_o_html_from_o_js(
        {
            a_o: [
                {
                    class: "nav", 
                    a_o: [
                        {
                            's_tag': "router-link",
                            'v-for': "o_route in a_o_route",
                            ':to': 'o_route.path',
                            style: "padding: 5px; display: inline-block;border:1px solid black;",
                            innerText: "{{ o_route.path }}",
                        }
                    ]
                },
                {
                    s_tag: "router-view"
                }
            ]
    }
    )).innerHTML,

});

app.use(router);
app.mount('#app');