import { createElement, FunctionalComponent } from 'preact'
import moment from 'moment'

const dateFormat = 'YYYY-MM-DD[T]hh:mm:ss[Z]'

export interface MetadataProps {
    id: string
    author: string
    title: string
    updatedAt: Date
    language: string
    publisher?: string
    generator?: string
}

export const Metadata: FunctionalComponent<MetadataProps> = props =>
    createElement('metadata', {}, <>
        {createElement('dc:identifier', {id: 'book-id'}, props.id)}
        {createElement('dc:title', {}, props.title)}
        {createElement('dc:creator', {}, props.author)}
        {createElement('dc:language', {}, props.language)}
        {props.publisher && createElement('dc:publisher', {}, props.publisher)}
        <meta property='dcterms:title' id='meta-title'>{props.title}</meta>
        <meta property='dcterms:modified' id='meta-modified'>{moment.utc(props.updatedAt).format(dateFormat)}</meta>
        <meta property='dcterms:language' id='meta-language'>{props.language}</meta>
        {props.generator && <meta property='generator' content={props.generator}/>}
    </>)
