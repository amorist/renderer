/*
 * Created: 2019-08-12 11:08:07
 * Author : Amor
 * Email : amor90s.zhang@gmail.com
 * -----
 * Description: Technology is how you get to the solution, it is not the solution.
 */

import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';

export async function Renderer(baseTemplate: string, context: object, data: object, template: string) {
    return new Promise((resolve, reject) => {
        const renderer = createRenderer({
            template: baseTemplate,
        });
        const app = new Vue({
            data,
            template,
        });
        renderer.renderToString(app, context, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    });
}

export async function RendererTemplate(data: object, template: string) {
    return new Promise((resolve, reject) => {
        const renderer = createRenderer();
        const app = new Vue({
            data,
            template,
        });
        renderer.renderToString(app, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    });
}
