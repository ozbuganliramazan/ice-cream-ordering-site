import {  render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderForm from "../OrderForm";

test("checboxxa tıklandığında buton aktif olur", async () => {
    //PROMİSE
    const user = userEvent.setup();
    //VDOM - Virtual DOM
    render(<OrderForm />);
  
    //Elemanları aldık
    const termsCheck = screen.getByRole('checkbox', {
      name: /Kosulları okudum ve kabul ediyorum/i, //insensetive
    });
    const orderBtn = screen.getByRole('button', { name: 'Siparişi Onayla' });
  
    //buton inaktif tir
    expect(termsCheck).not.toBeChecked();
    expect(orderBtn).toBeDisabled();
  
    //sözeleşmeleri kabul eder
    await user.click(termsCheck);
    expect(orderBtn).toBeEnabled();
  
    //tekrar inaktif olur
    await user.click(termsCheck);
    expect(orderBtn).toBeDisabled(); //MATCHERS (eşletirci)
  });