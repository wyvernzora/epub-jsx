import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { Manifest, ManifestProps } from '../../src'

describe('OPF', () => {

    describe('Manifest', () => {

        test('renders with items', () => {
            const props: ManifestProps = {
                items: [{
                    id: 'test-id',
                    href: 'foo/bar.xhtml',
                    mediaType: 'application/xhtml+xml',
                    properties: 'nav',
                }]
            }
            const actual = render(<Manifest {...props} />, { }, { xml: true })
            const expected = `
            <manifest>
                <item id="test-id" href="foo/bar.xhtml" properties="nav" media-type="application/xhtml+xml" />
            </manifest>
            `
            expect(actual).toEqualXML(expected)
        })

        test('renders without items', () => {
            const actual = render(<Manifest />, { }, { xml: true })
            const expected = `
            <manifest />
            `
            expect(actual).toEqualXML(expected)
        })

    })

})
