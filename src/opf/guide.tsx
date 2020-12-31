import { createElement, FunctionalComponent } from "preact";

export interface GuideProps {
    references?: ReferenceProps[]
}

interface ReferenceProps {
    type: 'cover' | 'toc'
    title: string
    href: string
}

export const Guide: FunctionalComponent<GuideProps> = ({ references }) =>
    createElement('guide', { }, references?.map(i => <Reference {...i} />))

const Reference: FunctionalComponent<ReferenceProps> = ({ type, title, href }) =>
        createElement('reference', { type, title, href })
