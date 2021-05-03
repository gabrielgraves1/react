import items from './Items.js'
import {useState} from 'react'

    function ItemsList() {

      var [page, setPage] = useState(0)

      var pages=items

function nextPage () {
  if(page == pages.length) {
    return;
  }
  setPage(page + 1)
}

      return (
  <>

        <p>Mostrando {page+1} de {pages.lenght}</p>

    <div className="App-items-list">
      
    {
      pages[page].map(function (dato) {
        return<div className="App-item" key={dato.id}>
          <img src={dato.image}/>
          {dato.title} 
          </div>
      })
    }

    </div>
    <button onclick={()=>setPage(0)}>
      Primera página
    </button>

    <div>
      <button className="App-items-pagination" onClick={nextPage}>Ver más productos</button>
    </div>

    <button button onclick={()=>setPage(pages.lenght-1)}>
      Última página
    </button>
    </>
    )
    
  }

    export default ItemsList