const configureUrl = (personalInfo, cartList, total) => {
  const listToString = cartList.map((item) => (`%0AR$ ${item.price},00  ${item.name}`))
  const phone = '557196640747';
  const name = personalInfo.name;
  const adress = personalInfo.adress;
  const totalPrice = `Total de R$ ${total},00%0A`;

  const urlToWhastApp = `https://api.whatsapp.com/send?phone=${phone}&text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20*${name}*.%0AMeu%20endere%C3%A7o%20%C3%A9%20*${adress}*.%0AGostaria%20de%20pedir%20os%20seguintes%20itens:%0A${listToString}.%0A${totalPrice}.%0AQuanto%20ficar%C3%A1%20a%20entrada%20para%20meu%20endere%C3%A7o?`;

  return urlToWhastApp;
};

export default configureUrl;

