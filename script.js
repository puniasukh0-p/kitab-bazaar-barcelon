function orderNow(bookName) {
    const phone = "+34632718785"; // 
    const message = "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਖਰੀਦਣਾ ਚਾਹੁੰਦਾ ਹਾਂ: " + bookName;
    window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message));
}
