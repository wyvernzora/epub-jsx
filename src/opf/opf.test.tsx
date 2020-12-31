import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { OPF, OPFProps } from '../index'

const XmlNamespaces =
    'xmlns="http://www.idpf.org/2007/opf" ' +
    'xmlns:dc="http://purl.org/dc/elements/1.1/" '  +
    'xmlns:dcterms="http://purl.org/dc/terms/" ' +
    'xmlns:media="http://www.idpf.org/epub/vocab/overlays/#" ' +
    'prefix="ibooks: http://vocabulary.itunes.apple.com/rdf/ibooks/vocabulary-extensions-1.0/"'

describe('OPF', () => {

    test('renders correctly', () => {
        const props: OPFProps = {
            metadata: {
                id: 'test-id',
                author: 'test-author',
                title: 'test-title',
                updatedAt: new Date(0),
                language: 'x',
            },
            manifest: { },
            spine: { toc: 'ncx' },
            guide: { },
        }
        const actual = render(<OPF {...props} />, {}, { xml: true })
        const expected = `
        <package version="3.0" unique-identifier="book-id" xml:lang="x" ${XmlNamespaces}>
            <metadata>
                <dc:identifier id="book-id">test-id</dc:identifier>
                <dc:title>test-title</dc:title>
                <dc:creator>test-author</dc:creator>
                <dc:language>x</dc:language>
                <meta property="dcterms:title" id="meta-title">test-title</meta>
                <meta property="dcterms:modified" id="meta-modified">1970-01-01T12:00:00Z</meta>
                <meta property="dcterms:language" id="meta-language">x</meta>
            </metadata>
            <manifest />
            <spine toc="ncx" />
            <guide />
        </package>
        `
        expect(actual).toEqualXML(expected)
    })

})