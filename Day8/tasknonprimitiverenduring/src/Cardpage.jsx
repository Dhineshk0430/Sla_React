

const Cardpage = ({ product }) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 bg-blue-400 p-5">
        {product.map((arrobj, i) => (
          <div key={i} className="h-70 w-50 bg-amber-50 p-10">
            <img src={arrobj.img} className="h-30 w-30 object-contain" />
            <h1 className="font-bold">{arrobj.name}</h1>
            <h2>{arrobj.price}</h2>
            <p>{arrobj.feature}</p>
          </div>

        )
        
        )}
      </div>

    </div>
  )
}

export default Cardpage
