import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget }      from 'react-dnd';

const ItemTypes = {
    FILTER: 'filter'
};

const filterSource = {
    beginDrag(props) {
        return {
            id: props.id
        };
    },

    endDrag(props, monitor) {
        const item       = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            if (item.id !== dropResult.id) {
                props.onFilterDrop(item.id, dropResult.id);
            }
        }
    }
};

const filterTarget = {
    hover(props, monitor) {
        const draggedId = monitor.getItem().id;
        if (draggedId !== props.id) {
            //props.moveFilter(draggedId, props.id);
        }
    },

    drop(props) {
        return { id: props.id };
    }
};

function collectDrag(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging:        monitor.isDragging()
    }
}

function collectDrop(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

class Filter extends Component {
    render() {
        const { isDragging, connectDragSource, connectDropTarget } = this.props;

        return connectDragSource(connectDropTarget(
            <div>
                {this.props.children}
            </div>
        ));
    }
}

Filter.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging:        PropTypes.bool.isRequired,
    onFilterDrop:      PropTypes.func.isRequired,
    onFilterMove:      PropTypes.func.isRequired
};

export default DragSource(ItemTypes.FILTER, filterSource, collectDrag)(DropTarget(ItemTypes.FILTER, filterTarget, collectDrop)(Filter));
