import { createElement, FunctionalComponent } from "preact";

export interface ManifestProps {
    items?: ItemProps[]
}

interface ItemProps {
    id: string
    href: string
    mediaType: string
    properties?: 'nav'
}

export const Manifest: FunctionalComponent<ManifestProps> = ({ items }) =>
    createElement('manifest', { }, items?.map(i => <Item {...i} />))

export const Item: FunctionalComponent<ItemProps> = props =>
    createElement('item', {
        id: props.id,
        href: props.href,
        properties: props.properties,
        'media-type': props.mediaType,
    })
