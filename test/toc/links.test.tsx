import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { Links, Link } from '../../src'

describe('TOC', () => {

    const TestLink = <Link href='foo/bar.xhtml' label='test' />

    describe('Links', () => {

        test('renders with className and href specified', () => {
            const actual = render(
                <Links label='links-label' href='links-href' className='baz' >
                    {TestLink}
                </Links>, { }, { xml: true })
            const expected = `
            <li class="baz">
                <a href="links-href">links-label</a>
                <ol>
                    <li>
                        <a href="foo/bar.xhtml">test</a>    
                    </li>
                </ol>
            </li>
            `
            expect(actual).toEqualXML(expected)
        })

        test('renders with className and href omitted', () => {
            const actual = render(
                <Links label='links-label'>
                    {TestLink}
                </Links>, { }, { xml: true })
            const expected = `
            <li>
                <span>links-label</span>
                <ol>
                    <li>
                        <a href="foo/bar.xhtml">test</a>    
                    </li>
                </ol>
            </li>
            `
            expect(actual).toEqualXML(expected)
        })

        test('nested links', () => {
            const actual = render(
                <Links label='links-label-1'>
                    <Links label='links-label-2'>
                        {TestLink}
                    </Links>
                </Links>, { }, { xml: true })
            const expected = `
            <li>
                <span>links-label-1</span>
                <ol>
                    <li>
                        <span>links-label-2</span>
                        <ol>
                            <li>
                                <a href="foo/bar.xhtml">test</a>    
                            </li>
                        </ol>
                    </li>
                </ol>
            </li>
            `
            expect(actual).toEqualXML(expected)
        })

    })

})