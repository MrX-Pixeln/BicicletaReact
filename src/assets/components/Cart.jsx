import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importando o ícone do carrinho
import './Cart.css'; // CSS para o carrinho

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const items = []; // Carrinho vazio por enquanto, pode adicionar itens depois

  return (
    <div className="cart-container">
      <button
        className="cart-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Abrir carrinho"
      >
        <FaShoppingCart size={24} color="white" /> {/* Ícone do carrinho em branco */}
        <span className="cart-count">{items.length}</span> {/* Indicador de itens */}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Seu Carrinho</h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Fechar carrinho"
              className="close-button"
            >
              &times;
            </button>
          </div>

          {items.length === 0 ? (
            <p className="cart-empty">Seu carrinho está vazio</p>
          ) : (
            <>
              <ul className="cart-items">
                {/* Aqui você pode mapear os itens, por exemplo */}
              </ul>
              <div className="cart-total">
                <strong>Total:</strong>
                <strong>R$ 0,00</strong> {/* Apenas um exemplo */}
              </div>
            </>
          )}

          <button className="cart-checkout" disabled={items.length === 0}>
            Finalizar Compra
          </button> {/* Botão de checkout */}
        </div>
      )}
    </div>
  );
}
