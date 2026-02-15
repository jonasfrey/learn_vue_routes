import {
    o_data
} from "./router2.js";
import { f_o_html_from_o_js } from "https://deno.land/x/handyhelpers@5.4.2/mod.js"
const o_component__about = { template: 
    (await f_o_html_from_o_js({
        a_o: [
            {
                innerText: "About page"
            },
            {
                's_tag': "ul",
                a_o: [
                    {
                        s_tag: "li",
                        'v-for': "s_test in a_s_test",
                        s_tag: "div",
                        innerText: "{{ s_test }}"
                    }
                ]
            }
        ]
    })).outerHTML
 };

 export {
    o_component__about
 }