interface ReadAble {
    name: string;
    read(): void;
}
interface ReadAble2 {
    read2(): void
}
class SinhVien implements ReadAble, ReadAble2
{
    name: string = "";
    fullname: string;
    email: string;
    phone: string;
    age: number;

    constructor(fullname: string, email: string, phone: string, age: number) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.age = age;
    }

    study() {
        console.log(`${this.fullname} Study`)
    }

    read(): void {
        console.log(`${this.fullname} Read`)
    }

    read2(): void {
        console.log(`${this.fullname} Read2`)
        
    }

    go() {
        console.log(`${this.fullname} Go`)
    }

    speak() {
        console.log(`${this.fullname} Speak`)
    }

    printInfo() {
        console.log(`Fullname: ${this.fullname}`)
        console.log(`Email: ${this.email}`)
        console.log(`Age: ${this.age}`)
        console.log(`Phone: ${this.phone}`)
    }
}

let sinhviens: Array<SinhVien> = [];

sinhviens.push(new SinhVien("Quyet", 'quyettv.it@gmail.com', '092902825', 19));
sinhviens.push(new SinhVien("Sang", 'sang.it@gmail.com', '092902825', 23));
sinhviens.push(new SinhVien("Long", 'long.it@gmail.com', '092902825', 20));
sinhviens.push(new SinhVien("Phuong", 'phuong.it@gmail.com', '092902825', 16));

let sv: SinhVien | undefined = sinhviens.pop()


if (sv instanceof SinhVien) {
    sv.printInfo();
    sv.speak();
    sv.read();
    sv.read2();
}




