import fs         from 'node:fs';
import { render } from 'jsa';
import mdMeta     from 'markdown-it-meta';
import mdImport   from 'markdown-it';
import { mapData } from './mapData.js'
const md = mdImport({html: false, linkify: true, typographer: true}).use(mdMeta);

const isPath = new RegExp ("^(.+)\/([^\/]+)$");

export function jsaMD(markdown, template){
    if(isPath.test(markdown)){
        var markdown = fs.readFileSync(markdown, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }
    if(isPath.test(template)){
        var template = fs.readFileSync(template, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }
    if(template === undefined){
        let html = md.render(markdown);
        let metaData = md.meta
        if(metaData.layout){
            var template = fs.readFileSync(metaData.layout, "utf-8", (err,data)=>{
                if (err) {
                    throw err
                } else {
                    return data
                }
            })
        }
    }

    let jsaData = mapData(markdown)

    return render(jsaData, template)
};