import { createElement, FunctionalComponent } from "preact";

export interface XhtmlProps {
    title: string
    language: string
    stylesheets: string[]
}

export const Xhtml: FunctionalComponent<XhtmlProps> = props => createElement('html', {
    xmlns: 'http://www.w3.org/1999/xhtml',
    'xmlns:epub': 'http://www.idpf.org/2007/ops',
    lang: props.language,
    'xml:lang': props.language,
}, <>
    <head>
        <title>{props.title}</title>
        {props.stylesheets.map(path => <link rel='stylesheet' href={path} />)}
    </head>
    {
        typeof props.children === 'string'
            ? <body dangerouslySetInnerHTML={{ __html: props.children }} />
            : <body>{props.children}</body>
    }
</>)
