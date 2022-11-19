| lang |[FR 🇧🇪](/docs/render.fr.md) | EN 🇬🇧 |
|:----:|:-----:|:--------------------:|

# Render a markdown file in a JSA template

## `jsaMD(markdown , template)`

- `markdown` | [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `path` |

- `template` | [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `path` | `undefine` but the template must be defined in the metadata of markdown |

## Usage agreement

The variable `mdContent` cannot be defined in the metadata of your markdown.

## Example of markdown rendering with JSA

Your markdown:

```md
---
layout: ./yourTemplate.jsa
lang: en
title: JSA is amazing
---

Markdown content

```

The JSA template:

```html
<!DOCTYPE html>
<html lang="${ lang }">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${ title }</title>
</head>
<body>
    <h1>${ title }</h1>
    ${ mdContent }
</body>
</html>
```

And the javascript to render.

```JS
import { mapData } from 'jsa-markdown';

mapData("./myMarkdown.md")
```
