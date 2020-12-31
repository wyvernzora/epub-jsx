import 'jest-xml-matcher'
import { render } from 'preact-render-to-string'
import { Xhtml } from './index'


describe('XHTML', () => {

    test('renders with JSX children', async () => {
        const props = {
            title: 'test',
            language: 'x',
            stylesheets: []
        }
        const actual = render(<Xhtml {...props}><div/></Xhtml>, null, { xml: true })
        const expected = `
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="x" xml:lang="x">
            <head>
                <title>test</title>
            </head>
            <body>
                <div />
            </body>
        </html>
        `
        expect(actual).toEqualXML(expected)
    })

    test('renders with inner HTML string', async () => {
        const props = {
            title: 'test',
            language: 'x',
            stylesheets: []
        }
        const actual = render(<Xhtml {...props}>{'inner-html'}</Xhtml>, null, { xml: true })
        const expected = `
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="x" xml:lang="x">
            <head>
                <title>test</title>
            </head>
            <body>inner-html</body>
        </html>
        `
        expect(actual).toEqualXML(expected)
    })

    test('adds stylesheet links if specified', async () => {
        const props = {
            title: 'test',
            language: 'x',
            stylesheets: ['foo/bar.css']
        }
        const actual = render(<Xhtml {...props}>{'inner-html'}</Xhtml>, null, { xml: true })
        const expected = `
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="x" xml:lang="x">
            <head>
                <title>test</title>
                <link rel="stylesheet" href="foo/bar.css" />
            </head>
            <body>inner-html</body>
        </html>
        `
        expect(actual).toEqualXML(expected)
    })

})
