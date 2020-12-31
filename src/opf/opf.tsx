import { Component, createElement } from "preact";
import { Metadata, MetadataProps } from "./metadata";
import { Guide, GuideProps } from './guide'
import { Manifest, ManifestProps } from './manifest'
import { Spine, SpineProps } from './spine'

export interface OPFProps {
    metadata: MetadataProps
    manifest: ManifestProps
    spine: SpineProps
    guide: GuideProps
}

export class OPF extends Component<OPFProps, {}> {
    render = () =>
        createElement('package', {
            version: '3.0',
            'unique-identifier': 'book-id',
            'xml:lang': this.props.metadata.language,
            'xmlns': 'http://www.idpf.org/2007/opf',
            'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
            'xmlns:dcterms': 'http://purl.org/dc/terms/',
            'xmlns:media': 'http://www.idpf.org/epub/vocab/overlays/#',
            'prefix': 'ibooks: http://vocabulary.itunes.apple.com/rdf/ibooks/vocabulary-extensions-1.0/',
        }, <>
            <Metadata {...this.props.metadata} />
            <Manifest {...this.props.manifest} />
            <Spine {...this.props.spine} />
            <Guide {...this.props.guide} />
        </>)
}
