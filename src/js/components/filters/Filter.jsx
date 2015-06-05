import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget }      from 'react-dnd';

const ItemTypes = {
    FILTER: 'filter'
};

const filterSource = {
    beginDrag(props) {
        return {
            uid:      props.uid,
            position: props.position
        };
    },

    endDrag(props, monitor) {
        const item       = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            if (item.uid !== dropResult.uid) {
                props.onDrop(item.position, dropResult.position);
            }
        } else {
            props.onAbortedDrop();
        }
    }
};

const filterTarget = {
    hover(props, monitor) {
        const item = monitor.getItem();
        if (item.uid !== props.uid) {
            props.onMove(item.position, props.position);
        }
    },

    drop(props) {
        return {
            uid:      props.uid,
            position: props.position
        };
    }
};

function collectDrag(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging:        monitor.isDragging()
    };
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

class Filter extends Component {
    render() {
        const { isDragging, connectDragSource, connectDropTarget, cssClasses } = this.props;

        var classes = `filter__dnd ${ isDragging ? '_is-dragging' : '' } ${ cssClasses }`;

        return connectDragSource(connectDropTarget(
            <div className={classes}>
                {this.props.children}
            </div>
        ));
    }
}

Filter.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging:        PropTypes.bool.isRequired,
    onMove:            PropTypes.func.isRequired,
    onDrop:            PropTypes.func.isRequired,
    onAbortedDrop:     PropTypes.func.isRequired,
    cssClasses:        PropTypes.string.isRequired
};

export default DragSource(ItemTypes.FILTER, filterSource, collectDrag)(DropTarget(ItemTypes.FILTER, filterTarget, collectDrop)(Filter));
