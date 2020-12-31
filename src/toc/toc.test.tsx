import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { Link, TableOfContents } from '../index'

describe('TOC', () => {

    const TestLink = <Link href='foo/bar.xhtml' label='test' />

    test('renders with className specified', () => {
        const actual = render(
            <TableOfContents className='foo'>
                {TestLink}
            </TableOfContents>, { }, { xml: true })
        const expected = `
        <nav id="toc" role="doc-toc" epub:type="toc" class="foo">
            <ol>
                <li><a href="foo/bar.xhtml">test</a></li>
            </ol>
        </nav>
        `
        expect(actual).toEqualXML(expected)
    })

    test('renders with className absent', () => {
        const actual = render(
            <TableOfContents>
                {TestLink}
            </TableOfContents>, { }, { xml: true })
        const expected = `
        <nav id="toc" role="doc-toc" epub:type="toc">
            <ol>
                <li><a href="foo/bar.xhtml">test</a></li>
            </ol>
        </nav>
        `
        expect(actual).toEqualXML(expected)
    })

})
