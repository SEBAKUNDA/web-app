import React, { Component } from "react";
import JsonData from "./data.json";
class Countries extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      getdata:''
    };
  }
   componentDidMount() {
    this.setState({data:JsonData})
  }
  searchdata=(event)=>{
    const getdata=event.target.value.toLowerCase()
    this.setState({getdata:getdata})
  
  }
  

  render() {
  const filtereddata=JsonData.filter((jsonItem)=>(
   jsonItem.name.toLocaleLowerCase().includes(this.state.getdata)
  ))

    return( <div className='grid grid-cols-4   justify-end p-9 w-full mt-8'>
      {console.log(this.state.getdata)}
      <div>
     <input type='text' placeholder="search....." className='h-6' onChange={this.searchdata} />
     
     </div>
      {filtereddata.map((dataitem)=>(
      
        <div className='bg-slate-600'>
       <img src={dataitem.flag} className='h-20 p-3 '></img>
          <p>{dataitem.name}</p>
          <p>population:{dataitem.population}</p>
          <p>region:{dataitem.region}</p>
          <p>capital:{dataitem.capital}</p>
          
        </div>
      ))}
    </div>)
  }
}
export default Countries;
