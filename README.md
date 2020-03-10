# OOP
### Class
Class merupakan Method/function yang ada di dalam sebuah object, dan untuk menggunakannya class harus di instance terlebih dahulu menjadi object agar dapat dijalankan.

#### Implementasi Class
```sh
class Motor {
    constructor(tipe) {
        this.tipe = tipe
    }
    printTipe(){
        console.log(this.tipe)
    }
}

const motor = new Motor("Scrambler")
motor.printTipe()
````

### Static Method
> Sebuah method yang tidak perlu memanggil class dari method tersebut.

#### implemenetasi Static Method
````sh
class Motor {
    constructor(name, tipe){
        this.name = name
        this.tipe = tipe
    }
    static instance(){
        return new Motor("Honda CG 150", "Tracker")
    }
    printTipe(){
        return console.log(Motor ini adalah ${this.name})
    }
}

const motor = Motor.instance()
motor. printTipe()
````
### Chaining Method
> Memanggil method secara berantai yang mempunyai return value yang sama.

#### Implementasi
````sh
class Motor{
    constructor(name) {this.name = name}
    setAge(age){
        this.age = age
        return this
    } 
    setTipe(tipe){
        this.tipe = tipe
        return this
    }
    printAll() { console.log (this.name, this.age, this.tipe)}
}
const motor = new Motor("Honda CG 150")
motor.setAge(3).setTipe("Scrambler").setAge(5).printAll()
````

### Encapsulation
Metode yang digunakan untuk membatasi akses langsung ke properti, dengan tujuan agar method dan class tersebut tidak disalahgunakan. Dalam artian enkapsulasi bisa dibilang membungkus properti dan method dalam satu function

### Inheritance
> Metode dimana menurunkan sifat pada sebuah class properti dan method nya ke class lain 

# Design Pattern
Design pattern merupakan sebuah prosedural dalam pengembangan aplikasi yang menjadi solusi dalam permasalahan secara umum. Design pattern hanya berbentuk template bukan sebuah code akhir untuk segera dieksekusi.

### Jenis - Jenis Design Pattern
 - Separation of concern
    >  Design pattern yang membagi program dalam project menjadi bagian yang berbeda beda sehingga setiap bagian membahas masalah yang terpisah dengan bagian yang lain.

 - Factory pattern
    > Design pattern pada class yang mempunyai ketergantungan dengan class lain tanpa harus diketahui cara pembuatan dari class tersebut.

 - Adapter Pattern
    > Design pattern yang dalam satu class mempunyai banyak karakteristik yang berbeda pada sebuah property member yang sama.