import { createElement, FunctionalComponent } from 'preact'


export interface ContainerProps {
    rootfiles: RootFile[]
}

interface RootFile {
    path: string
    mediaType: string
}

export const Container: FunctionalComponent<ContainerProps> = ({ rootfiles }) =>
    createElement('container', {
        version: '1.0',
        xmlns: 'urn:oasis:names:tc:opendocument:xmlns:container'
    }, createElement('rootfiles', { }, rootfiles.map(i => <RootFile {...i} />)))

const RootFile: FunctionalComponent<RootFile> = ({ path, mediaType }) =>
    createElement('rootfile', {
        'full-path': path,
        'media-type': mediaType,
    })
