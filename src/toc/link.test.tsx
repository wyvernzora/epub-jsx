import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { Link } from '../index'

describe('TOC', () => {

    describe('Link', () => {

        test('renders and applies className when specified', () => {
            const actual = render(<Link href='foo/bar.xhtml' label='test' className='baz' />)
            const expected = `
            <li class="baz">
                <a href="foo/bar.xhtml">test</a>
            </li>
            `
            expect(actual).toEqualXML(expected)
        })

        test('renders when className is absent', () => {
            const actual = render(<Link href='foo/bar.xhtml' label='test' />)
            const expected = `
            <li>
                <a href="foo/bar.xhtml">test</a>
            </li>
            `
            expect(actual).toEqualXML(expected)
        })

    })

})
