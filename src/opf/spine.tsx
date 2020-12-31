import { createElement, FunctionalComponent } from "preact";

export interface SpineProps {
    toc: 'ncx'
    items?: ItemRefProps[]
}

interface ItemRefProps {
    idref: string
}

export const Spine: FunctionalComponent<SpineProps> = ({ toc, items }) =>
    createElement('spine', { toc }, items?.map(i => <ItemRef {...i}/>))

const ItemRef: FunctionalComponent<{ idref: string }> = ({ idref }) =>
    createElement('itemref', { idref })
