import React from 'react'
import t from '~t'

import { Header } from '~co/screen/splitview/reader'
import Button from '~co/common/button'
import Icon from '~co/common/icon'
import Tabs from '~co/common/tabs'
import Settings from './settings'

const defaultTabs = [
    {
        key: 'edit',
        title: t.s('editMin'),
        icon: 'edit'
    },
    {
        key: 'preview',
        title: t.s('preview'),
        icon: 'show'
    },
    {
        key: 'cache',
        title: t.s('permanentCopy'),
        icon: 'cloud'
    }
]

export default class ReaderHeader extends React.PureComponent {
    onImportantClick = (e)=>{
        e.preventDefault()
        this.props.actions.oneImportant(this.props.item._id)
    }

    onRemoveClick = (e)=>{
        e.preventDefault()
        this.props.actions.oneRemove(this.props.item._id)
    }

    render() {
        const { item, tab, tabs, access } = this.props
        const { setTab, onBackClick, onFullscreenToggleClick } = this.props

        return (
            <Header
                onBackClick={onBackClick}
                onFullscreenClick={onFullscreenToggleClick}>
                <Settings
                    tab={tab} />

                <div className='maxCenter'>
                    <Tabs
                        items={defaultTabs.filter(({key})=> tabs.includes(key) )}
                        active={tab}
                        onChange={setTab}
                        className='hide-on-clipper' />
                </div>
        
                <Button href={item.link} target='_blank' className='hide-on-extension' title={t.s('open')}>
                    <Icon name='open' />
                </Button>
				
                {access.level >= 3 ? (
                    <>
                        <Button variant={item.important ? 'link' : ''} onClick={this.onImportantClick}  title={t.s('add') +' ' + t.s('to') + ' ' + t.s('favoriteSites').toLowerCase()}>
                            <Icon name={'like'+(item.important ? '_active' : '')} />
                        </Button>
                        <Button title={t.s('remove')} onClick={this.onRemoveClick}>
                            <Icon name='trash' />
                        </Button>
                    </>
                ) : null}
            </Header>
        )
    }
}