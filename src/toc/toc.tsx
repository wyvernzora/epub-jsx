import { createElement, FunctionalComponent } from "preact";

export interface TableOfContentsProps {
    className?: string
}

export const TableOfContents: FunctionalComponent<TableOfContentsProps> = props =>
    createElement('nav', {
        id: 'toc',
        role: 'doc-toc',
        'epub:type': 'toc',
        className: props.className,
    }, <ol>{props.children}</ol>)
