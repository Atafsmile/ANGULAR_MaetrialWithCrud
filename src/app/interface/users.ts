
  export class Users {
   public fullName!: string;
   public email!: string;
   public mobile!: number;
   public city!: string;
   public gender!:string;
  public  department!:string;
   public regdate!:string;
   public isPermanent!:boolean;
  
    constructor(
      fullName: string,
      email: string,
      mobile: number,
      city: string,
      gender:string,
      department:string,
      regdate:string,
      isPermanent:boolean,
    ) {
      this.fullName=fullName;
      this.email=email;
      this.mobile=mobile;
      this.city=city;
      this.gender=gender;
      this.department=department;
      this.regdate=regdate;
      this.isPermanent=isPermanent;
    }
  }
  