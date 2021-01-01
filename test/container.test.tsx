import 'jest-xml-matcher'
import { render } from 'preact-render-to-string'
import { Container } from '../src'


describe('container.xml', () => {

    test('renders with OPF file path', () => {
        const props = {
            rootfiles: [{
                path: 'foo.xml',
                mediaType: 'application/xml',
            }]
        }
        const actual = render(<Container {...props} />, null,{ xml: true })
        const expected = `
        <container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
            <rootfiles>
                <rootfile full-path="foo.xml" media-type="application/xml" />
            </rootfiles>
        </container>
        `
        expect(actual).toEqualXML(expected)
    })

})
