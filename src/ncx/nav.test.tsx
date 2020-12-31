import 'jest-xml-matcher'
import render from 'preact-render-to-string'
import { NavMap, NavPoint } from '../index'

describe('NCX', () => {

    describe('NavMap / NavPoint', () => {

        test('correctly renders with single level of nav points', () => {
            const actual = render(<NavMap>
                <NavPoint id='test-id' playOrder={42} label='display-name' link='foo/bar.xhtml'/>
            </NavMap>, {}, {xml: true})
            const expected = `
            <navMap>
                <navPoint id="test-id" playOrder="42">
                    <navLabel>
                        <text>display-name</text>
                    </navLabel>
                    <content src="foo/bar.xhtml" />
                </navPoint>
            </navMap>
            `
            expect(actual).toEqualXML(expected)
        })

        test('correctly renders with nested nav points', () => {
            const actual = render(<NavMap>
                <NavPoint id='test-01' playOrder={1} label='display-01' link='foo/01.xhtml'>
                    <NavPoint id='test-02' playOrder={2} label='display-02' link='foo/02.xhtml'/>
                </NavPoint>
            </NavMap>, {}, {xml: true})
            const expected = `
            <navMap>
                <navPoint id="test-01" playOrder="1">
                    <navLabel>
                        <text>display-01</text>
                    </navLabel>
                    <content src="foo/01.xhtml" />
                    <navPoint id="test-02" playOrder="2">
                        <navLabel>
                            <text>display-02</text>
                        </navLabel>
                        <content src="foo/02.xhtml" />
                    </navPoint>
                </navPoint>
            </navMap>
            `
            expect(actual).toEqualXML(expected)
        })

    })

})