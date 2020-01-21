import React from 'react';
import './Business.css';




class Business extends React.Component {

    handleClick(latitude, longitude) {
        window.open(`http://maps.google.com/maps?z=12&t=m&q=loc:${latitude}+${longitude}`);
    }

    handleImageClick(url) {
        window.open(url);
    }

    
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.businessEntity.imageSrc} alt='' onClick={this.handleImageClick.bind(this, this.props.businessEntity.url)}/>
                </div>
                <h2>{this.props.businessEntity.name}</h2>
                <div className="Business-information">
                    <div className="Business-address" onClick={this.handleClick.bind(this, this.props.businessEntity.latitude, this.props.businessEntity.longitude)}>
                        <p>{this.props.businessEntity.address}</p>
                        <p>{this.props.businessEntity.city}</p>
                        <p>{this.props.businessEntity.state} {this.props.businessEntity.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.props.businessEntity.category}</h3>
                        <h3 className="rating">{this.props.businessEntity.rating}</h3>
                        <p>{this.props.businessEntity.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;


