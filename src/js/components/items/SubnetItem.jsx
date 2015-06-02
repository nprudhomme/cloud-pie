import React      from 'react';
import Properties from './ItemProperties.jsx';

export default React.createClass({
    displayName: 'SubnetItem',

    render() {
        var data = this.props.data;

        return (
            <div>
                <h3 className="item-info__id">{ data.tags.name || data.id }</h3>
                <h4 className="item-info__type">subnet</h4>
                <Properties properties={{
                    id:        data.id,
                    state:     data.state,
                    zone:      data.zone,
                    cidrBlock: data.cidrBlock
                }}/>
                <Properties properties={data.tags}/>
            </div>
        );
    }
});
