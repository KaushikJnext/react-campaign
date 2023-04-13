import React, { useState } from "react";
import styles from "../campaign.scss";
import { Dialog } from "../../UI/DialogBox/Dialog";
import InputForm from "../InputForm";

export const PaymentMethod = ({
  className,
  campPaymentTitle,
  addBtn,
  cardList,
  content,
  fields,
  handleSubmit,
  handleDeleteCard,
}) => {
  const [open, setOpen] = useState(false);
  const [fieldValue, setFieldValue] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setIsDelete(false);
    setIsEdit(false);
    setFieldValue({});
  };

  const handleEdit = (item) => {
    setOpen(true);
    setIsEdit(true);
    setFieldValue(item);
  };

  const handleDelete = (item) => {
    setOpen(true);
    setIsDelete(true);
    setFieldValue(item);
  };
  return (
    <React.Fragment>
      <div className={styles.create_camp_main_container + " " + className}>
        {/* Create React Campaign Library Example 😄 */}
        {campPaymentTitle && (
          <p className={styles.card_payment_title}>{campPaymentTitle}</p>
        )}
        {addBtn && (
          <button className={styles.card_create_btn} onClick={handleDialogOpen}>
            {addBtn}
          </button>
        )}

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
                      {item?.card_no}
                    </div>
                    <p className={styles.card_list_menu_btn}>
                      <span onClick={(e) => handleEdit(item)}>&#x270E;</span>
                      <span onClick={(e) => handleDelete(item)}>&#x1F5D1;</span>
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
        {content && content}
      </div>
      {open && (
        <Dialog className={styles.add_card_dialog} onClose={handleDialogClose}>
          <div className={styles.add_card_container}>
            <div className={styles.add_card_dialog_title}>
              <p className={styles.add_card_title_text}>
                {isDelete ? "Delete Card" : isEdit ? "Edit Card" : "Add Card"}
              </p>
              <span
                className={styles.add_card_dialog_close}
                onClick={handleDialogClose}
              >
                &#x2715;
              </span>
            </div>
            {!isDelete ? (
              <form
                onSubmit={(e) => {
                  handleSubmit(e, fieldValue);
                  handleDialogClose();
                }}
              >
                <InputForm
                  fields={fields}
                  fieldValue={fieldValue}
                  setFieldValue={setFieldValue}
                />
                <div>
                  <button
                    style={{ width: "100%" }}
                    className={styles.camp_submit_btn}
                    type="submit"
                  >
                    {isEdit ? "Edit Card" : "Add Card"}
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.dialog_content}>
                <p className={styles.dialog_content_msg}>
                  Are you sure to delete this card?
                </p>
                <div className={styles.summary_btn_content}>
                  <button
                    className={styles.b_btn_blue}
                    onClick={() => handleDialogClose()}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.btn_blue}
                    onClick={() => {
                      handleDeleteCard(fieldValue);
                      handleDialogClose();
                    }}
                  >
                    Okay
                  </button>
                </div>
              </div>
            )}
          </div>
        </Dialog>
      )}
    </React.Fragment>
  );
};
