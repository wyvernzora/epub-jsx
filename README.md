# EPUB JSX
Preact JSX bindings for generating files in EPUB archives.

I wrote this library to address my own need, therefore it is not intended to be a full implementation of the spec.
If you would like to collaborate and push it towards full EPUB spec compliance, I'd be happy to look at PRs.

## Setup
```shell
npm install --save epub-jsx
```

## Examples
### toc.ncx
```tsx
import { NCX, NCXProps, NavMap, NavPoint, renderToXmlString } from 'epub-jsx'

const ncx =
    <NCX id='n9669bk' title='無職転生' author='理不尽な孫の手' metadata={}>
        <NavMap>
            <NavPoint id='chapter01' playOrder={1} label='第１章　幼年期' link='chapter01/index.xhtml'>
                <NavPoint id='epusode01' playOrder={2} label='プロローグ' link='chapter01/episode01.xhtml' />
            </NavPoint>
        </NavMap>
    </NCX>

renderToXmlString(ncx) // Generates toc.ncx contents
```

### package.opf
```tsx
import { OPF, renderToXmlString } from 'epub-jsx'

const opf =
    <OPF
        metadata={{
            id: 'n9669bk',
            title: '無職転生',
            author: '理不尽な孫の手',
            updatedAt: new Date(),
            language: 'ja_JP'
        }}
        manifest={{
            items: [
                { id: 'toc', href: 'toc.xhtml', mediaType: 'application/xhtml+xml', properties: 'nav' },
                { id: 'chapter01', href: 'chapter01/index.xhtml', mediaType: 'application/xhtml+xml' },
                { id: 'episode01', href: 'chapter01/episode01.xhtml', mediaType: 'application/xhtml+xml' }
            ]
        }}
        spine={{
            items: [
                { idref: 'toc' },
                { idref: 'chapter01' },
                { idref: 'episode01' }
            ]
        }}
        guide={{
            references: [{ type: 'toc', title: 'Table of Contents', href: 'toc.xhtml' }]
        }}
    />

renderToXmlString(opf) // Generates package.opf contents
```

### toc.xhtml

```tsx
import { TableOfContents, Links, Link, renderToXhtmlString } from 'epub-jsx'

const toc =
    <TableOfContents className='toc__wrapper'>
        <Links label='第１章　幼年期' href='chapter01/index.xhtml'>
            <Link label='プロローグ' href='chapter01/episode01.xhtml' />
        </Links>
    </TableOfContents>

renderToXhtmlString(toc) // Generates toc.xhtml contents
```

### General XHTML file
```tsx
import { Xhtml, renderToXhtmlString } from 'epub-jsx'

const pageWithPreactContent =
    <Xhtml title='プロローグ' language='ja_JP' stylesheets={[ '../../styles.css' ]}>
        <h1>プロローグ</h1>
        <p>...</p>
    </Xhtml>

renderToXhtmlString(pageWithPreactContent)

const pageWithStringContent =
    <Xhtml title='プロローグ' language='ja_JP' stylesheets={[ '../../styles.css' ]}>
        {'<h1>プロローグ</h1><p>...</p>'}
    </Xhtml>

renderToXhtmlString(pageWithStringContent)
```

## License
MIT