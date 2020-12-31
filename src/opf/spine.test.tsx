import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { Spine, SpineProps } from '../index'


describe('OPF', () => {

    describe('Spine', () => {

        test('renders with items', () => {
            const props: SpineProps = {
                toc: 'ncx',
                items: [{ idref: 'foobar' }]
            }
            const actual = render(<Spine {...props} />, { }, { xml: true })
            const expected = `
            <spine toc="ncx">
                <itemref idref="foobar" /> 
            </spine>
            `
            expect(actual).toEqualXML(expected)
        })

        test('renders without items', () => {
            const props: SpineProps = {
                toc: 'ncx'
            }
            const actual = render(<Spine {...props} />, { }, { xml: true })
            const expected = `
            <spine toc="ncx" />
            `
            expect(actual).toEqualXML(expected)
        })

    })

})