import 'jest-xml-matcher'
import { NCX, NCXProps } from '../../src'
import render from 'preact-render-to-string'

describe('NCX', () => {

    test('correctly renders with full metadata', () => {
        const props: NCXProps = {
            id: 'test-id',
            title: 'test-title',
            author: 'test-author',
            metadata: {
                'dtb:uid': 'uid',
                'dtb:depth': 42,
                'dtb:generator': 'test-gen',
                'dtb:totalPageCount': 66,
                'dtb:maxPageNumber': 77,
            }
        }
        const actual = render(<NCX {...props}></NCX>, {}, { xml: true })
        const expected = `
        <ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
            <head>
                <meta name="dtb:uid" content="uid" />
                <meta name="dtb:depth" content="42" />
                <meta name="dtb:generator" content="test-gen" />
                <meta name="dtb:totalPageCount" content="66" />
                <meta name="dtb:maxPageNumber" content="77" />
            </head>
            <docTitle><text>test-title</text></docTitle>
            <docAuthor><text>test-author</text></docAuthor>
        </ncx>
        `
        expect(actual).toEqualXML(expected)
    })

})
