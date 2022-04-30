import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
export default function ProductCard({ product }) {
  const [priceModal,setPriceModal] = useState(false);
  const [stockModal,setStockModal] = useState(false);
  const PriceModal = () => {
    const savePrice = () => {
      fetch();
    }
    return <>
    <Modal show={priceModal}>
      <Modal.Header>
        <Modal.Title>{product.title} Adlı Ürünün Fiyatını Güncelleyin</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={e => setPriceModal(!priceModal)}>Vazgeç</button>
        <button className="btn btn-primary" onClick={savePrice}>Kaydet</button>
      </Modal.Footer>
    </Modal>
    </>
  }
  return (
    <>
      <div className="col-md-4">
        <div class="card shadow-sm mb-3">
          <img
            class="bd-placeholder-img card-img-top"
            src={product.images[0].url}
          />
          <div class="card-body">
            <p class="card-text">
              <h4>{product.title}</h4>
              <p>
                Ürün Durumu: {product.approved ? 'Onaylı' : 'Onaysız'}
                <br />
                Satış Durumu: {product.onSale ? 'Satışta' : 'Satışta Değil'}
                <br />
                Satış Fiyatı: {product.salePrice}TRY
                <br />
                Liste Fiyatı: {product.listPrice}TRY
                <br />
                Fiyat Güncellenme Tarihi:{' '}
                {new Date(product.lastPriceChangeDate).toLocaleString()}
                <br />
                Stok Güncellenme Tarihi:{' '}
                {new Date(product.lastStockChangeDate).toLocaleString()}
                <br />
                Stok Adedi: {product.quantity} {product.stockUnitType}
              </p>
            </p>
            <PriceModal />
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" onClick={e => setPriceModal(!priceModal)} class="btn btn-sm btn-outline-primary">
                  <i className="fa fa-money-check-dollar"></i> Fiyat Güncelle
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  <i className="fa fa-cubes"></i> Stok Güncelle
                </button>
                <button className="btn btn-sm btn-outline-warning">
                  <i className="fa fa-pen"></i> Düzenle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
