import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { Metadata, MetadataProps } from '../../src'


describe('OPF', () => {

    describe('Metadata', () => {

        test('all props specified', () => {
            const props: MetadataProps = {
                id: 'test-id',
                author: 'test-author',
                title: 'test-title',
                updatedAt: new Date(0),
                language: 'x',
                publisher: 'test-publisher',
                generator: 'test-generator',
            }
            const actual = render(<Metadata {...props} />, {}, { xml: true })
            const expected = `
            <metadata>
                <dc:identifier id="book-id">test-id</dc:identifier>
                <dc:title>test-title</dc:title>
                <dc:creator>test-author</dc:creator>
                <dc:language>x</dc:language>
                <dc:publisher>test-publisher</dc:publisher>
                <meta property="dcterms:title" id="meta-title">test-title</meta>
                <meta property="dcterms:modified" id="meta-modified">1970-01-01T12:00:00Z</meta>
                <meta property="dcterms:language" id="meta-language">x</meta>
                <meta property="generator" content="test-generator" />
            </metadata>
            `
            expect(actual).toEqualXML(expected)
        })

        test('only required props specified', () => {
            const props: MetadataProps = {
                id: 'test-id',
                author: 'test-author',
                title: 'test-title',
                updatedAt: new Date(0),
                language: 'x',
            }
            const actual = render(<Metadata {...props} />, {}, { xml: true })
            const expected = `
            <metadata>
                <dc:identifier id="book-id">test-id</dc:identifier>
                <dc:title>test-title</dc:title>
                <dc:creator>test-author</dc:creator>
                <dc:language>x</dc:language>
                <meta property="dcterms:title" id="meta-title">test-title</meta>
                <meta property="dcterms:modified" id="meta-modified">1970-01-01T12:00:00Z</meta>
                <meta property="dcterms:language" id="meta-language">x</meta>
            </metadata>
            `
            expect(actual).toEqualXML(expected)
        })

    })

})