import{a as U,c as K}from"./chunk-CAF53LLR.js";import{l as $,m as B}from"./chunk-A2FAYOKV.js";import"./chunk-3LPXXZDP.js";import{$ as F,A as S,B as L,E as w,F as y,G as T,H as j,Ia as V,K as M,Ka as G,P as n,Q as E,V as p,X as v,Z as e,_ as t,aa as x,ba as c,ca as D,da as u,e as I,ea as f,ia as i,ka as a,la as O,ma as P,o as k,p as g,q as C,r as b,ta as h,ua as R,v as N,va as A}from"./chunk-XYNOEHGQ.js";var _=[],q=[],Q=[],J={aktif:q,ganti:Q};function Y(m,d){if(m&1&&(x(0),e(1,"div")(2,"div",18)(3,"p",19),i(4),t()(),e(5,"div",20)(6,"div",12)(7,"label",21),i(8," Pengetahuan "),t(),e(9,"label",13),i(10," : "),t()(),e(11,"div",22),i(12),t()(),e(13,"div",20)(14,"div",12)(15,"label",21),i(16," Keterampilan "),t(),e(17,"label",13),i(18," : "),t()(),e(19,"div",22),i(20),t()(),e(21,"div",20)(22,"div",12)(23,"label",21),i(24," Rata-rata "),t(),e(25,"label",13),i(26," : "),t()(),e(27,"div",22),i(28),t()()(),c()),m&2){let l=d.$implicit;n(4),a(" ",l.mapel,""),n(8),a(" ",l.nilai.pengetahuan,""),n(8),a(" ",l.nilai.keterampilan,""),n(8),a(" ",l.nilai.rata_rata,"")}}function ee(m,d){if(m&1&&(x(0),e(1,"div",10)(2,"div",11)(3,"div",12)(4,"label",13),i(5," Semester "),t(),e(6,"label",13),i(7," : "),t()(),e(8,"div",14),i(9),t()(),e(10,"div",11)(11,"div",12)(12,"label",13),i(13," Kelas "),t(),e(14,"label",13),i(15," : "),t()(),e(16,"div",14),i(17),t()(),e(18,"div",11)(19,"div",12)(20,"label",13),i(21," Total Nilai "),t(),e(22,"label",13),i(23," : "),t()(),e(24,"div",14),i(25),t()(),e(26,"div",11)(27,"div",12)(28,"label",13),i(29," Peringkat "),t(),e(30,"label",13),i(31," : "),t()(),e(32,"div",14),i(33),t()(),e(34,"div",15)(35,"h5",16),i(36,"Data Nilai"),t(),e(37,"div",17),p(38,Y,29,4,"ng-container",9),t()()(),c()),m&2){let l=d.$implicit;n(9),a(" ",l.semester," "),n(8),a(" ",l.kelas," "),n(8),a(" ",l.total," "),n(8),a(" ",l.peringkat," "),n(5),v("ngForOf",l.data_nilai)}}var W=(()=>{let d=class d{constructor(){this.nilai=_,this.view=new M}ngOnInit(){console.log("lihat-daftar",this.nilai)}closeModal(){this.view.emit(!1)}};d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=S({type:d,selectors:[["ppdb-lihat-daftar-nilai-dasbor"]],inputs:{nilai:"nilai"},outputs:{view:"view"},decls:11,vars:1,consts:[[1,"relative","p-4","w-screen","max-h-full"],[1,"relative","bg-white","rounded-lg","shadow","w-full","h-auto","p-4"],[1,"flex","flex-row","justify-between","items-center","mb-8"],[1,"text-2xl","md:text-3xl","font-bold"],["type","button",1,"rounded","hover:bg-gray-300",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6","text-gray-500"],["fill-rule","evenodd","d","M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z","clip-rule","evenodd"],[1,"flex","flex-col","items-center","justify-between","w-full","max-h-96","overflow-x-hidden","overflow-y-scroll"],[1,"mx-auto","w-full","text-start"],[4,"ngFor","ngForOf"],[1,"grid","mb-8","sm:grid-cols-1","divide-y","divide-gray-100","border","border-gray-300","rounded-lg"],[1,"grid","gap-2","grid-cols-4","p-2.5"],[1,"flex","flex-row","justify-between"],[1,"text-sm","font-medium","text-blue-900"],[1,"col-span-3","text-cen","text-blue-900","text-sm","rounded-lg","block","w-full"],[1,"grid","gap-2","grid-cols-1","p-2.5"],[1,"text-lg","md:text-lg","font-bold"],[1,"grid","sm:grid-cols-4","gap-4"],[1,"pl-4","py-2","bg-primary-bg"],[1,"text-sm","md:text-sm","font-normal","text-primary-txt"],[1,"grid","grid-cols-2"],[1,"ml-4","text-sm","font-medium","text-blue-900"],[1,"ml-2","text-blue-900","text-sm","rounded-lg","block"]],template:function(s,r){s&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),i(4,"Lihat Daftar Nilai"),t(),e(5,"button",4),u("click",function(){return r.closeModal()}),T(),e(6,"svg",5),F(7,"path",6),t()()(),j(),e(8,"div",7)(9,"div",8),p(10,ee,39,5,"ng-container",9),t()()()()),s&2&&(n(10),v("ngForOf",r.nilai))},dependencies:[h]});let m=d;return m})();function ie(m,d){if(m&1){let l=D();x(0),e(1,"div",16)(2,"span",17),i(3,"Info alert!"),t(),i(4),e(5,"span",18),u("click",function(){w(l);let s=f();return y(s.refreshDataGetDasbor())}),i(6,"Ulangi"),t()(),c()}if(m&2){let l=f();n(4),a(" ",l.getDasborErrorMessage,", ")}}function ne(m,d){if(m&1&&(x(0),e(1,"div",19)(2,"div",20)(3,"div",21)(4,"div",22)(5,"label",6),i(6," Tahap "),t(),e(7,"label",7),i(8," : "),t()(),e(9,"div",23),i(10),t()(),e(11,"div",21)(12,"div",22)(13,"label",6),i(14," Pilihan "),t(),e(15,"label",7),i(16," : "),t()(),e(17,"div",23),i(18),t()(),e(19,"div",21)(20,"div",22)(21,"label",6),i(22," Jalur "),t(),e(23,"label",7),i(24," : "),t()(),e(25,"div",23),i(26),t()(),e(27,"div",21)(28,"div",22)(29,"label",6),i(30," Urutan "),t(),e(31,"label",7),i(32," : "),t()(),e(33,"div",23),i(34),t()(),e(35,"div",21)(36,"div",22)(37,"label",6),i(38," Daftar "),t(),e(39,"label",7),i(40," : "),t()(),e(41,"div",23),i(42),t()(),e(43,"div",21)(44,"div",22)(45,"label",6),i(46," Status "),t(),e(47,"label",7),i(48," : "),t()(),e(49,"div",23),i(50),t()(),e(51,"div",21)(52,"div",22)(53,"label",6),i(54," Ket "),t(),e(55,"label",7),i(56," : "),t()(),e(57,"div",23),i(58),t()()()(),c()),m&2){let l=d.$implicit;n(10),a(" ",l.tahap,""),n(8),a(" ",l.sekolah,""),n(8),a(" ",l.jalur,""),n(8),a(" ",l.urutan,""),n(8),a(" ",l.tgl_daftar,""),n(8),a(" ",l.status,""),n(8),a(" ",l.ket,"")}}function ae(m,d){if(m&1&&(x(0),e(1,"div",19)(2,"div",24)(3,"div",21)(4,"div",22)(5,"label",6),i(6," Tahap "),t(),e(7,"label",7),i(8," : "),t()(),e(9,"div",23),i(10),t()(),e(11,"div",21)(12,"div",22)(13,"label",6),i(14," Pilihan "),t(),e(15,"label",7),i(16," : "),t()(),e(17,"div",23),i(18),t()(),e(19,"div",21)(20,"div",22)(21,"label",6),i(22," Jalur "),t(),e(23,"label",7),i(24," : "),t()(),e(25,"div",23),i(26),t()(),e(27,"div",21)(28,"div",22)(29,"label",6),i(30," Urutan "),t(),e(31,"label",7),i(32," : "),t()(),e(33,"div",23),i(34),t()(),e(35,"div",21)(36,"div",22)(37,"label",6),i(38," Daftar "),t(),e(39,"label",7),i(40," : "),t()(),e(41,"div",23),i(42),t()(),e(43,"div",21)(44,"div",22)(45,"label",6),i(46," Ganti "),t(),e(47,"label",7),i(48," : "),t()(),e(49,"div",23),i(50),t()(),e(51,"div",21)(52,"div",22)(53,"label",6),i(54," Status "),t(),e(55,"label",7),i(56," : "),t()(),e(57,"div",23),i(58),t()()()(),c()),m&2){let l=d.$implicit;n(10),a(" ",l.tahap,""),n(8),a(" ",l.sekolah,""),n(8),a(" ",l.jalur,""),n(8),a(" ",l.urutan,""),n(8),a(" ",l.tgl_daftar,""),n(8),a(" ",l.tgl_ganti,""),n(8),a(" ",l.status,"")}}function le(m,d){if(m&1){let l=D();x(0),e(1,"div",25)(2,"ppdb-lihat-daftar-nilai-dasbor",26),u("view",function(s){w(l);let r=f();return y(r.getLihatDaftarNilai(s))}),t()(),c()}if(m&2){let l=f();n(2),v("nilai",l.nilai)}}var H=(()=>{let d=class d{constructor(o,s,r){this.callApiS=o,this.stateLoginS=s,this.router=r,this.destroy=new I,this.user=U,this.nilai=_,this.riwayatPilihan=J,this.getDasborError=!1,this.getDasborErrorMessage=null,this.viewLihatDaftarNilai=!1}ngOnInit(){this.getDasbor()}ngOnDestroy(){this.destroy.next(),this.destroy.complete()}getDasbor(){this.stateLoginS.getLogin.pipe(b(o=>{this.user=o.user}),g(o=>this.callApiS.get("siswa/nilai/"+o.user.siswa_id)),b(o=>this.nilai=o.data),g(o=>this.stateLoginS.getLogin),g(o=>this.callApiS.post(null,"daftar/riwayat",o.auth.access_token)),b(o=>this.riwayatPilihan=o.data),k(o=>{throw this.getDasborError=!0,this.getDasborErrorMessage=o.error.message,o.error.message=="Unauthorized. Access denied."&&(this.stateLoginS.clearLogin(),this.router.navigate(["/"])),o}),C(this.destroy)).subscribe()}refreshDataGetDasbor(){this.getDasbor()}lihatDaftarNilai(){this.viewLihatDaftarNilai=!this.viewLihatDaftarNilai}getLihatDaftarNilai(o){this.viewLihatDaftarNilai=o}};d.\u0275fac=function(s){return new(s||d)(E(B),E(K),E(V))},d.\u0275cmp=S({type:d,selectors:[["ppdb-dasbor"]],decls:126,vars:24,consts:[[1,"py-8","md:ml-14","md","mx-auto","max-w-screen-xl","text-start","buble-pattern"],[4,"ngIf"],[1,"mb-8","text-2xl","md:text-3xl","font-bold"],[1,"grid","mb-8","sm:grid-cols-1","divide-y","divide-gray-100","border","border-gray-300","rounded-lg"],[1,"grid","gap-2","grid-cols-4"],[1,"mt-2","flex","flex-row","justify-between"],[1,"ml-4","text-sm","font-medium","text-blue-900"],[1,"text-sm","font-medium","text-blue-900"],[1,"col-span-3","text-blue-900","text-sm","rounded-lg","block","w-full","p-2.5"],[1,"hover:underline","cursor-pointer","hover:text-thirty-bg","font-medium","ml-2","col-span-4","text-blue-900","text-sm","rounded-lg","block","w-full","p-2.5",3,"click"],[1,"grid","sm:grid-cols-2","items-start","md:gap-8","mb-8","rounded-lg"],[1,"grid","mb-8","sm:grid-cols-1","divide-y","border","border-gray-300","rounded-sm"],[1,"pl-4","py-2","bg-primary-bg"],[1,"text-base","md:text-base","font-medium","text-primary-txt"],[4,"ngFor","ngForOf"],[1,"grid","mb-8","sm:grid-cols-1","items-start","divide-y","border","border-gray-300","rounded-sm"],["role","alert",1,"p-4","mb-4","text-sm","text-red-800","rounded-lg","bg-red-50"],[1,"font-medium"],[1,"font-medium","text-md","hover:underline","cursor-pointer",3,"click"],[1,"grid","sm:grid-cols-1","divide-y","divide-gray-300","w-full","max-h-96","overflow-y-scroll","overflow-x-hidden"],[1,"grid","my-2","sm:grid-cols-1","rounded-lg","divide-y","divide-gray-50"],[1,"grid","grid-cols-4","py-1"],[1,"flex","flex-row","justify-between"],[1,"ml-2","col-span-3","text-blue-900","text-sm","rounded-lg","block","w-full"],[1,"grid","my-2","sm:grid-cols-1","rounded-lg"],[1,"fixed","flex","justify-center","items-center","inset-0","z-50","bg-gray-300","bg-opacity-65","w-full","h-full"],[3,"view","nilai"]],template:function(s,r){s&1&&(e(0,"div",0),p(1,ie,7,1,"ng-container",1),e(2,"h3",2),i(3,"Biodata"),t(),e(4,"div",3)(5,"div",4)(6,"div",5)(7,"label",6),i(8," NISN "),t(),e(9,"label",7),i(10," : "),t()(),e(11,"div",8),i(12),t()(),e(13,"div",4)(14,"div",5)(15,"label",6),i(16," NIK "),t(),e(17,"label",7),i(18," : "),t()(),e(19,"div",8),i(20),t()(),e(21,"div",4)(22,"div",5)(23,"label",6),i(24," Nama Lengkap "),t(),e(25,"label",7),i(26," : "),t()(),e(27,"div",8),i(28),t()(),e(29,"div",4)(30,"div",5)(31,"label",6),i(32," Jenis Kelamin "),t(),e(33,"label",7),i(34," : "),t()(),e(35,"div",8),i(36),t()(),e(37,"div",4)(38,"div",5)(39,"label",6),i(40," Tempat, Tanggal Lahir "),t(),e(41,"label",7),i(42," : "),t()(),e(43,"div",8),i(44),t()(),e(45,"div",4)(46,"div",5)(47,"label",6),i(48," Domisili "),t(),e(49,"label",7),i(50," : "),t()(),e(51,"div",8),i(52),t()(),e(53,"div",4)(54,"div",5)(55,"label",6),i(56," Alamat "),t(),e(57,"label",7),i(58," : "),t()(),e(59,"div",8),i(60),t()(),e(61,"div",4)(62,"div",5)(63,"label",6),i(64," Asal Sekolah "),t(),e(65,"label",7),i(66," : "),t()(),e(67,"div",8),i(68),t()(),e(69,"div",4)(70,"div",5)(71,"label",6),i(72," Nilai Rapor "),t(),e(73,"label",7),i(74," : "),t()(),e(75,"div",8),i(76),t()(),e(77,"div",4)(78,"div",5)(79,"label",6),i(80," Bobot Prestasi "),t(),e(81,"label",7),i(82," : "),t()(),e(83,"div",8),i(84),t()(),e(85,"div",4)(86,"div",5)(87,"label",6),i(88," Afirmasi /Disabilitas "),t(),e(89,"label",7),i(90," : "),t()(),e(91,"div",8),i(92),t()(),e(93,"div",4)(94,"div",5)(95,"label",6),i(96," Pindah Orang tua/Wali "),t(),e(97,"label",7),i(98," : "),t()(),e(99,"div",8),i(100),t()(),e(101,"div",4)(102,"div",5)(103,"label",6),i(104," Anak Gurun "),t(),e(105,"label",7),i(106," : "),t()(),e(107,"div",8),i(108),t()(),e(109,"div",4)(110,"div",9),u("click",function(){return r.lihatDaftarNilai()}),i(111," Lihat Daftar Nilai"),t()()(),e(112,"h3",2),i(113,"Pilihan Sekolah"),t(),e(114,"div",10)(115,"div",11)(116,"div",12)(117,"h5",13),i(118,"Sekarang"),t()(),p(119,ne,59,7,"ng-container",14),t(),e(120,"div",15)(121,"div",12)(122,"h5",13),i(123,"Riwayat"),t()(),p(124,ae,59,7,"ng-container",14),t()()(),p(125,le,3,1,"ng-container",1)),s&2&&(n(),v("ngIf",r.getDasborError),n(11),a(" ",r.user.nisn,""),n(8),a(" ",r.user.nik,""),n(8),a(" ",r.user.nama_lengkap,""),n(8),a(" ",r.user.jenis_kelamin,""),n(8),O(" ",r.user.tempat_lahir,", ",r.user.tanggal_lahir,""),n(8),a(" ",r.user.domisili,""),n(8),P(" ",r.user.alamat.detail,", RT ",r.user.alamat.rt,"/ RW ",r.user.alamat.rw,", kelurahan ",r.user.alamat.kelurahan,", kecamatan ",r.user.alamat.kecamatan,", kabupaten ",r.user.alamat.kabupaten,", provinsi ",r.user.alamat.provinsi,""),n(8),a(" ",r.user.sekolah_asal,""),n(8),a(" ",r.user.nilai_rapor,""),n(8),a(" ",r.user.nilai_prestasi,""),n(8),a(" ",r.user.afirmasi,""),n(8),a(" ",r.user.pindahortu,""),n(8),a(" ",r.user.anakguru,""),n(11),v("ngForOf",r.riwayatPilihan.aktif),n(5),v("ngForOf",r.riwayatPilihan.ganti),n(),v("ngIf",r.viewLihatDaftarNilai))},dependencies:[h,R,W]});let m=d;return m})();var re=[{path:"",component:H}],Ie=(()=>{let d=class d{};d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=L({type:d}),d.\u0275inj=N({imports:[A,$,G.forChild(re)]});let m=d;return m})();export{Ie as DasborModule};
