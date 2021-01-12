console.log("SOAL 1--");

var nama = "Junaedi";
var peran = "Werewolf";

if (nama == "" && peran == "") {
    console.log('Nama harus diisi!');
}

else if (nama == "John" && peran == "") {
    console.log('Halo John, pilih peranmu untuk memulai game!')
}

else if (nama == "Jane" && peran == "Penyihir") {
    console.log('Selamat datang di Dunia Werewolf, Jenita');
    console.log('Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.');
}

else if (nama == "Junaedi" && peran == "Werewolf") {
    console.log('Selamat datang di Dunia Werewolf, Junaedi');
    console.log('Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!');
}

console.log("---------------------------------------------------------");

// var hari = 21; 
// var bulan = 1; 
// var tahun = 1945;
// //  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 

var tanggal = 31;
var bulan = 10;
var tahun = 1992

if (tanggal<1 || tanggal >31)
  {
  console.log("date range 1-31");
  
  }

  else if (bulan<1 || bulan >12)
  {
  console.log("month range 1-12");
  
  }

  else if (tahun<1900  || tahun >2200)
  {
  console.log("year range 1900-2200");
  
  }
  else{


switch (bulan) {
    case 1: {
        bulan = "januari";
        break;
    }
    case 2: {
        bulan = "Ferbuari";
        break;
    }
    case 3: {
        bulan = "maret";
        break;
    }
    case 4: {
        bulan = "april";
        break;
    }
    case 5: {
        bulan = "mei";
        break;
    }
    case 6: {
        bulan = "juni";
        break;
    }
    case 7: {
        bulan = "juli";
        break;
    }
    case 8: {
        bulan = "agustus";
        break;
    }
    case 9: {
        bulan = "september";
        break;
    }
    case 10: {
        bulan = "oktober";
        break;
    }
    case 11: {
        bulan = "november";
        break;
    }
    case 12: {
        bulan = "desember";
        break;
    }
    default: {
        console.log('Range bulan 1 - 12 saja');
    }
}

var space = " ";
console.log("Tanggal".concat(space, tanggal, space, bulan, space, tahun));
  }