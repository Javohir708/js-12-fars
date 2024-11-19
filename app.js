// 1 -masala array ichidagi faqat musbat sonlarni yangi array qilib qaytaring
{
    let musbat = [2, -4, 8, -10]

    let result = []
    for (let n of musbat){
        if (n >= 0) {
            result.push(n)
        } 
    }
    console.log(result);
}

// 2 -masala Stringni faqat bosh harflarini katta qiladigan funksiya tuzing.
{
    function ismingiz (ism) {
        let boshHarf = ism.charAt(0).toUpperCase();
        let qolgani = ism.slice(1);
        let result = boshHarf + qolgani

        console.log(result);
        
    }
    ismingiz('javohir')   
}

// 3 -sonni teskari tartibda qaytaradigan funksiya yozing

// 4- Array ichida Boolean qiymatlari bor. shuni faqat 'False'larini yangi array qilib qaytaring

{
    let Boolean = [true, false, false, true]
    let result = [];
    
        for (let n of Boolean) {
            if (n === false) {
                result.push(n);
            }
        }
        console.log(result);
}

// 5 -array ichidagi musbat sonlar yig'inidisini qaytaring.
{
    let array = [10, -5, 7, -8]
    
    let result = 0
    for (let n of array) {
        if (n >= 0) {
            result += n
        }
    }
    console.log(result);
}