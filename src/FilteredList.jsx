import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			occasion: "All",
			occasionBtnTitle: "Occasion",
			material: "All",
			materialBtnTitle: "Material"
		};
	}

	componentWillMount() {
		this.sortAscending();
	}

	onSearch = (event) => {
		this.setState({search: event.target.value.toLowerCase()});
	}

	sortAscending = () => {
		// const current = this.state;
		// // this.setState({products: current.products.sort((a, b) => (a.price - b.price))});
		// console.log(current.products.sort((a, b) => (a.price - b.price)));
		let items = this.props.items;
		items.sort((a,b) => a.price - b.price);
		this.forceUpdate();
	}

	sortDescending = () => {
		// const current = this.state;
		// // this.setState({products: current.products.sort((a, b) => (a.price - b.price))});
		// console.log(current.products.sort((a, b) => (a.price - b.price)));
		let items = this.props.items;
		items.sort((a,b) => b.price - a.price);
		this.forceUpdate();
	}

	filterItem = (item) => {
		if(this.state.occasion === "All" && this.state.material === "All") {
			return item.name.toLowerCase().search(this.state.search) !== -1;
		}
		else if(this.state.material === "All") {
			return item.occasion === this.state.occasion && item.name.toLowerCase().search(this.state.search) !== -1;
		}
		else if(this.state.occasion === "All") {
			return item.material === this.state.material && item.name.toLowerCase().search(this.state.search) !== -1;
		}
		else {
			return item.occasion === this.state.occasion && item.material === this.state.material && item.name.toLowerCase().search(this.state.search) !== -1;
		}
	}

	setFilterOccasionActive = () => {
		document.getElementById("occasionDropdown").style.backgroundColor = "#888";
		document.getElementById("occasionDropdown").style.color = "#fff";
	}

	setFilterOccasionInactive = () => {
		if(this.state.occasion == "All") {
			document.getElementById("occasionDropdown").style.backgroundColor = "#fff";
			document.getElementById("occasionDropdown").style.color = "#333";
		}
		else {
			document.getElementById("occasionDropdown").style.backgroundColor = "#888";
			document.getElementById("occasionDropdown").style.color = "#fff";
		}
	}

	filterOccasion = (eventKey, event) => {
		console.log(eventKey);
		this.setState({occasion: eventKey});
		if(eventKey == "All") {
			this.setState({occasionBtnTitle: "Occasion"});
			document.getElementById("occasionDropdown").style.backgroundColor = "#fff";
			document.getElementById("occasionDropdown").style.color = "#333";
		}
		else {
			this.setState({occasionBtnTitle: eventKey});
			document.getElementById("occasionDropdown").style.backgroundColor = "#888";
			document.getElementById("occasionDropdown").style.color = "#fff";
		}
	}

	setFilterMaterialActive = () => {
		document.getElementById("materialDropdown").style.backgroundColor = "#888";
		document.getElementById("materialDropdown").style.color = "#fff";
	}

	setFilterMaterialInactive = () => {
		if(this.state.material == "All") {
			document.getElementById("materialDropdown").style.backgroundColor = "#fff";
			document.getElementById("materialDropdown").style.color = "#333";
		}
		else {
			document.getElementById("materialDropdown").style.backgroundColor = "#888";
			document.getElementById("materialDropdown").style.color = "#fff";
		}
	}

	filterMaterial = (eventKey, event) => {
		console.log(eventKey);
		this.setState({material: eventKey});
		if(eventKey == "All") {
			this.setState({materialBtnTitle: "Material"})
			document.getElementById("materialDropdown").style.backgroundColor = "#fff";
			document.getElementById("materialDropdown").style.color = "#333";
		}
		else {
			this.setState({materialBtnTitle: eventKey});
			document.getElementById("materialDropdown").style.backgroundColor = "#888";
			document.getElementById("materialDropdown").style.color = "#fff";
		}
	}

	resetFilters = (eventKey, event) => {
		this.setState({occasion: "All"});
		this.setState({occasionBtnTitle: "Occasion"});
		document.getElementById("occasionDropdown").style.backgroundColor = "#fff";
		document.getElementById("occasionDropdown").style.color = "#333";
		this.setState({material: "All"});
		this.setState({materialBtnTitle: "Material"});
		document.getElementById("materialDropdown").style.backgroundColor = "#fff";
		document.getElementById("materialDropdown").style.color = "#333";
		// this.sortAscending();
		console.log(this.state.occasion);
		console.log(this.state.material);
	}

	render() {
		return (
			<div className="filter-list">
				<div className="search-container">
					<input className="search" type="text" placeholder="Search" onChange={this.onSearch} />
				</div>
				<div className="filter-container">
					<div>
						<DropdownButton className="filter" id="occasionDropdown" title={this.state.occasionBtnTitle} onMouseEnter={this.setFilterOccasionActive} onMouseLeave={this.setFilterOccasionInactive}>
							<MenuItem eventKey="All" onSelect={this.filterOccasion}>All</MenuItem>
							<MenuItem eventKey="Casual" onSelect={this.filterOccasion}>Casual</MenuItem>
							<MenuItem eventKey="Sport Casual" onSelect={this.filterOccasion}>Sport Casual</MenuItem>
							<MenuItem eventKey="Business Casual" onSelect={this.filterOccasion}>Business Casual</MenuItem>
							<MenuItem eventKey="Dress" onSelect={this.filterOccasion}>Dress</MenuItem>
						</DropdownButton>
						<DropdownButton className="filter" id="materialDropdown" title={this.state.materialBtnTitle} onMouseEnter={this.setFilterMaterialActive} onMouseLeave={this.setFilterMaterialInactive}>
							<MenuItem eventKey="All" onSelect={this.filterMaterial}>All</MenuItem>
							<MenuItem eventKey="Canvas" onSelect={this.filterMaterial}>Canvas</MenuItem>
							<MenuItem eventKey="Leather" onSelect={this.filterMaterial}>Leather</MenuItem>
							<MenuItem eventKey="Suede" onSelect={this.filterMaterial}>Suede</MenuItem>
							<MenuItem eventKey="Velvet" onSelect={this.filterMaterial}>Velvet</MenuItem>
						</DropdownButton>
						<button className="filter reset" onClick={this.resetFilters}>Reset Filters</button>
					</div>
					<div className="sort-container">
						<DropdownButton className="sort filter" id="sortDropdown" title={"Sort"}>
							<MenuItem eventKey="Ascending" onSelect={this.sortAscending}>Price, Low to High</MenuItem>
							<MenuItem eventKey="Descending" onSelect={this.sortDescending}>Price, High to Low</MenuItem>
						</DropdownButton>
					</div>
				</div>
				<List items={this.props.items.filter(this.filterItem)} />
			</div>
		);
	}
}

export default FilteredList;