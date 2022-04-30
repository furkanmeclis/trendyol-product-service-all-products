import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import PaginationComponent from './PaginationComponent';
export default function App({apiKey,supplierId}) {
  const [edit,setEdit] = React.useState(false);
  const [editData,setEditData] = React.useState({});
  const [loading,setLoading] = React.useState(true);
  const [page,setPage] = React.useState(0);
  const [totalPage,setTotalPage] = React.useState(0);
  const [products,setProducts] = React.useState(null);
  React.useEffect(() => {
    if(products === null){
      
    }
  });
  React.useEffect(() => {
    setLoading(true)
    fetch(`https://app.myeasytrades.com/api/trendyol/products/${apiKey}/${supplierId}/${page}`).then(r => r.json())
      .then(data => {
        setProducts(data.content);
        setTotalPage(data.totalPages);
        setLoading(false);
      });
  },[page]);
  return (
    <>
      {loading ? 'Yükleniyor':<div className="row">
        {products.map((product,i) => {
          return <ProductCard key={i} product={product} setEdit={setEdit} setEditData={setEditData} />;
        })}
        <PaginationComponent page={page} setPage={setPage} totalPage={totalPage} />
      </div>}
    </>
  );
}
