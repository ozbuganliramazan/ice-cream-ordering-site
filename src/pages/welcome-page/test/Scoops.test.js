import { findByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Scoops from "../scoops";

test("Apı den gelen her çeşit verisi için ekrana resim basar", async () => {
  render(<Scoops />);

  const resimler = await screen.findAllByRole("img", { name: /cesit/i });
  expect(resimler).toHaveLength(4);
});
test("Çeşit ekleme işlemi", async () => {
  const user = userEvent.setup();
  render(<Scoops />);

  // sepet 0 başlar
  const cesitlerFiyat = screen.getByTestId("ucret");
  expect(cesitlerFiyat).toHaveTextContent("0");

  //bütün butonları seştik
  const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole(
    "button",
    { name: "Ekle" }
  );
  //sepete çikltalı ekler
  await user.click(choBtn);

  //sepetin durumu
  expect(cesitlerFiyat).toHaveTextContent("3");
});

test("sıfırlama işlemi", async () => {
  const user = userEvent.setup();
  render(<Scoops />);
//butonları seçip test
  const [mintBtn, vanillaBtn, choBtn, caramelBtn] = await screen.findAllByRole(
    "button",
    { name: "Ekle" }
  );

  await user.dblClick(caramelBtn);


  // toplam ücret 
  const ucret = screen.getByTestId('ucret');

  expect(ucret).toHaveTextContent("6");


// sıfırlama işlemi için 
const [delMint, delVanilla, delCho, delCaramel] = await screen.findAllByRole(
  'button',
  { name: /sıfırla/i }
);
await user.click(delCaramel);
expect(ucret).toHaveTextContent("0")

});
