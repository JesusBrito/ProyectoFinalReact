import styles from "./styles.module.scss"
const CartWidget = ({ numberProducts }) => {
  return (
    <div>
      <i class="fa-solid fa-cart-shopping" />
      <span className={styles.badgeCart}>{numberProducts}</span>
    </div>
  );
};

export default CartWidget;
