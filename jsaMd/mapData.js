import mdMeta     from 'markdown-it-meta';
import mdImport   from 'markdown-it';
const md = mdImport({html: false, linkify: true, typographer: true}).use(mdMeta);

export function mapData(markdown){
    let html = md.render(markdown);
    let metaData = md.meta;
    let htmlJson = html.replace(/(\r\n|\n|\r)/gm, "\\n \\t"); /*Gestion of break line*/
    htmlJson = htmlJson.toString().replace(/\\"/g, '"').replace(/"/g, '\\"'); /*replace " by /" */

    let result = `{
        "mdContent" : "${htmlJson}",\n`;
    for (let key in metaData) {
        let var_content = eval(`metaData .${key}`)
        result += `"${key}" : "${var_content}",\n`;
    }
    result = result.substring(0, result.length - 2);
    result += `}`;
    
    return JSON.parse(result)
};