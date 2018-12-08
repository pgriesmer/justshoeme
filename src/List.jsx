import React, {Component} from 'react';

class List extends Component {
	renderList() {
		const items = this.props.items.map(item => {
			return (
				<div className="product-container" key={item.name}>
					<div className="image-container">
						<img className="image" src={item.image} />
					</div>
					<div className="product-name">
						{item.name}
					</div>
					<div className="product-occasion">
						{item.occasion}
					</div>
					<div className="product-price">
						${item.price}
					</div>
				</div>
			);
		});
		return items;
	}
	render() {
		return (
			<div className="shoe-list">
				{this.renderList()}
			</div>
		);
	}
}

export default List;