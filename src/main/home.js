import React,{Component} from 'react';
import axios from 'axios';

class Home extends Component{
    state = {
        dataLoaded: 'i am boss',
        orderData:'',
        deleted:'',
    }
  
    delivered = (event) =>{
        axios.post(`http://localhost:8080/api/vegetable/completedOrder/deleteDeliveredVegetableProduct/${event.target.value}`)
        .then(res=>{
            if(res)this.setState({dataLoaded:'i am boss',deleted:'Item successfully delivered!'})
        })
        .catch(e=>console.log(e));
    }
    renderData = () => {
        if(this.state.dataLoaded==='i am boss')
        axios.get(`http://localhost:8080/api/dp/orders/ordersList`).then(res => {
            if(res.data)this.setState({dataLoaded:'noooo'});
            if(res.data){
                this.setState({orderData:res.data});  
                console.log(res.data);
            }
        }).catch(e=>console.log(e));
        if(this.state.orderData){
            return(this.state.orderData.map((d)=>
            <div key = {d._id}>
            <div>
                Item Name - {d.productName}
            </div>
            <div>
               Item Price - {d.productPrice}/Unit
            </div>
            <div>
                Ordered Quantity - {d.productQuantity} Unit
            </div>
            <div>
                Delivery Address - {d.deliveryAddress}
            </div>
            <div>
                Customer Mob No - {d.customerMobileNo}
            </div>
            <div style={{color:'red'}}>
                Total Billing Amount - {d.totalBillingAmount}
            </div>
            <div style={{color:'green'}}>
                Time of Order - {d.timeOfOrder}
            </div>
            <div style={{color:'red'}}>
                <input type="button" className="btn btn-outline-danger" name="deliveredItem" value={d._id} readOnly="true"
                onClick={this.delivered}
                />
            </div>
            <hr/>
            </div>
            ))
        }
    
    }

    

    render(){
        
        return(
            <div>
            <h1>Home</h1>
            <div>
           
           {this.renderData()}
            </div>
            </div>
        )
    }
}

  export default Home;