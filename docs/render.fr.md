| lang |FR 🇧🇪 | [EN 🇬🇧](/docs/render.en.md) |
|:----:|:-----:|:--------------------:|

# Rendre un fichier markdown dans un template JSA

## `jsaMD(markdown , template)`

- `markdown` | [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `path` |

- `template` | [`String`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures#string_type) | `path` | `undefine` mais le template doit être définit dans le markdown |

## Convention d'utilisation

La variable `mdContent` ne peut être définit dans le metadata de votre markdown.

## Exemple de render de markdown avec du JSA

Votre markdown:

```md
---
layout: ./yourTemplate.jsa
lang: en
title: JSA is amazing
---

Markdown content

```

Le template:

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

Le javascript pour render.

```JS
import { mapData } from 'jsa-markdown';

mapData("./myMarkdown.md")
```
