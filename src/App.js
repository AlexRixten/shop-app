import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items"
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'https://kompleksbar.ru/image/cache/catalog/klenmarket/ctulya-s-derevyannim-karkasom/stul-gl591c-s-pugovicami-s-myagkim-sidenem-%28derevyannij-karkas%29-500x500.jpg',
          descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '49,99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'https://tekomebel.ru/image/cache/catalog/images-for-tovary/stolyzhurnalnye/stolzhurnalnyj5n900-550-500x500.jpg',
          descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'tables',
          price: '100.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'https://toriani.ru/upload/resize_cache/iblock/f44/250_250_1/f44f9d9bba41f7db0c8e5575b6a458dd.jpg',
          descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'sofas',
          price: '149.99'
        },
        {
          id: 4,
          title: 'Кресло',
          img: 'https://avatars.mds.yandex.net/get-mpic/1927699/img_id4967958577305889851.jpeg/9hq',
          descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'armchairs',
          price: '150.00'
        },
        {
          id: 5,
          title: 'Софа',
          img: 'https://litbimg.rightinthebox.com/images/500x500/201907/bkcchd1564145077394.jpg',
          descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'sofas',
          price: '249.99'
        },
        {
          id: 6,
          title: 'Кровать',
          img: 'https://avatars.mds.yandex.net/i?id=a2b406f83efd25829c06ce2c5b30ddaa-5316645-images-thumbs&n=13&exp=1',
          descr: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'beds',
          price: '349.99'
        },
      ],
      showFullItem: false,
      fullItem:{},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/> }
        <Footer />
      </div>
    )
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
  }

  deleteOrder(id) {
    this.setState({orders:this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      this.setState({orders:[...this.state.orders,item]})
    }
  }
}

export default App;
