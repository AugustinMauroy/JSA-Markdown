import fs         from 'node:fs';
import mdMeta     from 'markdown-it-meta';
import mdImport   from 'markdown-it';
const md = mdImport({html: false, linkify: true, typographer: true}).use(mdMeta);

const isPath = new RegExp ("^(.+)\/([^\/]+)$");

export function jsaGetTemplate(markdown){
    if(isPath.test(markdown)){
        var markdown = fs.readFileSync(markdown, "utf-8", (err,data)=>{
            if (err) {
                throw err
            } else {
                return data
            }
        })
    }
        let html = md.render(markdown);
        let metaData = md.meta
        if(metaData.layout || metaData.template){
            return metaData.layout || metaData.template;
        }
        else{
            console.error("\x1b[31m", "No template/layout has been defined.", "\x1b[0m");
        }
};