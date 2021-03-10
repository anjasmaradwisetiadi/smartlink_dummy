// dataEmployee
export const dataEmployee = {
  "success":true,
  "messages":"Berhasil Mendapatkan Data Gaji",
  "data":{
     "id_karyawan":"KRY2098201001",
     "nama_karyawan":"Bu Adara Olivia",
     "tanggal_awal":"2021-01-01",
     "tanggal_akhir":"2021-01-31",
     "total_kehadiran":22,
     "total_periode":1,
     "pengaturan_gaji":[
        {
           "id":1,
           "jenis":"periode",
           "nama":"Gaji Pokok",
           "nominal":8000
        },
        {
           "id":2,
           "jenis":"kehadiran",
           "nama":"Uang Makan",
           "nominal":10000
        },
        {
           "id":3,
           "jenis":"kehadiran",
           "nama":"Uang Absen",
           "nominal":12000
        },
        {
           "id":4,
           "jenis":"kehadiran",
           "nama":"Uang Transport",
           "nominal":15000
        },
        {
           "id":5,
           "jenis":"kehadiran",
           "nama":"Uang Snack",
           "nominal":5000
        }
     ],
     "pengaturan_upah":[
        {
           "id":1,
           "nama":"mencuci",
           "nominal":200
        },
        {
           "id":2,
           "nama":"menyetrikan",
           "nominal":1600
        }
     ],
     "pengerjaan_upah":[
        {
           "pengaturan_upah_id":2,
           "nominal":50,
           "satuan":"KG"
        },
        {
           "pengaturan_upah_id":1,
           "nominal":100,
           "satuan":"KG"
        }
     ],
     "komisi":[
        {
           "id":"1",
           "nama":"semarang",
           "nominal":"40000"
        }
     ],
     "tanggungan":[
        
     ]
  }
}