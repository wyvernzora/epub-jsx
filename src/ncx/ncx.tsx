import { createElement, FunctionalComponent } from "preact"

export interface NCXMetadata {
    'dtb:uid': string | number,
    'dtb:depth': number,
    'dtb:generator'?: string,
    'dtb:totalPageCount': number,
    'dtb:maxPageNumber': number,
}

export interface NCXProps {
    id: string
    title: string
    author: string
    metadata: NCXMetadata
}

export const NCX: FunctionalComponent<NCXProps> = props =>
    createElement('ncx', {
        xmlns: 'http://www.daisy.org/z3986/2005/ncx/',
        version: '2005-1',
    }, <>
        <Metadata {...props} />
        <DocTitle title={props.title} />
        <DocAuthor author={props.author} />
        {props.children}
    </>)

const Metadata: FunctionalComponent<{ metadata: NCXMetadata }> = ({ metadata }) =>
    <head>{
        Object
            .entries(metadata)
            .map(([key, value]) => <meta name={key} content={String(value)} />)
    }</head>

const DocAuthor: FunctionalComponent<{ author: string }> = ({ author }) =>
    createElement('docAuthor', { }, <text>{author}</text>)

const DocTitle: FunctionalComponent<{ title: string }> = ({ title }) =>
    createElement('docTitle', { }, <text>{title}</text>)
