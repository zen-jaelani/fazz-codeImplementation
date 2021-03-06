fazzFood(75000, "FAZZFOOD50", 5, true);

function fazzFood(harga, voucher, jarak, pajak) {
    const diskon = cekDiskon(harga, voucher);
    const ongkir = cekOngkir(jarak);
    const tax = cekPajak(pajak, harga);
    const total = harga - diskon + ongkir + tax;
    console.log(`
        Harga       = ${harga}
        Potongan    = ${diskon}
        Biaya antar = ${ongkir}
        Pajak       = ${tax}
        SubTotal    = ${total}
    `);
}

function cekDiskon(harga, voucher) {
    let diskon = 0;
    if (voucher === "FAZZFOOD50" && harga >= 50000) {
        diskon = 0.5 * harga;
        diskon =
            diskon > 50000
                ? 50000
                : diskon;
    } else if (voucher === "DITRAKTIR60" && harga >= 25000) {
        diskon = 0.6 * harga;
        diskon =
            diskon > 30000
                ? 30000
                : diskon;
    }
    return diskon;
}
function cekOngkir(jarak) {
    return jarak > 2
        ? 5000 + 3000 * (jarak - 2)
        : 5000;
}
function cekPajak(pajak, harga) {
    return pajak
        ? 0.05 * harga
        : 0;
}
