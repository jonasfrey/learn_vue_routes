import {
    f_o_html_from_o_js,
} from "https://deno.land/x/handyhelpers@5.4.2/mod.js"

import { createApp, reactive } from 'vue';

let o_page__home = {
    s_path: "/home",
};
let o_page__about = {
    s_path: "/about"
}
let a_o_page = [
    o_page__home,
    o_page__about,
];
let o_app = createApp({
    data: function() {
        return {
            s_welcome: "Welcome to the app!", 
            a_o_page,
            o_page: a_o_page[0], 
            o_page__home,
            o_page__about,
        };
    },
    template: 
    (await f_o_html_from_o_js(
        {
            a_o: [
                {
                    class: "nav", 
                    a_o: [
                        {
                            'v-for': "o_page2 in a_o_page",
                            s_tag: "a", 
                            href: "#",
                            style: "padding: 5px; display: inline-block;border:1px solid black;",
                            'v-on:click': "o_page = o_page2",
                            innerText: "{{ o_page2.s_path }}",
                        }
                    ]
                },
                {
                    'v-if': "o_page?.s_path === o_page__home.s_path",
                    s_tag: "div", 
                    class: "div", 
                    innerText: "This is the home page."
                }, 
                {
                    'v-if': "o_page?.s_path === o_page__about.s_path",
                    s_tag: "div", 
                    class: "div", 
                    innerText: "This is the about page."
                }, 
            ]
    }
    )).innerHTML,

    mounted: function() {
        // expose vue data to globalThis for debugging
        globalThis.o_app_data = this.$data;

    },
});
globalThis.o_app = o_app;
// o_app.use(o_router);
o_app.mount('#app');
