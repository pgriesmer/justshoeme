import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';
import FilteredList from './FilteredList';

const shoes = [
  {name: "Bean Boot", occasion: "Casual", material: "Canvas", image: "/beanboot.jpeg", price: 149},
  {name: "Vans", occasion: "Casual", material: "Canvas", image: "/vans.jpeg", price: 65},
  {name: "Jack Purcell", occasion: "Casual", material: "Leather", image: "/jackpurcell.jpeg", price: 40},
  {name: "Boat Shoe", occasion: "Casual", material: "Leather", image: "/boatshoe.jpeg", price: 95},
  {name: "Penny Loafer", occasion: "Sport Casual", material: "Leather", image: "/pennyloafer.jpeg", price: 402},
  {name: "Chelsea Boot", occasion: "Sport Casual", material: "Leather", image: "/chelseaboot.jpeg", price: 314},
  {name: "Tassel Loafer", occasion: "Business Casual", material: "Leather", image: "/tasselloafer.jpeg", price: 425},
  {name: "Double Monk", occasion: "Business Casual", material: "Leather", image: "/monk.jpeg", price: 282},
  {name: "Jodphur Boot", occasion: "Business Casual", material: "Suede", image: "/jodphurboot.jpeg", price: 627},
  {name: "Wingtip Brogue", occasion: "Business Casual", material: "Leather", image: "/wingtip.jpeg", price: 140},
  {name: "Wholecut Oxford", occasion: "Dress", material: "Leather", image: "/oxford.jpeg", price: 80},
  {name: "Slipper", occasion: "Dress", material: "Velvet", image: "/slipper.jpeg", price: 84}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FilteredList items={shoes} />
      </div>
    );
  }
}

export default App;
