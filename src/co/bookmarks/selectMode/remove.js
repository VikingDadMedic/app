import React from 'react'
import t from '~t'
import { connect } from 'react-redux'
import { removeSelected } from '~data/actions/bookmarks'

import Button from '~co/common/button'
import Icon from '~co/common/icon'

class BookmarksHeaderSelectModeRemove extends React.Component {
    static defaultProps = {
        selectMode: {}
    }

    onRemoveClick = (e)=>{
        e.preventDefault()
        if (!confirm(t.s('areYouSure'))) return

        this.props.removeSelected(this.props.selectMode.spaceId)
    }

    render() {
        return (
            <Button onClick={this.onRemoveClick}>
                <Icon name='trash' />
                
                <span className='hide-on-small-body'>
                    {t.s('remove')}
                </span>
            </Button>
        )
    }
}

export default connect(
	undefined,
	{ removeSelected }
)(BookmarksHeaderSelectModeRemove)