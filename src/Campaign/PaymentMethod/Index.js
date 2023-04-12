import React from "react";
import styles from "../campaign.scss";

export const PaymentMethod = ({
  className,
  campPaymentTitle,
  addBtn,
  cardList,
}) => {
  return (
    <React.Fragment>
      <div className={styles.create_camp_main_container + " " + className}>
        {/* Create React Campaign Library Example 😄 */}
        {campPaymentTitle && (
          <p className={styles.card_payment_title}>{campPaymentTitle}</p>
        )}
        {addBtn && <button className={styles.card_create_btn}>{addBtn}</button>}

        <div className={styles.adv_card_list_contaier}>
          {cardList &&
            cardList?.map((item, i) => {
              return (
                <div className={styles.adv_card_list_containt} key={i}>
                  <div className={styles.adv_card_number_section}>
                    <div className={styles.adv_card_number}>
                      {/* {item?.card_type === "visa" ? (
                        <VisaIcon className="adv-card-icon" />
                      ) : item?.card_type === "mastercard" ? (
                        <MasterCardIcon className="adv-card-icon" />
                      ) : item?.card_type === "amex" ? (
                        <AmericanIcon className="adv-card-icon" />
                      ) : item?.card_type === "jcb" ? (
                        <JCBIcon className="adv-card-icon" />
                      ) : item?.card_type === "discover" ? (
                        <DiscoverIcon className="adv-card-icon" />
                      ) : item?.card_type === "unionpay" ? (
                        <CUPIcon className="adv-card-icon" />
                      ) : (
                        ""
                      )} */}
                      **** {item?.last_four}
                    </div>
                    <p
                      className={styles.pointer}
                      // onClick={(e) => handleOpenMenu(e, item)}
                    >
                      ...
                    </p>
                  </div>
                  <p className={styles.adv_card_exp_date}>
                    Expiry: {item?.exp_date}
                  </p>
                  {item?.make_default && (
                    <p className={styles.adv_card_default}>Default Card</p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};
