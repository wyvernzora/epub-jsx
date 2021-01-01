import 'jest-xml-matcher'
import { Guide, GuideProps } from '../../src'
import render from 'preact-render-to-string'

describe('OPF', () => {

    describe('Guide', () => {

        test('renders with reference items', () => {
            const props: GuideProps = {
                references: [{
                    type: 'cover',
                    title: 'test',
                    href: 'foo/bar.xhtml'
                }]
            }
            const actual = render(<Guide {...props} />, { }, { xml: true })
            const expected = `
            <guide>
                <reference type="cover" title="test" href="foo/bar.xhtml" />
            </guide>
            `
            expect(actual).toEqualXML(expected)
        })

        test('renders without reference items', () => {
            const actual = render(<Guide />, { }, { xml: true })
            const expected = `
            <guide />
            `
            expect(actual).toEqualXML(expected)
        })

    })

})